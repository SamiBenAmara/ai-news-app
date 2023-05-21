const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: true,
    },
    back: {
        type: String,
        required: true,
    }
});

const multichoiceSchema = new mongoose.Schema({
    correct_answer: {
        type: Number,
        required: true,
    },
    possible_answers: {
        type: [String],
        required: true,
    },
    question: {
        type: String,
        required: true,
    }
})

const truefalseSchema = mongoose.Schema({
    correct_answer: {
        type: Boolean,
        required: true,
    },
    question: {
        type: String,
        required: true,
    }
})

const testSchema = new mongoose.Schema({
    flashcards: {
        type: [flashcardSchema]
    },
    multichoices: {
        type: [multichoiceSchema]
    },
    topic: {
        type: String,
        required: true
    },
    truefalse: {
        type: [truefalseSchema],
    },
});

module.exports = mongoose.model('Test', testSchema);