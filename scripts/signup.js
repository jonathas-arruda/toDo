// const formulario = document.querySelector('form')
const nome = document.getElementById("name");
const msgNome = document.getElementById("msgNome");

const sobrenome = document.getElementById("last-name");
const msgSobrenome = document.getElementById("msgSobrenome");

const email = document.querySelector(".email");
const password = document.querySelectorAll(".password");
const btnCadastro = document.getElementById("btn");
const usuarios = {};

const msg_01 = "Por favor, informe um nome válido!";
const msg_02 = "Por favor, informe um sobrenomenome válido!";

const mensagemErro = (display, text, owner) => {
  owner.style.display = display;
  owner.innerHTML = text;
};

const erro = (elemento, error) => {
  if (error) {
    elemento.classList.add("error");
  } else {
    elemento.classList.remove("error");
  }
};

nome.addEventListener("keyup", (e) => {
  e.preventDefault();

  let regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

  if (regexNome.test(nome.value) && nome.value.length >=3 ) {
    erro(nome, false);
    mensagemErro("none", "", msgNome );
  } else {
    erro(nome, true);
    mensagemErro("block", msg_01 ,msgNome);
  }
});

sobrenome.addEventListener("keyup", (e) => {
  e.preventDefault();

  let regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

  if (regexNome.test(sobrenome.value) && sobrenome.value.length >=3 ) {
    erro(sobrenome, false);
    mensagemErro("none", "", msgSobrenome );
  } else {
    erro(sobrenome, true);
    mensagemErro("block", msg_02 ,msgSobrenome);
  }
});
