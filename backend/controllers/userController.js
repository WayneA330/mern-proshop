import User from "../models/UserModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc     Auth user & get token
// @route    POST /api/users/login
// @public   Public
const authUser = asyncHandler(async (req, res) => {
  res.send("Auth User");
});

// @desc     Register User
// @route    POST /api/users
// @public   Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("Register User");
});

// @desc     Logout User & clear cookie
// @route    POST /api/users/logout
// @public   Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout User");
});

// @desc     Get user profile
// @route    GET /api/users/profile
// @public   Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get User Profile");
});

// @desc     Update user profile
// @route    PUT /api/users/profile
// @public   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update User Profile");
});

// @desc     Get users
// @route    GET /api/users
// @public   Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get Users");
});

// @desc     Get users by ID
// @route    GET /api/users/:id
// @public   Private / Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get User by ID");
});

// @desc     Delete users
// @route    Delete /api/users/:id
// @public   Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete Users");
});

// @desc     Update users
// @route    PUT /api/users/:id
// @public   Private / Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
