const dbService = require('../../services/db.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')



async function query(filterBy) {
    console.log('toy service got filterby', filterBy)
    try {
        const collection = await dbService.getCollection('toy')
        var toys = await collection.find().toArray()

        if (!filterBy) {
            return toys
        }
        //filter name, type and stock
        const regex = new RegExp(filterBy.name, 'i')
        var toysForDisplay = toys.filter(toy => {
            return regex.test(toy.name) &&
                (toy.type === filterBy.typeFilter || filterBy.typeFilter === 'all')
                && (JSON.stringify(toy.inStock) === filterBy.stockFilter || filterBy.stockFilter === 'all')
        })
        if (filterBy.sortBy === 'name') {
            utilService.sortByName(toysForDisplay)
        }else{
            utilService.sortByPrice(toysForDisplay)
        }
        return toysForDisplay

    } catch (error) {
        logger.error('cannot find toys', err)
        throw err
    }
}


async function remove(toyId) {
    console.log('toy service- remove', toyId)
    try {
        const collection = await dbService.getCollection('toy')

        const query = { _id: ObjectId(toyId) }
        await collection.deleteOne(query)
    } catch (err) {
        logger.error(`cannot remove toy ${toyId}`, err)
        throw err
    }
}

async function add(toy) {
    try {
        const collection = await dbService.getCollection('toy')
        await collection.insertOne(toy)
        return toy;
    } catch (err) {
        logger.error('cannot insert toy', err)
        throw err
    }
}

async function update(toy) {

    try {
        // peek only updatable fields!
        const toyToSave = {
            _id: ObjectId(toy._id),
            name: toy.name,
            price: toy.price,
            type: toy.type,
            inStock: toy.inStock,
            review: toy.review
        }
        const collection = await dbService.getCollection('toy');
        collection.updateOne({ '_id': toyToSave._id }, { $set: toyToSave })
        // console.log('the toy to save in service after apdate is:', toyToSave)
        return toyToSave;


    }
    catch (err) {


        logger.error(`cannot update toy ${toy._id}`, err)
        throw err

    }

}

async function getById(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        const toy = await collection.findOne({ '_id': ObjectId(toyId) })
        return toy
    } catch (err) {
        logger.error(`while finding toy ${toyId}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

module.exports = {
    query,
    remove,
    add,
    update,
    getById
}


