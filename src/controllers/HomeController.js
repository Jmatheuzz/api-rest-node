import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.json('Ok');
  }
}
export default new HomeController();
