const express = require('express');

const dba = require('../data/helpers/actionModel.js');

const dbp = require('../data/helpers/projectModel.js');

const router = express.Router();

//endpoints

router.get('/', (req, res) => {
    dbp.get()
    .then(a => {
        res.status(200).json({"projects": a})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    dbp.get(id)
    .then(a => {
        res.status(200).json({"All actions required of this project" : a})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    const newProject = req.body;
    dbp.insert(newProject)
    .then(n => {
        res.status(200).json(n)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    dbp.remove(id)
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

    dbp.update(id, changes)
    .then(a => {
        res.status(200).json(a)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;