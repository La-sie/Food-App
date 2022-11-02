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