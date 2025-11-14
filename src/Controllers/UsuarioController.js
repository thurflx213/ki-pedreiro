import Usuarios from "../Models/Usuarios.js";
import UsuariosView from "../Views/UsuariosView.js";
class UsuarioController{
         constructor(){
            this.usuarioModel = new Usuarios();
            this.UsuariosView = new UsuariosView(this.usuarioModel);
         }
            listar(){
                return this.UsuariosView.renderizar();
            }
  }

export default UsuarioController;