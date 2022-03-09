// Pizza routes
// /api/Pizzas

const {Router} = require("express");
const { check } = require("express-validator");
const { getPizzas, createPizza, deletePizza } = require("../controllers/pizzas");
const { isDate } = require("../helpers/isDate");
const { validateFills } = require("../middlewares/validate-fills");


const router = Router();

//obtener Pizzaos
 router.get('/', getPizzas);

// create new wvent
router.post('/',
[
    check('name', ' name is required').not().isEmpty(),
    check('date', ' date is required').custom(isDate),
    check('price', 'priceis required').not().isEmpty(),
    validateFills
],
 createPizza);
//delete Pizza
router.delete('/:id', deletePizza );

module.exports= router;