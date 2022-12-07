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

var swiper = new Swiper (".home-slider", {
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

var swiper = new Swiper (".review-slider", {
    spaceBetween : 20,
    centeredSlides: true,
    autoPlay: {
        delay: 7500,
        disableOnIntegration: false,
    },
    loop: true,
    breakpoints :{
    0:{
     slidesPerView: 1,
 },
    640:{
     slidesPerView: 2,
 },
    768:{
     slidesPerView: 3,
 },
    1024:{
     slidesPerView: 4,
 },
}
});
