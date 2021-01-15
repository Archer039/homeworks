let car = document.querySelector('.car');
let bTire = document.querySelector('#back-tire');
let fTire = document.querySelector('#front-tire');
let constColorBTire;
let constColorFTire;


function setColor() {
    this.style.fill = '#2d2dad'
};

function removeColor() {
    this.style.fill = '#464655'
};

function setConstColor() {
    this.style.fill = '#1ed425';
    if(this.id === 'back-tire'){
        bTire.removeEventListener('mouseover', setColor);
        bTire.removeEventListener('mouseleave', removeColor);
    }
    if(this.id === 'front-tire'){
        fTire.removeEventListener('mouseover', setColor);
        fTire.removeEventListener('mouseleave', removeColor);
    }
};

function move(){
    car.style.left = '65%'
};

function back(){
    car.style.left = '5%'
};

bTire.addEventListener('mouseover', setColor);
bTire.addEventListener('mouseleave', removeColor);
bTire.addEventListener('click', setConstColor)
fTire.addEventListener('mouseover', setColor);
fTire.addEventListener('mouseleave', removeColor);
fTire.addEventListener('click', setConstColor)