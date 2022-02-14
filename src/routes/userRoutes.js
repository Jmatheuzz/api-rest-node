import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

router.get('/', userController.index);

router.get('/:id', userController.show);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

export default router;

/*
index -> Lista todos usuários GET
store/create -> Cria novo usuário POST
delete -> Apaga um usuário DELETE
show -> Mostra um usuário GET
update -> Atualiza um usuário PATCH/PUT



*/