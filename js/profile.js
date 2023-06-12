var dadosUsuario = []
dadosUsuario = JSON.parse(localStorage.getItem('dodosLogin'))

if (dadosUsuario == null){
    dadosUsuario = []
}

var DadosNew = []
DadosNew = JSON.parse(localStorage.getItem('novosDados'))

//!-----------------------------------------------------------------------------------------------------------------

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

    DadosNew.push(newDados)
    localStorage.setItem('novosDados', JSON.stringify(DadosNew))
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
