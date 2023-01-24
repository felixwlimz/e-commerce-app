import { Schema, model } from "mongoose";

const productSchema = new Schema({
   productName : {
    type : String
   },
   productImage : {
     type : String
   },
   productPrice : {
    type : Number
   },
   productRating : {
    type : Number
   },
   productSold : {
    type : Number
   },
   location : {
    type : String 
   },
   quantity : {
    type : Number 
   }
});

const Product = model('Product', productSchema );

export default Product;