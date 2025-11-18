import Servicos from "../Models/Servicos.js";
class ServicoController{
         constructor(){
            this.servicoModel = new Servicos();
         }
            listar(){
                return this.ServicosModel.listar();
            }
  }

export default ServicoController;