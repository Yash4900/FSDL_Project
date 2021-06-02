const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
