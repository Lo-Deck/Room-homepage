const btnMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const btnLeft = document.querySelector('.button-left');
const btnRight = document.querySelector('.button-right');
const title = document.querySelector('.section-top-title');
const text = document.querySelector('.section-top .text');


/*DISPLAY MENU*/

console.log(btnMenu);

let isClickedMenu = false;

btnMenu.addEventListener('click', () => {

    isClickedMenu = !isClickedMenu;

    if(isClickedMenu){
        menu.style.display = 'flex';
        btnMenu.children[0].src =  './images/icon-close.svg';
        document.querySelector('.background').style.display = 'block';
    }
    else{
        menu.style.display = '';
        btnMenu.children[0].src =  './images/icon-hamburger.svg';
        document.querySelector('.background').style.display = 'none';
    }

});


/*CAROUSEL*/

const displayText = (position) => {

    switch(position){

        case 0:
            title.textContent = `Discover innovative ways to decorate`;
            text.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
                                Our experts combine form and function in bringing your vision to life. Create a room in your 
                                own style with our collection and make your property a reflection of you and what you love.`;
            break;
    
        case -100:
            title.textContent = `We are available all across the globe`;
            text.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                                store locator. Any questions? Don't hesitate to contact us today.`;
            break;
    
        case -200:
            title.textContent = `Manufactured with the best materials`;
            text.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                                experience in this industry, we understand what customers want for their home and office.`;
            break;
    
    }

};


let position = 0;

btnLeft.addEventListener('click', () => {

    if(position >= 0 ){
        position = -200;       
    }
    else{
        position += 100;  
    }

    document.querySelector('.list-image').style.transform = `translateX(${position}%)`;

    title.classList.add('anim');
    text.classList.add('anim');

    setTimeout( () => {

        title.classList.remove('anim');
        text.classList.remove('anim');

    }, 1200);

    setTimeout( () => {

        displayText(position);

    }, 200);


});

btnRight.addEventListener('click', () => { 

    if(position <= -200){
        position = 0;       
    }
    else{
        position -= 100;
    }

    document.querySelector('.list-image').style.transform = `translateX(${position}%)`;

    title.classList.add('anim');
    text.classList.add('anim');

    setTimeout( () => {

        title.classList.remove('anim');
        text.classList.remove('anim');

    }, 1200);

    setTimeout( () => {

        displayText(position);

    }, 200);

});


