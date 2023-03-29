import { Router } from "express";
import { addCategoria, getCategorias, removeCategoria, searchCategoriaByName, updateCategoria } from "../controllers/categoria.controller";

const router = Router();

router.get('/api/Categoria/', getCategorias);
router.post('/api/Categoria/', addCategoria);
router.put('/api/Categoria/:name', updateCategoria),
router.delete('/api/Categoria/:name', removeCategoria)

router.get('/api/Categoria/searchName/:name', searchCategoriaByName);
export default router;