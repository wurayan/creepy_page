let nome = document.querySelector("#nome");
//# para id; . para class
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let senhaconfirm = document.querySelector("#senhaconfirm");
let nome_icone = document.querySelector(".fa-user");
let email_icone = document.querySelector(".fa-envelope");
let senha_icone = document.querySelector(".fa-key");

valida_nome = false
valida_email = false
valida_senha = false

//declarando e iniciando a lista de usuarios
let lista_usuarios = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');
console.log(lista_usuarios)
//criar objeto usuario
let usuario = {
    nome: "",
    email: "",
    senha: ""
}
if (lista_usuarios.length == 0) {
    lista_usuarios.push(usuario);
    localStorage.setItem('lista_usuarios', JSON.stringify(lista_usuarios));
    console.log(lista_usuarios)
}


console.log(nome);
nome.addEventListener('keyup', () => {
    if (nome.value.length < 3) {
        nome.style.borderColor = "#6D0A00";
        nome.style.color = "#6D0A00"
        nome_icone.style.color = "#6D0A00"

    } else {
        nome.style.borderColor = "#006D0A"
        nome.style.color = "#006D0A"
        nome_icone.style.color = "#f3f3f3"
        valida_nome = true
    }
});
console.log(email);
email.addEventListener('keyup', () => {
    if (email.value.includes("@")) {
        email.style.borderColor = "#006D0A";
        email.style.color = "#006D0A"
        valida_email = true
    } else {
        email.style.borderColor = "#6D0A00"
        email.style.color = "#6D0A00"

    }
});
console.log(senha);
senha.addEventListener('keyup', () => {
    if (senha.value.length < 5) {
        senha.style.borderColor = "#6D0A00";
        senha.style.color = "#6D0A00"

    } else {
        senha.style.borderColor = "#006D0A"
        senha.style.color = "#006D0A"

    }
});
console.log(senhaconfirm);
senhaconfirm.addEventListener('keyup', () => {
    if (senhaconfirm.value == senha.value) {
        senhaconfirm.style.borderColor = "#006D0A";
        senhaconfirm.style.color = "#006D0A "
        valida_senha = true
    } else {
        senhaconfirm.style.borderColor = "#6D0A00"
        senhaconfirm.style.color = "#6D0A00"

    }
});


function salvar() {
    console.log(email.value)
    if (valida_email && valida_nome && valida_senha) {
        let confirma = confirm("Confirma que nome e E-mail estão corretos?\nNome: " + nome.value + "\nE-mail: " + email.value)
        if (confirma == true) {
            usuario.nome = nome.value;
            usuario.email = email.value;
            usuario.senha = senha.value;

            console.log(usuario);
            lista_usuarios = JSON.parse(localStorage.getItem('lista_usuarios'));
            lista_usuarios.push(usuario);
            localStorage.setItem('lista_usuarios', JSON.stringify(lista_usuarios));
        }
    }
}