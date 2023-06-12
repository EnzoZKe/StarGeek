var mostraFilmes = []

mostraFilmes = JSON.parse(localStorage.getItem('dadosFilme'))

if (mostraFilmes == null) {
  mostraFilmes = []
}

console.log(mostraFilmes);

for (i in mostraFilmes) {

  document.getElementById("New").innerHTML +=

    `<a href="${mostraFilmes[i].Link_Do_Filme}" target="_blank">
        <div class="poster" >
            <img src="${mostraFilmes[i].imagem}" alt="" class="poster_img" onmouseenter="hover(${i})" onmouseleave="noHover(${i})">
            <p id="write" class="titulo" >${mostraFilmes[i].nome}</p>
          <a>
          <img src="https://cdn-icons-png.flaticon.com/512/2891/2891067.png" class="lixo" onclick="limpar(${i})">
        </div>`
}

//console.log(mostraFilmes);

function hover(i_) {
  for (i in mostraFilmes) {
    if (i == i_) {
      var new_ = document.getElementById("New")
      var imgs = new_.getElementsByTagName('img')[i]


      imgs.src = mostraFilmes[i].gif



    }
  }
}

function noHover(i_) {
  for (i in mostraFilmes) {
    if (i == i_) {

      var new_ = document.getElementById("New")
      var imgs = new_.getElementsByTagName('img')[i]
      imgs.src = mostraFilmes[i].imagem
    }
  }
}

function limpar(pos) {
  mostraFilmes.splice(pos, 1)
  localStorage.setItem('dadosFilme', JSON.stringify(mostraFilmes))
}





//! PUXAR O FILME!!!!!!!!

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
