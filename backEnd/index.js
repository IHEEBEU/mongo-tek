const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 5000;
// const db = require("./Mysql")
const {getAllProducts,createBlog,deleteBlog,updateBlog} = require('./mongoDb/index.js'); 

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB


// Routes

app.get('/products', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/products', async (req, res) => {
  try {
    const newProduct = createBlog(req.body);
    // await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = updateBlog(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({ error: 'Not Found' });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    await deleteBlog(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: 'Not Found' });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
