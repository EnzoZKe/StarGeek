var dataUser = []
dataUser = JSON.parse(localStorage.getItem('dodosLogin'))
if (dataUser == null) {
  dataUser = []
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
  
  /*if (localStorage.getItem('usuarioLogado') != "") {
    document.getElementById("userName").innerHTML = `${dataUser[i].Name}`
  }*/