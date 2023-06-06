/*Mover os filmes com o mouse*/

const slider = document.querySelectorAll('.selecione');
let isDown = false;
let startX;
let scrollLeft;



slider.forEach(Slid => {
  Slid.addEventListener('mousedown', (e) => {
    isDown = true;
    Slid.classList.add('active');
    startX = e.pageX - Slid.offsetLeft;
    scrollLeft = Slid.scrollLeft;
  });
  Slid.addEventListener('mouseleave', () => {
    isDown = false;
    Slid.classList.remove('active');
  });
  Slid.addEventListener('mouseup', () => {
    isDown = false;
    Slid.classList.remove('active');
  });
  Slid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - Slid.offsetLeft;
    const walk = (x - startX) * 1;
    Slid.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
})

/*deixar o header no topo*/
/*
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
*/

//AAAAAAAAAAAAAAA VAMO FAZER O LOGIN DISSO AAAAAAAAAAAAAAAAAAAAAAA

var dataUser = []
dataUser = JSON.parse(localStorage.getItem('dodosLogin'))
if (dataUser == null) {
  dataUser = []
}

mostraDados()

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

  mostraDados()

  alert("Pode entrar na sua conta irmão") //* Alerta pra avisar que pode entrar na sua conta
  window.location = "login.html" //* Aparece uma janela com um OK para vc ir para a proxima pagina

  console.log(dataUser);

}


function mostraDados() {
  document.getElementById("usersHere").innerHTML = ""

  for (i in dataUser) {
    document.getElementById("usersHere").innerHTML += `olá ${dataUser[i].Name}, agradeçemos por utilizar nosso site <br>`
  }


}


function entre() {
  var confiMail = document.getElementById("confMail").value
  var confiSenha = document.getElementById("confSenha").value

  var acho = false
  var nome = ""
  for (i in dataUser) {
    if (confiSenha == dataUser[i].Passcode && confiMail == dataUser[i].Email) {
      acho = true

      nome = dataUser[i].Name
      localStorage.setItem('usuarioLogado', JSON.stringify(nome))

      console.log(nome);
    } else {
      acho = false
    }

  }

  if (acho) {
    alert("Parabens, bem vindo ao seu perfil")
    localStorage.setItem("nomen", nome)
    window.location = "profile.html"
  } else {
    alert("Opa, tem coisa errada hein")
  }
}

if (localStorage.getItem('usuarioLogado') != "") {
  document.getElementById("userName").innerHTML = `${dataUser[i].Name}`
}


