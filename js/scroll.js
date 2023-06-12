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




/*function mostraDados() {
  document.getElementById("usersHere").innerHTML = ""

  for (i in dataUser) {
    document.getElementById("usersHere").innerHTML += `olá ${dataUser[i].Name}, agradeçemos por utilizar nosso site <br>`
  }


} */


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


