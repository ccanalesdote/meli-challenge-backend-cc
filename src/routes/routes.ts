import { Router } from 'express';
import { getProduct, searchProducts } from '../controllers/products.controller';

const router = Router();

router.get('/items', searchProducts);
router.get('/items/:id', getProduct);

export default router;