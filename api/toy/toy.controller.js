const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const toyService = require('./toy.service')
const utilService = require('../../services/util.service')

async function getToys(req, res) {

    let filterBy = req.query
    if (filterBy && Object.keys(filterBy).length === 0 && filterBy.constructor === Object) {
        filterBy = null
    }

    try {
        const toys = await toyService.query(filterBy)
        res.send(toys)
    } catch (err) {
        logger.error('Cannot get toys', err)
        res.status(500).send({ err: 'Failed to get toys' })
    }
}

async function deleteToy(req, res) {
    console.log('controller toy got')
    try {
        await toyService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete toy', err)
        res.status(500).send({ err: 'Failed to delete toy' })
    }
}

async function addToy(req, res) {
    try {
        var toy = req.body
        toy = await toyService.add(toy)
        res.send(toy)
    } catch (err) {
        logger.error('Failed to add toy', err)
        res.status(500).send({ err: 'Failed to add toy' })
    }
}

async function updateToy(req, res) {
    try {
        const toy = req.body
        const savedToy = await toyService.update(toy)
        res.send(savedToy)
    } catch (err) {
        logger.error('Failed to update toy', err)
        res.status(500).send({ err: 'Failed to update toy' })
    }
}

async function getToyById(req, res) {
    try {
        const toy = await toyService.getById(req.params.id)
        res.send(toy)
    } catch (err) {
        logger.error('Failed to get toy', err)
        res.status(500).send({ err: 'Failed to get toy' })
    }
}

//need to inplement add review 
async function addReview(req, res) {
    try {

        var review = req.body
        review._id = utilService.makeId()
        let toy = await toyService.getById(req.params.id)
        toy.review.push(review)
        toy = await toyService.update(toy)
        // console.log('the updated toy is back from server to controller is:', toy)
        //res.sendStatus(200);
        res.send(toy);


    } catch (err) {
        logger.error('Failed to update toy', err)
        res.status(500).send({ err: 'Failed to update toy' })
    }
}


module.exports = {
    getToys,
    deleteToy,
    addToy,
    updateToy,
    getToyById,
    addReview
}