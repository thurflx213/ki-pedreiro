import Usuarios from "../Models/Usuarios.js";
class UsuarioController{
         constructor(){
            this.usuarioModel = new Usuarios();
         }
            async listar(){
                const dados = await this.usuarioModel.listar();
                console.log('dados no controller', dados);
                return dados;
            }
            async cadastrar(usuario){
                if(!usuario.nome || !usuario.email){
                    return false;
                }
                this.usuarioModel.adicionar(usuario);
                return true;
            }
            async buscarUsuarioPorId(id){
                console.log(id)
                if(!id){
                    return false
                }
                return this.usuarioModel.buscarPorId(id)
            }
            async atualizarUsuario(usuario){
                if(!usuario.nome || !usuario.email){
                    return false;
                }
                const usuarioExistente = await this.usuarioModel.buscarPorId(usuario.uuid);
                if(!usuarioExistente){
                    return false;
                }
                const resultado = await this.usuarioModel.atualizar(usuario);
                return resultado;
            }

            async removerUsuario(uuid){
                const usuarioExistente = await this.usuarioModel.buscarPorId(uuid);
                if(!usuarioExistente){
                    return false
                }
                const resultado = await this.usuarioModel.remover(usuarioExistente);
                return resultado;
  }
}

export default UsuarioController;