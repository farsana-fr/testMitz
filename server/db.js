const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/test")


const Product=mongoose.model("Product",{
    product_id: Number,
    name: String,
    price: Number
});

const Order=mongoose.model("Order",{
    customer_id: String,
    preference: String,
    date: String
});

const CustomerPreference=mongoose.model("CustomerPreference",{
    preference_id: String,
  product_id: Number
});

module.exports={
    Product,
    Order,
    CustomerPreference
};