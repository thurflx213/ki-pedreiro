import './index.css';
import ServicoController from './Controllers/ServicoController.js';
import UsuarioController from './Controllers/UsuarioController.js';
import Configuracao from './Services/Configuracao.js';

const config = new Configuracao();
 await config.modoEscuro();
 
const rotas = {
  '/servicos': ServicoController,
  '/usuarios': UsuarioController,
};
function navegarPara(rota) {
  const controller = new rotas[rota]();
  document.querySelector('#app').innerHTML = controller.listar();
}
window.addEventListener('hashchange', () => {
  const rota = window.location.hash.replace('#', '/');
  navegarPara(rota);
});

navegarPara('/servicos');

