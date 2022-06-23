// const formulario = document.querySelector('form')
const nome = document.getElementById("name");
const msgNome = document.getElementById("msgNome");

const sobrenome = document.getElementById("last-name");
const msgSobrenome = document.getElementById("msgSobrenome");

const email = document.getElementById("email");
const msgEmail = document.getElementById("msgEmail");


const password = document.getElementById("password");
const msgPassword = document.getElementById("msgPassword");

const repeatPassword = document.getElementById("repeat-password");
const msgPasswordConfirmation = document.getElementById("msgPasswordConfirmation");


const btnSubmit = document.getElementById("btn");

const msg_01 = "Por favor, informe um Nome válido!";
const msg_02 = "Por favor, informe um Sobrenomenome válido!";
const msg_03 = "Por favor, informe um Email válido!";
const msg_04 = `
Sua senha deve conter:<br/>
ao menos uma letra minúscula<br/>
ao menos uma letra maiúscula<br/>
ao menos um caractere especial<br/>
ao menos 8 dos caracteres mencionados<br/>
`;
const msg_05 = "As senhas precisam ser iguais!";

const data = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

const habilitarBotao = (desab)=> {
  if (desab) {
      btnSubmit.removeAttribute("disabled");
  } else {
      btnSubmit.setAttribute("disabled", "");
  }
};



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

  let regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/;

  if (regexNome.test(nome.value) && nome.value.length >=3 ) {
    erro(nome, false);
    mensagemErro("none", "", msgNome );
    data.firstName = nome.value[0].toUpperCase() + nome.value.substr(1).toLowerCase()

  } else {
    erro(nome, true);
    mensagemErro("block", msg_01 ,msgNome);
  }
});

sobrenome.addEventListener("keyup", (e) => {
  e.preventDefault();

  let regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/;

  if (regexNome.test(sobrenome.value) && sobrenome.value.length >=3 ) {
    erro(sobrenome, false);
    mensagemErro("none", "", msgSobrenome );
    data.lastName = sobrenome.value[0].toUpperCase() + sobrenome.value.substr(1).toLowerCase()

  } else {
    erro(sobrenome, true);
    mensagemErro("block", msg_02 ,msgSobrenome);
  }
});


email.addEventListener("keyup", (e)=>{
  e.preventDefault()
 
  let regexEmail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i

  if (regexEmail.test(email.value)) {
    erro(email, false);
    mensagemErro("none", "", msgEmail);
    data.email = email.value

  }else{
    erro(email, true);
    mensagemErro("block", msg_03, msgEmail);
  }
})

password.addEventListener("keyup", (e) => {
  e.preventDefault();

  let regexNome = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  if (regexNome.test(password.value) && password.value.length >=8 ) {
    erro(password, false);
    mensagemErro("none", "", msgPassword );

  } else {
    erro(password, true);
    mensagemErro("block", msg_04 ,msgPassword);
  }
});

repeatPassword.addEventListener("keyup", (e) => {
  e.preventDefault();

  if ( password.value == repeatPassword.value ) {
    erro(repeatPassword, false);
    mensagemErro("none", "", msgPasswordConfirmation );
    data.password = password.value

  } else {
    erro(repeatPassword, true);
    mensagemErro("block", msg_05 ,msgPasswordConfirmation);
  }

  habilitarBotao(
    data.firstName != "" && 
    data.lastName != "" && 
    data.email != "" && 
    data.password != "" &&
    password.value == repeatPassword.value
    )
});

btnSubmit.addEventListener("click",  (e) => {
  e.preventDefault();
  window.location.assign("/index.html");
  console.log(data);
});