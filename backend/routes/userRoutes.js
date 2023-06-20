
const userController=require("./../controller/usersController")
const { detailpizzauser} = require("../controller/adminController")


const express = require('express');
const router = express.Router();

// Assuming you have a pizza model or a MongoDB collection called "Pizza"
const Pizza = require('../model/pizzaSchema');

// Single Pizza Route
router.get('/detailpizzauser/:id', async (req, res) => {
    const { id } = req.params;

    try {
      // Find the pizza by ID
      const pizza = await Pizza.findById(id);
    
      if (!pizza) {
        return res.status(404).json({ error: 'Pizza not found' });
      }
    
      res.json(pizza);
    } catch (error) {
      console.error("error");
      res.status(500).send('Server Error');
    }
});

module.exports = router;
