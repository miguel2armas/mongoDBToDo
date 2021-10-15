const express = require('express');
const router = express.Router();
const ToDo = require('../models/todo');

router.get('/', async (req, res)=>{
    const todo = await ToDo.find();
    res.json(todo);
});

router.get('/:id', async (req, res)=>{
    const todo = await ToDo.findById(req.params.id);
    res.json(todo);
});

router.post('/', async (req, res) =>{
    console.log(req.body);
    const {title, description, complete, dateMax, createAt} = req.body;
    const todo = new ToDo({title, description, complete, dateMax, createAt});
    await todo.save();
    res.json(
        {'result':1, 
    'message': 'Todo is created!'}
    );
});

router.put('/:id', async (req, res) =>{
    const {title, description, complete, dateMax, createAt} = req.body;
    const todo = {title, description, complete, dateMax};
    await ToDo.findByIdAndUpdate(req.params.id, todo);
    res.json(
        {'result':1, 
    'message': 'Todo is update!'}
    );
});

router.delete('/:id', async (req, res) =>{
    await ToDo.findByIdAndRemove(req.params.id);
    res.json(
        {'result':1, 
        'message': 'Todo is deleted!'}
    );
});

module.exports = router;