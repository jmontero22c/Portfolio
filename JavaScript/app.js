const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.crontrolls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransition(){
    for(let i=0; i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn'
        });
    }
}
pageTransition();
console.log(sectBtn[0].className);