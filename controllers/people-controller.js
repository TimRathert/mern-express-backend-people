const express = require('express');
const router = express.Router();
const { People } = require('../models')

router.get('/', async (req, res) => {
    try{
        res.json(await People.find({}));
    }
    catch(e) {
        res.status(400).json(e)
    }
})

router.post('/', async (req, res) => {
    try{
        res.json(await People.create(req.body));
    }
    catch(e) {
    res.status(400).json(e)
    }
})

router.get('/:id', async (req, res) => {
    try{
        res.json(await People.findById(req.params.id));
    }
    catch(e) {
        res.status(400).json(e)
    }
})

router.put('./:id', async (req, res) => {
    try{
        res.json(await People.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}));
    }
    catch(e) {
        res.status(400).json(e)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        res.json(await People.findByIdAndDelete(req.params.id));
    }
    catch(e) {
        res.status(400).json(e)
    }
})

module.exports = router