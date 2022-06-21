// const formulario = document.querySelector('form')
const nome = document.getElementById("name");
const msgName = document.getElementById("msgName");
const sobrenome = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelectorAll(".password");
const btnCadastro = document.getElementById("btn");
const usuarios = {};

const msg_01 = "Por favor, informe um nome válido!";

const mensagemErroNome = (display, text) => {
  msgName.style.display = display;
  msgName.innerHTML = text;
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
    mensagemErroNome("none", "");
  } else {
    erro(nome, true);
    mensagemErroNome("block", msg_01);
  }
});
