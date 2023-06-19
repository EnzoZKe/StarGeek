
//* Var's ------------------------------------------------------------------------------------------------------------------//
var dadosUsuario = []
dadosUsuario = JSON.parse(localStorage.getItem('dodosLogin'))

if (dadosUsuario == null) {
    dadosUsuario = []
}

var DadosNew = []
DadosNew = JSON.parse(localStorage.getItem('novosDados'))

var checkUser = []


if (DadosNew == null) {
    DadosNew = []
}

for (i in DadosNew) {
    if (DadosNew == "") {
        mostrarOG()
    } else {
        mostrarNew()
    }
}
//*-------------------------------------------------------------------------------------------------------------------------//

//* Funcções ---------------------------------------------------------------------------------------------------------------//

function mostrarOG() {
    for (i in dadosUsuario) {
        document.getElementById("userName").innerHTML =
            `<p class="nomen">${dadosUsuario[i].Name}</p>
    <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.png" class="pfp_work">`
    }
}

function mostrarNew() {
    for (i in DadosNew) {
        document.getElementById("userName").innerHTML =
            `<p>${DadosNew[i].nomeNovo}</p>
        <img src="${DadosNew[i].fotoNova}">`

        if (DadosNew[i].fotoNova == "") {
            document.getElementById("userName").innerHTML =
                `<p class="nomen">${DadosNew[i].nomeNovo}</p>
            <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.png" class="pfp_work">
            `
        }
    }
}
//*-------------------------------------------------------------------------------------------------------------------------//


//!-------------------------------------------------------------------------------------------------------------------------//

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
    for (i in dadosUsuario) {
        if (dadosUsuario[i].Name == JSON.parse(localStorage.getItem('usuarioLogado'))) {
            var newDados = {
                'Name': newName,
                'Email': dadosUsuario[i].Email,
                'Passcode': dadosUsuario[i].Passcode,
                'Pfp': newPFP
            }
            var dat = {
                nomeNovo: newName,
                fotoNova: newPFP
            }
            dadosUsuario[i] = newDados
            localStorage.setItem("novosDados", JSON.stringify(dat)) 
            localStorage.setItem('dodosLogin', JSON.stringify(dadosUsuario))   //* Guarda os dados como JSON no navegador
            mostrarNew()
        }
    }
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
