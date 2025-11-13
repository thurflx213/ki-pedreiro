import './index.css';
import ServicosView from './Views/ServicosView';
import UsuariosView from './Views/UsuariosView';
const servicosView = new ServicosView();
const usuariosView = new UsuariosView();
const rotas = {
  '/servicos': servicosView,
  '/usuarios': usuariosView,
};
function navegarPara(rota) {
  console.log(rota)
  document.querySelector('#app').innerHTML = rotas[rota].renderizar();
}
window.addEventListener('hashchange', () => {
  const rota = window.location.hash.replace('#', '/');
  navegarPara(rota);
});

navegarPara('/servicos');

