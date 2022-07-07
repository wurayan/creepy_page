let login_email = document.querySelector('#email')
let login_senha = document.querySelector('#senha')
let lista_usuarios = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');


function login() {
    lista_usuarios.forEach(usuario => {
        if (usuario.email == login_email.value && usuario.senha == login_senha.value) {
            location.href = "file:///C:/Users/ALUNO/Documents/Rayan%20Wu/FrontEnd%20II/Cadastro/Tela%20Usu%C3%A1rio/tela_inicial.html";

            let usuario = {
                nome: usuario.email,
                email: usuario.email
            }

            lista_usuarios.push(usuario);
            localStorage.setItem('usuario_logado', JSON.stringify())

            localStorage.setItem('lista_usuarios', JSON.stringify(lista_usuarios));
        }
    });
};