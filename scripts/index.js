const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const btnSubmit = document.getElementById("btn");

const msgEmail = document.getElementById("msgEmail");
const msgPassword = document.getElementById("msgPassword");

const msg_01 = "Email informado invalido."
const msg_02 = "Senha inválida."



const mensagemErroEmail = (display, text)=> {
  msgEmail.style.display = display;
  msgEmail.innerHTML = text;
  
};
const mensagemErroPassword = (display, text)=> {
  msgPassword.style.display = display;
  msgPassword.innerHTML = text;
  
};

const erro = (elemento, error)=>{
  if (error) {
      elemento.classList.add("error");
  } else {
      elemento.classList.remove("error");
  }
};

inputEmail.addEventListener("change", (e)=>{
  e.preventDefault()
 
  let regexEmail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i

  if (regexEmail.test(inputEmail.value)) {
    erro(inputEmail, false);
    mensagemErroEmail("none", "");
  }else{
    erro(inputEmail, true);
    mensagemErroEmail("block", msg_01);
  }
})

inputPassword.addEventListener("change", (e)=>{
  e.preventDefault()
 
  if (inputPassword.value.length <=8) {
    erro(inputPassword, true);
    mensagemErroPassword("block", msg_02);
    
} else {
    erro(inputPassword, false);
    mensagemErroPassword("none", "");
  }
})