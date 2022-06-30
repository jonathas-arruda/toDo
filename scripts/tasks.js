const nomeUsuario = document.getElementById('nomeUsuario');
//utilizamos o metodo onload para efetuar a funcao de inserir o nome quando a pagina for carregada.
window.onload = ()=> {
  receberUsuario()
};

function receberUsuario() {

  const jwt = localStorage.getItem("token");

  const configuracaoRequisicao = {

    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": jwt 
    }
  }

  fetch('https://ctd-todo-api.herokuapp.com/v1/users/getMe', configuracaoRequisicao)

    .then(response => response.json())

    .then(data => {
      const dados = `${data.firstName} ${data.lastName}`
      nomeUsuario.innerHTML = dados;
    })

    .catch((err) => {
      console.log(err)

    })
}


//PASSO 2


// UTILIZAR ENDPOINT /TASKS E LISTAR NO CONSOLE.
// TAMBEM ACRESCENTAR A FUNCAO QUE LISTA AS TAREFAS EM NOSSO WINDOW.ONLOAD
//no segundo then do fetch:
//Utilizem template string, para através do JS inserir novamente no HTML o corpo das tarefas

// `<li class="tarefa">
//         <div class="not-done"></div>
//         <div class="descricao">
//           <p class="nome">${data.description}</p>
//           <p class="timestamp"> "Criada em:" ${data.createdAt}</p>
//         </div>
//       </li>`


//PASSO 3:

//utilizar endpoint  /tasks para criar uma tarefa


// utilizar o botão + para efetuar o fetch desse endpoint
//Utilizando o evento de clicar.
//inserir usando innerHTML e template string, a nova tarefa criada ao 
//clicar no botão.

//criar uma variavel onde utilize o metodo new Date

//const dataFormata = newDate(data.createdAt).toLocaleDateString(

  // 'pt-BR',
  // {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: 'numeric'
  // }


//)

// `<li class="tarefa">
//         <div class="not-done"></div>
//         <div class="descricao">
//           <p class="nome">${data.description}</p>
//           <p class="timestamp"> "Criada em:" ${dataFormatada}</p>
//         </div>
//       </li>`
