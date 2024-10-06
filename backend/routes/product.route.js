import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/" , getProducts)

router.post("/" ,createProduct) 

//if you are going to update all fields than use PUT method,
//if you are going to update only some field than use PATCH 
// (BUT this is not matter what you are using : both you can use)
router.put("/:id" , updateProduct)

router.delete("/:id" , deleteProduct)

export default router