import { Router } from "express";
import {createProduct, fetchProducts, updateProduct, deleteProduct} from "../Controllers/productController.js"

const router = Router()
router.post("/products", createProduct)
router.get("/products", fetchProducts)
router.get("/products/:id", fetchProducts)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)


export default router;