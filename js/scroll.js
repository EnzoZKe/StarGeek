const slider = document.querySelectorAll('.selecione');
let isDown = false;
let startX;
let scrollLeft;



slider.forEach(Slid =>{
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