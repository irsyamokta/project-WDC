const home = document.getElementById('home');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const text = document.getElementsByClassName('navbar');
const language = document.getElementById('language');
const humberger = document.getElementById('humberger');
const homeHeight = nav.clientHeight;
const btnFav = document.getElementById('btn-fav');
const check =  document.getElementById('check');
const love = document.getElementById('love');

const btnFav2 = document.getElementById('btn-fav-2');
const check2 =  document.getElementById('check-2');
const love2 = document.getElementById('love-2');

const btnFav3 = document.getElementById('btn-fav-3');
const check3 =  document.getElementById('check-3');
const love3 = document.getElementById('love-3');

btnFav.addEventListener('click', function () {
    if(check.checked == true){
        love.classList.add('fa-solid', 'text-red-500');
        love.classList.remove('fa-regular', 'text-slate-600');
    } else {
        love.classList.add('fa-regular', 'text-slate-600');
        love.classList.remove('fa-solid', 'text-red-500');
    }
})
btnFav2.addEventListener('click', function () {
    if(check2.checked == true){
        love2.classList.add('fa-solid', 'text-red-500');
        love2.classList.remove('fa-regular', 'text-slate-600');
    } else {
        love2.classList.add('fa-regular', 'text-slate-600');
        love2.classList.remove('fa-solid', 'text-red-500');
    }
})
btnFav3.addEventListener('click', function () {
    if(check3.checked == true){
        love3.classList.add('fa-solid', 'text-red-500');
        love3.classList.remove('fa-regular', 'text-slate-600');
    } else {
        love3.classList.add('fa-regular', 'text-slate-600');
        love3.classList.remove('fa-solid', 'text-red-500');
    }
})

window.addEventListener('scroll', function () {
    const scrollPosition = this.scrollY;
    const isScrolled = scrollPosition > homeHeight;

    nav.style.backgroundColor = isScrolled ? 'white' : 'transparent';
    logo.style.color = isScrolled ? 'black' : 'white';

    for (let i = 0; i < text.length; i++) {
        text[i].style.color = isScrolled ? 'black' : 'white';
    }

    nav.style.boxShadow = isScrolled ? '0px 4px 10px -2px rgba(0,0,0,0.1)' : 'none';
    language.style.color = isScrolled ? 'black' : 'white';
    humberger.style.color = isScrolled ? 'black' : 'white';

    language.addEventListener('mouseenter', function(e){
        language.style.color = isScrolled ? 'white' : 'white';
    });

    language.addEventListener('mouseout', function(e){
        language.style.color = isScrolled ? 'black' : 'white';
    });
});
