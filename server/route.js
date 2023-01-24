import { Router } from "express";
import { getAllProducts, addProduct, getProductById, updateProduct, deleteProduct } from "./controllers.js";

const route = Router();

route.get('/api/products', getAllProducts);
route.get('/api/products/:id', getProductById);
route.post('/api/products', addProduct);
route.patch('/api/products/:id', updateProduct);
route.delete('/api/products/:id', deleteProduct);


export default route;
