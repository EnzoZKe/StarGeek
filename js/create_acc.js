var dataUser = []
dataUser = JSON.parse(localStorage.getItem('dodosLogin'))
if (dataUser == null) {
  dataUser = []
}

//mostraDados()

function criar() {


  // PEGA AS INFORMAÇÕES DA PESSOA
  var nome = document.getElementById("user").value
  var email = document.getElementById("mail").value
  var senha = document.getElementById("pass1").value
  var confSenha = document.getElementById("pass2").value

  //console.log(nome, email, senha, confSenha);

  if (nome, email, senha, confSenha == "") {
    console.log("");
    alert("Tem coisa faltando ai")

    return false
  }

  //todo TRANSFORMA AS INFOS EM OBJETOS
  var data = {
    'Name': nome,
    'Email': email,
    'Passcode': senha,
    'Pfp': ""
    //'confPasscode': confSenha,
  }


  dataUser.push(data)   //* Manda as coisas da data para dataUser (que é uma lista)
  localStorage.setItem('dodosLogin', JSON.stringify(dataUser))   //* Guarda os dados como JSON no navegador

  //mostraDados()

  alert("Pode entrar na sua conta irmão") //* Alerta pra avisar que pode entrar na sua conta
  window.location = "login.html" //* Aparece uma janela com um OK para vc ir para a proxima pagina

  console.log(dataUser);

}