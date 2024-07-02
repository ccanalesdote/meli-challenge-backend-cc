import { Router } from 'express';
import { searchProducts } from '../controllers/products.controller';

const router = Router();

router.get('/MLA/search', searchProducts);

export default router;