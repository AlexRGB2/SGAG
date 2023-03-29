import { Router } from "express";
import { addProduct, getProduct, getProducts, removeProduct, searchProductByName, updateProduct, searchProductByType } from "../controllers/products.controller";

const router = Router();


router.get('/api/Products/', getProducts);
router.get('/api/Products/:codeBar', getProduct);
router.post('/api/Products/', addProduct);
router.put('/api/Products/:name', updateProduct),
router.delete('/api/Products/:name', removeProduct)

router.get('/api/Products/searchName/:name', searchProductByName);
router.get('/api/Products/searchType/:type', searchProductByType);
export default router;