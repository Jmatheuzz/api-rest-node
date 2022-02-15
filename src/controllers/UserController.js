import User from '../models/User';

class UserController {
  async store(req, res) {

    try {
      const novoUser = await User.create(req.body);
      const {nome, email} = novoUser;
      res.json({nome, email});
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message)
      });
    }
  }
  async index(req, res) {

    try {
      const users = await User.findAll({attributes:['nome', 'email']});
      res.json(users);
    } catch (error) {
      res.json(null);
    }
  }

  async show(req, res) {

    try {
      const user = await User.findByPk(req.params.id);
      const {nome, email} = user;
      res.json(user);
    } catch (error) {
      res.json(null);
    }
  }

  async update(req, res) {

    try {

      const user = await User.findByPk(req.userId);

      const novosDados = await user.update(req.body);
      const {nome, email} = novosDados;
      res.json({nome, email});
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {

    try {

      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuario não existe']
        });
      }

      await user.destroy();
      res.json(null);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message)
      });
    }
  }
}
export default new UserController();
