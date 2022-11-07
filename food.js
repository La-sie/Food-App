let menuBar = document.getElementById('menu-bars');
let navBar = document.querySelector('.navi');

menuBar.onclick = () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onclick = () =>{
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}


document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper ("home-sliderr", {
    spaceBetween : 30,
    centeredSlides: true,
    autoPlay: {
        delay: 7500,
        disableOnIntegration: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
