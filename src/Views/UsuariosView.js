import Usuarios from "../Controllers/Usuarios.js";

class UsuariosView{
       constructor(){
            this.usuarios = new Usuarios();
       }

       renderizar(){
        const usuarios = this.usuarios.listar();
        const container = document.createElement('div');
        container.classList.add('usuarios-container');
        usuarios.forEach(usuario => {
            container.innerHTML += `<div>${usuario.nome} - ${usuario.email} </div><br/>`
        });
        return container.innerHTML;
       }
}
export default UsuariosView;