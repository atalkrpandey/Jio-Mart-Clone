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



// ///////////////////Top Deals /


currentScrollPosition_2 = 0;
let scrollAmount_2 = 280;

const sCont_2 = document.querySelector(".Satyajit-storys-container")
const hScroll2 = document.querySelector(".Satyajit-horizontal-scroll");
const btnScrollLeft_2 = document.querySelector('#Satyajit-btn-scroll-left')
const btnScrollRight_2 = document.querySelector('#Satyajit-btn-scroll-right')

btnScrollLeft_2.style.opacity = '0.5'


let maxScroll_2 = -sCont_2.offsetWidth + hScroll2.offsetWidth;



function scrollHorizontally_2(val){
    currentScrollPosition_2 += (val * scrollAmount_2);
if(currentScrollPosition_2 > 0){
    currentScrollPosition_2 = 0;
    btnScrollLeft_2.style.opacity = '0.3'
}else{
    btnScrollLeft_2.style.opacity = '1'
}
if(currentScrollPosition_2 <= maxScroll_2){
    currentScrollPosition_2 = maxScroll_2;
    btnScrollRight_2.style.opacity = '0.5'
}else{
    btnScrollRight_2.style.opacity = '1'
}
    sCont_2.style.left = currentScrollPosition_2 + 'px';
    
}


// /////////////////START OF FINANCE SECTION


currentScrollPosition_3 = 0;
let scrollAmount_3 = 410;
let id;
const sCont_3 = document.querySelector(".Sat-storys-container")
const hScroll_3 = document.querySelector(".Sat-horizontal-scroll");
const btnScrollLeft_3 = document.querySelector('#Sat-btn-scroll-left')
const btnScrollRight_3 = document.querySelector('#Sat-btn-scroll-right')

btnScrollLeft_3.style.opacity = '0.5'


let maxScroll_3 = -sCont_3.offsetWidth + hScroll_3.offsetWidth;



function scrollHorizontally_3(val){
    currentScrollPosition_3 += (val * scrollAmount_3);
    console.log(currentScrollPosition_3,val, scrollAmount_3)
if(currentScrollPosition_3 > 0){
    currentScrollPosition_3 = 0;
    btnScrollLeft_3.style.opacity = '0.3'
}else{
    btnScrollLeft_3.style.opacity = '1'
}
if(currentScrollPosition_3 <= maxScroll_3){
    currentScrollPosition_3 = maxScroll_3;
    btnScrollRight_3.style.opacity = '0.5'
}else{
    btnScrollRight_3.style.opacity = '1'
}
    sCont_3.style.left = currentScrollPosition_3 + 'px';
    
}



id = setInterval(()=>{
    currentScrollPosition_3 += (-1 * scrollAmount_3);
if(currentScrollPosition_3 <= -4400){
    currentScrollPosition_3 = 0;
    btnScrollLeft_3.style.opacity = '0.3'
}else{
    btnScrollLeft_3.style.opacity = '1'
}
    sCont_3.style.left = currentScrollPosition_3 + 'px';
},4000)



/////////////////////Startin OF shop By Ctaegory////////////////////



currentScrollPosition_4 = 0;
let scrollAmount_4 =180;

const sCont_4 = document.querySelector(".Satyajit-2-storys-container")
const hScroll_4 = document.querySelector(".Satyajit-2-horizontal-scroll");
const btnScrollLeft_4 = document.querySelector('#Satyajit-2-btn-scroll-left')
const btnScrollRight_4 = document.querySelector('#Satyajit-2-btn-scroll-right')

btnScrollLeft_4.style.opacity = '0.5'


// let maxScroll_4 = -sCont_4.offsetWidth + hScroll2.offsetWidth;
let maxScroll_4 = -560;


function scrollHorizontally_4(val){
    currentScrollPosition_4 += (val * scrollAmount_4);
    console.log(currentScrollPosition_4)
if(currentScrollPosition_4 > 0){
    currentScrollPosition_4 = 0;
    btnScrollLeft_4.style.opacity = '0.3'
}else{
    btnScrollLeft_4.style.opacity = '1'
}
if(currentScrollPosition_4 <= maxScroll_4){
    currentScrollPosition_4 = maxScroll_4;
    btnScrollRight_4.style.opacity = '0.5'
}else{
    btnScrollRight_4.style.opacity = '1'
}
    sCont_4.style.left = currentScrollPosition_4 + 'px';
    
}