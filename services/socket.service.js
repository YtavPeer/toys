

const asyncLocalStorage = require('./als.service');
const logger = require('./logger.service');
const toyService = require('../api/toy/toy.service')


var gIo = null
var gSocketBySessionIdMap = {}

function connectSockets(http, session) {
    gIo = require('socket.io')(http);

    const sharedSession = require('express-socket.io-session');

    gIo.use(sharedSession(session, {
        autoSave: true
    }));
    gIo.on('connection', socket => {

        console.log('the connection in socket service in backend is')

        // console.log('socket.handshake', socket.handshake)
        gSocketBySessionIdMap[socket.handshake.sessionID] = socket
        // TODO: emitToUser feature - need to tested for CaJan21
        // if (socket.handshake?.session?.user) socket.join(socket.handshake.session.user._id)
        socket.on('disconnect', socket => {
            console.log('Someone disconnected', socket)
            if (socket.handshake) {
                gSocketBySessionIdMap[socket.handshake.sessionID] = null
            }
        })
        socket.on('chat topic', topic => {

            console.log('we got connect to chat topic in socket service:', topic)

            if (socket.myTopic === topic) return;
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            // logger.debug('Session ID is', socket.handshake.sessionID)
            socket.myTopic = topic
        })
        socket.on('chat newMsg', msg => {
            // emits to all sockets:
            // gIo.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            gIo.to(socket.myTopic).emit('chat addMsg', msg)
            //add history to toy db
            addToyHistory(socket.myTopic, msg)
        })
        socket.on('user typing', fromUser => {
            // emits to all sockets:
            // gIo.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            console.log('in the backend got typing from:', fromUser)
            socket.broadcast.to(socket.myTopic).emit('user is typing', fromUser)
            // gIo.to(socket.myTopic).emit('user is typing', fromUser)
        })

    })
}

async function addToyHistory(toyId, msg) {
    let toy = await toyService.getById(toyId)
    console.log('the tou we got is', toy)
    toy.history.push(msg)
    toyService.update(toy);
    console.log('finish updating')
}

function emit({ type, data }) {
    gIo.emit(type, data)
}

// TODO: Need to test emitToUser feature
function emitToUser({ type, data, userId }) {
    gIo.to(userId).emit(type, data)
}


// Send to all sockets BUT not the current socket 
function broadcast({ type, data }) {
    const store = asyncLocalStorage.getStore()
    const { sessionId } = store
    if (!sessionId) return logger.debug('Shoudnt happen, no sessionId in asyncLocalStorage store')
    const excludedSocket = gSocketBySessionIdMap[sessionId]
    if (!excludedSocket) return logger.debug('Shouldnt happen, No socket in map', gSocketBySessionIdMap)
    excludedSocket.broadcast.emit(type, data)
}


module.exports = {
    connectSockets,
    emit,
    broadcast
}



