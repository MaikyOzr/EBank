const nav__bullets = document.getElementsByClassName('nav__bullet');

for (let i = 0; i < nav__bullets.length; i++) {
    nav__bullets[i].addEventListener('click', function ()  {
        for (let i = 0; i < nav__bullets.length; i++) {
            nav__bullets[i].classList.remove('nav-bt_active');
            
        }
        nav__bullets[i].classList.add('nav-bt_active');
    });
    
}

const navSubMenuButons = document.querySelectorAll('.scroll__btn[data-goto]');




function scroll(e){
    
    
    const link= e.target;
    const scrBlock =document.querySelector(link.dataset.goto);
    const a = scrBlock.getBoundingClientRect().top + pageYOffset;
    window.scrollTo({
        behavior:"smooth",
        top:a,
    });
    

    

}
for(let i=0;i<navSubMenuButons.length;i++){
    navSubMenuButons[i].addEventListener('click',scroll);

}