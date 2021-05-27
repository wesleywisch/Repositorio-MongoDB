const mongoose = require('mongoose');

// esse aki é o modelo que usamos no controlador

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 },
});

module.exports = Link = mongoose.model('Link', linkSchema)