const {response} = require('express');
const Pizza = require('../models/Pizza');
const getPizzas = async(req, res = response)=>{
    const filterPizza = req.query._id ||null;
    let filter = {};
    if (filterPizza) {
        filter = { _id: filterPizza };
      }
    const pizzas = await Pizza.find(filter);
    res.json({
        ok :true,
        pizzas
    })
}

const createPizza = async(req, res = response)=>{
     const pizza = new Pizza(req.body);
     try{
       const savedPizza=  await pizza.save()
        res.json({
            ok:true,
            pizza: savedPizza
        })
     }catch(error){
       console.log(error)
       res.status(500).json({
           ok:false,
           msg: 'Talk to the admin'
       })  
     }
    
}

const deletePizza = (req, res = response)=>{
    res.json({
        ok :true,
        msg:'deletePizza'
    })
}

module.exports= {
    getPizzas,
    createPizza,
    deletePizza
}