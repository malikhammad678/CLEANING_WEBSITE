const header = document.querySelector('header');


window.onscroll = () => {
    if (window.scrollY > 60) {
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

const responsive_navbar = document.querySelector('.responsive_navbar');
const menu = document.querySelector('.bx-menu');
const cross = document.querySelector('.bx-x');



menu.addEventListener('click', (e) => {
    e.stopPropagation();
    responsive_navbar.classList.add('active')
})
cross.addEventListener('click', (e) => {
    e.stopPropagation();
    responsive_navbar.classList.remove('active')
})

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !cross.contains(e.target)) {
        responsive_navbar.classList.remove('active')
    }
})


function removeClasslist() {
    responsive_navbar.classList.remove('active')
}