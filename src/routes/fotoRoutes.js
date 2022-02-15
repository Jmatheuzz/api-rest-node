import { Router } from 'express';
import fotoController from '../controllers/FotoController';
import loginRequire from '../middlewares/loginRequired';
const router = new Router();

router.post('/', loginRequire, fotoController.store);
export default router;
