class UsuariosView{
       constructor(){
       }
       lista(usuarios){
        let container = '<div class="container">';
        Usuarios.forEach(usuario => {
            container += `<div>${usuario.nome} - ${usuario.email} </div><br/>`
        });
         container += "</div>";
         return container;
       }
       renderizarFormulario(){
        return `<form id="form-usuario">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" placeholder="Nome" required/>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email" required/>
                    <button type="submit">Salvar</button>
                </form>`;
       }
}
export default UsuariosView;