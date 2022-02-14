import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Amanda',
      sobrenome: 'Vieira',
      email: 'mauro@gmail.com',
      idade: 27,
      peso: 60,
      altura: 1.71,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
