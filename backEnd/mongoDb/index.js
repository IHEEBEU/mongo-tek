const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/tekstore";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
const prod=require('./Product.js')



const getAllProducts = async () => {

 return  await prod.find({});
};
const createBlog = async (blog) => {
  return await prod.create(blog);
};
const deleteBlog = async (id) => {
    return await prod.findByIdAndDelete(id);
  };
const updateBlog = async (id, blog) => {
    return await prod.findByIdAndUpdate(id, blog);
  }; 
module.exports = {
  db,
  createBlog,
  getAllProducts,
  deleteBlog,
  updateBlog
};


// const BlogModel = require("../models/Blog");

// exports.getAllBlogs = async () => {
//   return await BlogModel.find();
// };

// exports.createBlog = async (blog) => {
//   return await BlogModel.create(blog);
// };
// exports.getBlogById = async (id) => {
//   return await BlogModel.findById(id);
// };

// exports.updateBlog = async (id, blog) => {
//   return await BlogModel.findByIdAndUpdate(id, blog);
// };

// exports.deleteBlog = async (id) => {
//   return await BlogModel.findByIdAndDelete(id);
// };
