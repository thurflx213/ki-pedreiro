import UsuariosView from "../UsuariosView.js"
class UsuarioForm{
    constructor(){
      this.view = new UsuariosView();
    }
    renderizarFormulario(){
        return this.view.renderizarFormulario();
    }
}
export default UsuarioForm;