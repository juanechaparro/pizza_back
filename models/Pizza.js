const { Schema, model } = require("mongoose");

const PizzaSchema = Schema({
  name: {
      type:String,
      required :true
  },
  phone:{
      type:String
  },
  pizzaName:{
      type:String,
      required:true
  },
  date:{
    type:Date,
    required:true
 },
 price:{
    type:Number,
    required:true
 },
 ingredients:[{
    type: String
}]

});
PizzaSchema.method('toJSON', function(){
   const {__v, _id, ...object} =this.toObject();
   object.id = _id;
   return object;
})

 module.exports = model('Pizza', PizzaSchema);