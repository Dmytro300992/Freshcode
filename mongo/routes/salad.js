const {Router} = require('express');
const SaladController = require('../controllers/salad.controller');
const {findIngredient} = require('../middleware/getIngredients');

const saladRouter = Router();

saladRouter.post('/', findIngredient, SaladController.createSalad);
saladRouter.get('/', SaladController.getAllSalads);
saladRouter.get('/:saladId', SaladController.getSalad);
saladRouter.patch('/:saladId', SaladController.updateSalad);
saladRouter.delete('/:saladId', SaladController.deleteSalad);

module.exports = saladRouter;