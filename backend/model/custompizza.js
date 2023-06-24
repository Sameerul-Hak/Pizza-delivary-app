const mongoose = require('mongoose');

const customizedPizzaSchema = new mongoose.Schema({
  base: {
    type: String,
    required: true,
  },
  sauce: {
    type: String,
    required: true,
  },
  cheese: {
    type: String,
    required: true,
  },
  veggies: {
    type: [String],
    required: true,
  },
});

const CustomizedPizza = mongoose.model('CustomizedPizza', customizedPizzaSchema);

module.exports = CustomizedPizza;