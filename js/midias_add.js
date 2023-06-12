listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('dadosFilme'))

if(listaFilmes == null){
    listaFilmes = []
}

function adiciona() {
    var nomeFilme = document.getElementById("NomeFilme").value
    var anoFilme = document.getElementById("AnoFilme").value
    var IMGfilme = document.getElementById("LinkIMGfilme").value
    var descFilme = document.getElementById("FilmeDesc").value
    var gifFilme = document.getElementById("LinkGIFfilme").value
    var LinkDoFilme = document.getElementById("LinkDoFilme").value

    //console.log(nomeFilme, anoFilme, IMGfilme, descFilme);

    var dadosFilme = {
        'nome': nomeFilme,
        'ano': anoFilme,
        'imagem': IMGfilme,
        'descricao': descFilme,
        'gif': gifFilme,
        'Link_Do_Filme': LinkDoFilme
    }
    //console.log(dadosFilme);

    listaFilmes.push(dadosFilme)
    //console.log(listaFilmes);
    localStorage.setItem('dadosFilme', JSON.stringify(listaFilmes))

    alert("tudo certo, obrigado por sua contribuição!")
    window.location="movies.html"
}

function limpaPFV(){
    listaFilmes = []
    localStorage.setItem('dadosFilme', JSON.stringify(listaFilmes))
}