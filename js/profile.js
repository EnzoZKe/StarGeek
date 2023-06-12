var dadosUsuario = []

dadosUsuario = JSON.parse(localStorage.getItem('novosDados'))

if (dadosUsuario != ""){
    for (i in dadosUsuario){
        document.getElementById("pfp").innerHTML = `<img src="${dadosUsuario[i].fotoNova}" alt="">`
        document.getElementById("userName").innerHTML = `<p>${dadosUsuario[i].nomeNovo}</p>`
    }
}

if (dadosUsuario == null){
    dadosUsuario = []
}


/*if (localStorage.getItem('usuarioLogado') != "") {
    document.getElementById("userName").innerHTML = `${localStorage.getItem('usuarioLogado')}`
    //Load()
} */

/*  function Load(){
    for (i in dadosUsuario){
        if (dadosUsuario == Name || dadosUsuario == "") {
            
        }
    }
} */

function novosDados() {
    var newName = document.getElementById("new_nome").value
    var newPFP = document.getElementById("link_img").value

    //console.log(newName, newPFP);

    var newDados = {
        'nomeNovo': newName,
        'fotoNova': newPFP
    }

    dadosUsuario.push(newDados)
    localStorage.setItem('novosDados', JSON.stringify(dadosUsuario))


}





/*    dadosUsuario.forEach((dado, i) => {
        if (dado.Name == JSON.parse(localStorage.getItem('usuarioLogado'))) {
            dadosUsuario[i].Name = newName
            dadosUsuario[i].Pfp = newPFP
            console.log(dadosUsuario[i].Pfp);
        }
    })

    localStorage.setItem('dodosLogin', JSON.stringify(dadosUsuario))
} */


