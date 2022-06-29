const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const btnSubmit = document.getElementById("btn");

const msgEmail = document.getElementById("msgEmail");
const msgPassword = document.getElementById("msgPassword");

const msg_01 = "Email informado invalido."
const msg_02 = "Senha inválida."

const data = {};

const mensagemErroEmail = (display, text)=> {
  msgEmail.style.display = display;
  msgEmail.innerHTML = text;
  
};
const mensagemErroNome = (display, text)=> {
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

inputEmail.addEventListener("keyup", (e)=>{
  e.preventDefault()
 
  let regexEmail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i

  if (regexEmail.test(inputEmail.value)) {
    erro(inputEmail, false);
    mensagemErroEmail("none", "");
    data.email = inputEmail.value
  }else{
    erro(inputEmail, true);
    mensagemErroEmail("block", msg_01);
  }
})

inputPassword.addEventListener("keyup", (e)=>{
  e.preventDefault()
  
  if (inputPassword.value.length <=8) {
    erro(inputPassword, true);
    mensagemErroNome("block", msg_02);
    
  } else {
    erro(inputPassword, false);
    mensagemErroNome("none", "");
    data.password = inputPassword.value
  }
})


const Submit = (e) => {
  e.preventDefault();
  console.log(data);

  const configuracaoRequisicao = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  
  fetch("https://ctd-todo-api.herokuapp.com/v1/users/login",configuracaoRequisicao)
  .then(response => {
    if (response.status === 201){
        return response.json()
    }

  })
  .then(function(resposta){
    console.log(resposta)
    alert("Login successful")
    localStorage.setItem("token", resposta.jwt)
    window.location.href = "tarefas.html"

  })
  .catch(err=> {
    console.log(err)
    alert("Login failed")
  })
}