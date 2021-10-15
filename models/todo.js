const mongoose = require('mongoose');
const { Schema } = mongoose;

const ToDoScheme = new Schema({
    title: {type: Number, required:true},
    description: {type: String, required:true},
    complete: {type: Boolean, required:true},
    dateMax: {type: String, required:true},
    createAt: {type: String, required:true}
});

module.exports = mongoose.model('ToDo', ToDoScheme);