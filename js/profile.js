var dadosUsuario = []
dadosUsuario = JSON.parse(localStorage.getItem('dodosLogin'))
if (dadosUsuario == null){
    dadosUsuario = []
}


if (localStorage.getItem('usuarioLogado') != "") {
    document.getElementById("userName").innerHTML = `${localStorage.getItem('usuarioLogado')}`
    Load()
}

function Load(){
    dadosUsuario.forEach((dado, i) => {
        if (dado.Name == JSON.parse(localStorage.getItem('usuarioLogado'))) {
            console.log(dadosUsuario[i].Name);
            document.getElementById("userName").innerHTML = dadosUsuario[i].Name
            document.getElementById("pfp").innerHTML = `<img src="${dadosUsuario[i].Pfp}">`
                    
        }
    })
}

function novosDados() {
    var newName = document.getElementById("new_nome").value
    var newPFP = document.getElementById("link_img").value


    document.getElementById("userName").innerHTML = newName
    document.getElementById("pfp").innerHTML = `<img src="${newPFP}">`


    dadosUsuario.forEach((dado, i) => {
        if (dado.Name == JSON.parse(localStorage.getItem('usuarioLogado'))) {
            dadosUsuario[i].Name = newName
            dadosUsuario[i].Pfp = newPFP
            console.log(dadosUsuario[i].Pfp);
        }
    })

    localStorage.setItem('dodosLogin', JSON.stringify(dadosUsuario))
}