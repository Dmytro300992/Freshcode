const mongoose = require('mongoose');
const {Schema} = mongoose;

const ingrSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number
    }
});


const Ingredient = mongoose.model('Ingredient', ingrSchema);

module.exports = Ingredient;