import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc     Fetch all products
// @route    GET /api/products
// @public   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // empty object gets all products
  res.json(products);
});

// @desc     Fetch a products
// @route    GET /api/products/:id
// @public   Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductsById };
