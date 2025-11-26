class UsuariosView{
       constructor(){
       }
       renderizarMenu(){
        return `<div class="container">
                    <ul>
                        <li><a href="#usuario_listar">listar Usuario</a></li>
                        <li><a href="#usuario_cadastrar">Cadastrar Usuario</a></li>
                    </ul>
                </div>`;    
       }
       renderizarLista(usuarios){
        let container = `<div style="overflow-x:auto;">
                            <table>
                             <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </tr>`;
        usuarios.forEach(usuario => {
            container += `<tr><td>${usuario.nome}</td><td>${usuario.email}</td>
            <td> 
            <button class="editar-user" data-id="${usuario.uuid}">Editar</button> 
            <button class="excluir-user" data-id="${usuario.uuid}">Excluir</button>
            </td>
            </tr>`;
        });
         container += `</table></div>
         <div id="myModal" class="modal">
            <div class="modal-content">
               <span class="close" id="fechar">&times;</span>
               <form id="form-usuario">
               <input id="id" >
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" placeholder="Nome">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email">
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
         `;
         return container;
       }
       renderizarFormulario(){
        return `<form id="form-usuario">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" placeholder="Nome">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email">
                    <button type="submit">Salvar</button>
                </form>`;
       }
       abrirModal(){
         const modal = document.getElementById("myModal")
         modal.style.display = "block"
       }
       fecharModal(){
        const modal = document.getElementById("myModal")
        modal.style.display = "none"
       }
}
export default UsuariosView;