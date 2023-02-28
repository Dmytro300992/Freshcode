const mongoose = require('mongoose');
const Salad = require('./Salad');
const Ingredient = require('./Ingredient');

const DB = process.env.DB_NAME || 'fe-test';

mongoose.connect(`mongodb://localhost:27017/${DB}`)
.catch(err => {
    console.log('connect failed!');
})


module.exports = {
    Salad, Ingredient
};