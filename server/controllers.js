import Product from './models/productModel.js';


export const getAllProducts = async (req, res) => {
   try {
       const products = await Product.find();
       res.status(200).json({'status' : 'OK', 'data' : products});
   } catch (error) {
    console.log(error);
       res.status(500).json({'status' : 'Internal Server Error', 'error' : error})
   }
}

export const addProduct = async (req, res) => {
    const { productName, productPrice, productRating,productSold, location, productImage } = req.body;
    try {   
        const newProduct = new Product({
            productName : productName,
            productImage : productImage,
            productPrice : productPrice,
            productSold : productSold,
            productRating : productRating,
            location : location
        });

        if (productName === ''){
            res.status(400).json({ 'status': 'Error', 'message': 'Product may not be Empty' });
        }

        if (productImage === ''){
            res.status(400).json({ 'status': 'Error', 'message': 'Product may not be Empty' });
        }

        if (productPrice < 0 || productPrice === null){
            res.status(400).json({ 'status' : 'Error' , 'message' : 'Price may not be empty or less than 0'});
        }

        if (productSold < 0 || productSold === null) {
            res.status(400).json({ 'status': 'Error', 'message': 'Product Sold may not be empty or less than 0' });
        }

        if (productRating < 0 || productRating === null){
            res.status(400).json({ 'status': 'Error', 'message': 'Rating may not be empty or less than 0' });
        }

        if (location === ''){
            res.status(400).json({ 'status': 'Error', 'message': 'Location may not be empty' });
        }

        await newProduct.save();
        res.status(201).json({'status' : 'Created', 'message' : 'Successfully added new data'});

    } catch (error) {
        console.log(error);
        res.status(500).json({ 'status': 'Internal Server Error', 'error': error })
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json({'status' : 'OK', 'data' : product});
    } catch (error) {
        console.log(error);
        res.status(404).json({ 'status': 'Not Found', 'message': 'Product not found' });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { productName, productPrice, productRating, productSold, productImage, location } = req.body;
    try {
      await Product.updateOne({_id : id}, {$set : req.body});
        if (productName === '') {
            res.status(400).json({ 'status': 'Error', 'message': 'Product may not be Empty' });
        }

        if (productImage === '') {
            res.status(400).json({ 'status': 'Error', 'message': 'Product may not be Empty' });
        }

        if (productSold < 0 || productSold === null) {
            res.status(400).json({ 'status': 'Error', 'message': 'Product Sold may not be empty or less than 0' });
        }

        if (productPrice < 0 || productPrice === null) {
            res.status(400).json({ 'status': 'Error', 'message': 'Price may not be empty or less than 0' });
        }

        if (productRating < 0 || productRating === null) {
            res.status(400).json({ 'status': 'Error', 'message': 'Rating may not be empty or less than 0' });
        }

        if (location === '') {
            res.status(400).json({ 'status': 'Error', 'message': 'Location may not be empty' });
        }
        res.status(200).json({ 'status': 'OK', 'message': 'Successfully updated a data'});

    } catch (error) {
        console.log(error);
        res.status(404).json({ 'status': 'Not Found', 'message': 'Product not found' });
    }
}


export const deleteProduct = async (req, res) => {
    const { id } = req.params;
   
    try {
        await Product.deleteOne({_id : id});
        res.status(200).json({ 'status': 'OK', 'message': 'Successfully deleted a data' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ 'status': 'Not Found', 'message': 'Product not found' });
    }
}