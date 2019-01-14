const express = require('express');

const dba = require('../data/helpers/actionModel.js');

const dbp = require('../data/helpers/projectModel.js');

const router = express.Router();

//middleware

//endpoints

router.get('/', (req, res) => {
    dba.get()
    .then(a => {
        res.status(200).json({"actions": a})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    dba.get(id)
    .then(a => {
        res.status(200).json(a)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    const newAction = req.body;
    dba.insert(newAction)
    .then(n => {
        res.status(200).json(n)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    dba.remove(id)
    .then(a => {
        res.status(200).json(a)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    dba.update(id, changes)
    .then(a => {
        res.status(200).json(a)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;