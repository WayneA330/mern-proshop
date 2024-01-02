import Order from "../models/OrderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc     Create new order
// @route    POST /api/orders
// @public   Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("Add order items");
});

// @desc     Get logged in user orders
// @route    GET /api/orders/myorders
// @public   Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get my orders");
});

// @desc     Get order by ID
// @route    GET /api/orders/:id
// @public   Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("Get order by id");
});

// @desc     Update order to paid
// @route    GET /api/orders/:id/pay
// @public   Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update order to paid");
});

// @desc     Update order to delivered
// @route    GET /api/orders/:id/deliver
// @public   Private / Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update order to delivered");
});

// @desc     Get all orders
// @route    GET /api/orders
// @public   Private / Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
