import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


/*
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
*/

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);

router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> Lista todos usuários GET
store/create -> Cria novo usuário POST
delete -> Apaga um usuário DELETE
show -> Mostra um usuário GET
update -> Atualiza um usuário PATCH/PUT



*/