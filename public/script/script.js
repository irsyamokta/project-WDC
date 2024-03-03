const home = document.getElementById('home');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const text = document.getElementsByClassName('navbar');
const language = document.getElementById('language');
const humberger = document.getElementById('humberger');
const homeHeight = nav.clientHeight;

const btnFav = document.getElementsByClassName('btn-fav');
const love = document.getElementsByClassName('love');
const check = document.getElementsByClassName('check');


Array.from(btnFav).forEach(button => {
    button.addEventListener('click', function () {
        Array.from(check).forEach((element, index) => {
            if(element.checked) {
                love[index].classList.add('fa-solid', 'text-red-500');
                love[index].classList.remove('fa-regular', 'text-slate-600');
            } else {
                love[index].classList.add('fa-regular', 'text-slate-600');
                love[index].classList.remove('fa-solid', 'text-red-500');
            }
        });
    });
});


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
