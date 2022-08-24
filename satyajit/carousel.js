const slideImg = document.querySelectorAll('.Sa-slide-img');
const slidesContainer = document.querySelector("#Sa-slide-container");
const nextBtn = document.querySelector("#Sa-next-btn");
const prevBtn = document.querySelector('#Sa-prev-btn');
const navigationDots = document.querySelector('#Sa-navigation-dots');

let no_Of_Img = slideImg.length;
let slideWidth = slideImg[0].clientWidth;
let curSlide = 0
//set Up the Slider

function init(){


    slideImg.forEach((img,i)=> {
        img.style.left = i*100 + '%'
    })

    slideImg[0].classList.add('active');
    createnavigationDots()
  
}

init()

// create navigation dots

function createnavigationDots(){
  for(let i =0; i < no_Of_Img; i++){
    const dot = document.createElement('div');
    dot.classList.add('Sa-single-dots')
    navigationDots.append(dot);

    dot.addEventListener('click',() => {
        goToSlide(i)
    })
  }
  navigationDots.children[0].classList.add('active')
}

nextBtn.addEventListener('click', () => {
autoSlide()
})
function autoSlide(){
    if(curSlide >= no_Of_Img - 1){
goToSlide(0);

return;
}
curSlide++
goToSlide(curSlide)
}


prevBtn.addEventListener('click', () => {
    if(curSlide <= 0){
        goToSlide(no_Of_Img-1);
      
        return;
    }
curSlide--
    goToSlide(curSlide)

})



//GO TO SLIDE FUNCTION

function goToSlide(slideNumber){
    slidesContainer.style.transform = 'translateX(-' + slideWidth * slideNumber + 'px)'
  curSlide = slideNumber;
    setActiveClass()
}

function setActiveClass(){
    let curActive = document.querySelector(".Sa-slide-img.active");
    curActive.classList.remove('active');
    slideImg[curSlide].classList.add('active');

    // set class for navigation dots

    let curDots = document.querySelector(".Sa-single-dots.active");
    curDots.classList.remove('active');
    navigationDots.children[curSlide].classList.add('active');

}

setInterval (()=> {
    autoSlide()
},4000)




// //////////////////////END OF IMAGE CAROUSEL////////////////////////////////////////////////


// ////////////////starting of Shop from Top Categories//////////////////////////////////////


currentScrollPosition = 0;
let scrollAmount = 280;

const sCont = document.querySelector(".Sa-storys-container")
const hScroll = document.querySelector(".Sa-horizontal-scroll");
const btnScrollLeft = document.querySelector('#Sa-btn-scroll-left')
const btnScrollRight = document.querySelector('#Sa-btn-scroll-right')

btnScrollLeft.style.opacity = '0.5'


let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;



function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);
if(currentScrollPosition > 0){
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = '0.3'
}else{
    btnScrollLeft.style.opacity = '1'
}
if(currentScrollPosition <= maxScroll){
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = '0.5'
}else{
    btnScrollRight.style.opacity = '1'
}
    sCont.style.left = currentScrollPosition + 'px';
    
}
