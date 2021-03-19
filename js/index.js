function white_bg_down(){
    console.log('down');
    if (scroll_pos>0 && scroll_pos<=window.innerHeight*.8){
        white_bg.setAttribute('class', 'white_bg_left');
        black_bg.setAttribute('class','black_bg_first');
        console.log('left');
    }
    else if(scroll_pos>window.innerHeight*.8 && scroll_pos<=window.innerHeight*1.5){
        white_bg.setAttribute('class', 'white_bg_right');
        black_bg.setAttribute('class','black_bg_second');
        console.log('right');
    }
    else if(scroll_pos>window.innerHeight*1.5 && scroll_pos<=window.innerHeight*2.5){
        white_bg.setAttribute('class', 'white_bg_left');
        black_bg.setAttribute('class','black_bg_third');
    }
    else if(scroll_pos>window.innerHeight*2.5 && scroll_pos<=window.innerHeight*3){
        white_bg.setAttribute('class', 'white_bg_right');
        black_bg.setAttribute('class','black_bg_forth');
    }
    else if(scroll_pos>window.innerHeight*3){
        white_bg.setAttribute('class', 'white_bg_right');
    }
    else{
        white_bg.setAttribute('class', 'white_bg_left');
    }

}

function white_bg_up(){
    console.log('up');
    if (scroll_pos<window.innerHeight*.5){
        white_bg.setAttribute('class', 'white_bg_left');
        black_bg.setAttribute('class','black_bg_first');
        console.log('left');
    }
    else if(scroll_pos>=window.innerHeight*.5 && scroll_pos<window.innerHeight*1.5){
        console.log('right');
        white_bg.setAttribute('class', 'white_bg_right');
        black_bg.setAttribute('class','black_bg_second');
    }
    else if(scroll_pos>=window.innerHeight*1.5 && scroll_pos<window.innerHeight*2.5){
        white_bg.setAttribute('class', 'white_bg_left');
        black_bg.setAttribute('class','black_bg_third');
    }
    else if(scroll_pos>=window.innerHeight*2.5 && scroll_pos<window.innerHeight*3.5){
        white_bg.setAttribute('class', 'white_bg_right');
        black_bg.setAttribute('class','black_bg_forth');
    }
    else if(scroll_pos>=window.innerHeight*4){
        white_bg.setAttribute('class', 'white_bg_right');
    }
    else{
        white_bg.setAttribute('class', 'white_bg_left');
    }
}

function f_burger_close(){
    burger.classList.remove('open');
    menu_items.classList.remove('menu_fullscreen');
    f_menu_disappear();
    burger_open = false;
}

function f_burger_open(){
    burger.classList.add('open');
    menu_items.classList.add('menu_fullscreen');
    f_menu_appear(true);
    burger_open = true;
}

function f_burger_appear(){
    burger.classList.add('burger_appear');
    f_burger_close();
    f_menu_disappear();
    burger_appear = true;
}

function f_burger_disappear(){
    burger.classList.remove('burger_appear');
    burger_appear = false;
}

function f_menu_appear(bg){
    console.log(bg);
    menu_items.removeAttribute('id','burger_close');
    if (bg){
        menu.removeAttribute('id', 'menu_close');
    }
    else{
        menu.setAttribute('id','menu_close');
    }
    menu_open = true
}

function f_menu_disappear(){
    menu_items.setAttribute('id','burger_close');
    menu.setAttribute('id','menu_close');
    menu_open = false;
}

function f_logo_appear(){
    logo.classList.remove('logo_disappear');
}

function f_logo_disappear(){
    logo.classList.add('logo_disappear');
}


const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
const menu_items = document.querySelector('.menu_item');
const logo = document.getElementById('logo');

var last_pos = 0;
var scroll_pos = window.scrollY;
const black_bg = document.getElementById('black_bg');
const white_bg = document.getElementById('white_bg');

var menu_open = false;
var burger_open = false;
var burger_appear = false;



burger.addEventListener('click', function(){
    if(!menu_open){
        f_burger_open();
    }
    else{
        f_burger_close();
    }
})

window.addEventListener('resize', function(){
    if(window.innerWidth > 950){
        f_burger_disappear();
        f_menu_appear();
        }
    else{
        f_burger_appear(true);
        f_menu_disappear();
    }
});




console.log(window.innerHeight);

window.addEventListener('load',function(){
    console.log('load');
    if(window.innerWidth > 950 && scroll_pos > 100){
        console.log('top bur ap');
        f_menu_disappear();
        f_burger_appear();
    }
    else if(window.innerWidth > 950 && scroll_pos <= 100){
        console.log('top menu ap');
        f_menu_appear();
        f_burger_disappear();
    }
    else{
        f_burger_appear();
        f_menu_disappear();
    }


    white_bg_down();
    console.log(scroll_pos);
},false)

window.addEventListener('scroll', function(){
    scroll_pos = this.scrollY;
    if((document.body.getBoundingClientRect()).top > last_pos){
    //up
        if (scroll_pos<window.innerHeight*1/5 && window.innerWidth>960){
            console.log('first');
            f_menu_appear(false);
            f_burger_disappear();
        }
        else{
            f_burger_appear();
            f_menu_disappear();
            f_logo_appear();
        }
        white_bg_up();

  }
    else{
    //down
    if (scroll_pos<window.innerHeight*1/5 && window.innerWidth>960){
        console.log('first');
        f_menu_appear(false);
        f_burger_disappear();
    }
        else{
            f_burger_appear();
            f_menu_disappear();
            f_logo_disappear();
    }
        white_bg_down();
    }
	last_pos = (document.body.getBoundingClientRect()).top;

    // --------------------------------------------------------------


},{capture: true,
    passive: true});

