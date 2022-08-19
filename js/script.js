const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () =>{
    mario.classList.add('mario-jump');

    setTimeout(()=>{
        mario.classList.remove('mario-jump')
    }, 500);
}

const loop = setInterval(() => {
    
    const positionPipe = pipe.offsetLeft;
    const positionMario = window.getComputedStyle(mario).bottom.replace('px', '')

    if(positionPipe <= 109 && positionPipe > 0  && positionMario < 90 ){
        pipe.style.animation = 'none'
        pipe.style.left = `${positionPipe}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${positionMario}px`;

        mario.src = '../img/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '40px';

        clearInterval(loop);
    }

      

}, 10);

 


document.addEventListener('keydown', jump);