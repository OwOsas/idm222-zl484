const burger = document.getElementById('burger');
let menu_open = false;

burger.addEventListener('click', function(){
    if(!menu_open){
        burger.classList.add('open');
        menu_open = true;
    }
    else{
        burger.classList.remove('open');
        menu_open = false;
    }
})

let bg_top = window.screen.height;
let bg_left = window.screen.width;