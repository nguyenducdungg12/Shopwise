var btnRight = document.querySelector(".header__slide__btn-right");
var btnLeft = document.querySelector(".header__slide__btn-left");
var slides = document.querySelectorAll(".header__slides__item");
var numberSlide = 0;
function initSlide(){
    slides[0].classList.add("active__slide");
    slides[numberSlide].querySelector(".header__slides__item__info__discount").style.animation="LeftTo 0.5s forwards"
    slides[numberSlide].querySelector(".header__slides__item__info__name").style.animation="LeftTo 0.5s forwards"
    slides[numberSlide].querySelector(".header__slides__item__info__btn").style.animation="LeftTo 0.5s forwards"
}
initSlide();
function Next(){

    for (var i =0; i<slides.length;i++){
        slides[i].classList.remove("active__slide")
    }
    slides[numberSlide].querySelector(".header__slides__item__info__discount").style.animation="none"
    slides[numberSlide].querySelector(".header__slides__item__info__name").style.animation="none"
    slides[numberSlide].querySelector(".header__slides__item__info__btn").style.animation="none"
    console.log(numberSlide)
    if (numberSlide==2){
        numberSlide=-1;
    }
    slides[numberSlide+1].classList.add("active__slide")
    
    slides[numberSlide+1].querySelector(".header__slides__item__info__discount").style.animation="LeftTo 0.5s forwards"
    slides[numberSlide+1].querySelector(".header__slides__item__info__name").style.animation="LeftTo 0.5s forwards"
    slides[numberSlide+1].querySelector(".header__slides__item__info__btn").style.animation="LeftTo 0.5s forwards"
    numberSlide++;
}
function Back(){
    for (var i =0; i<slides.length;i++){
        slides[i].classList.remove("active__slide")
    }
    slides[numberSlide].querySelector(".header__slides__item__info__discount").style.animation="none"
    slides[numberSlide].querySelector(".header__slides__item__info__name").style.animation="none"
    slides[numberSlide].querySelector(".header__slides__item__info__btn").style.animation="none"
    if (numberSlide==0){
        numberSlide=3;
    }
    slides[numberSlide-1].classList.add("active__slide")
    
    slides[numberSlide-1].querySelector(".header__slides__item__info__discount").style.animation="LeftTo 0.5s forwards"
    slides[numberSlide-1].querySelector(".header__slides__item__info__name").style.animation="LeftTo 0.5s forwards"
    slides[numberSlide-1].querySelector(".header__slides__item__info__btn").style.animation="LeftTo 0.5s forwards"
    
    numberSlide--;
}
btnRight.addEventListener("click",Next);
btnLeft.addEventListener("click",Back);
//setInterval(Next,5000);


/* Product slide */

var indexProduct = 1;
var productSlides = document.querySelector(".product__slides");
var itemSlide = document.getElementsByClassName("product__slides__item");
var widthItem = itemSlide[0].clientWidth;
var productBtn_left = document.querySelector(".product__sildes__btn-left");
var productBtn_right = document.querySelector(".product__sildes__btn-right");
productSlides.style.transform =`translateX(-${(widthItem+20)*(indexProduct)}px)`

function productNext(){
    if (indexProduct>=itemSlide.length-4){
        return;
    }
    indexProduct++;
    productSlides.style.transition="all .3s";
    productSlides.style.transform =`translateX(-${(widthItem+20)*(indexProduct)}px)`
}
function productBack(){
    console.log(indexProduct);
    if(indexProduct<=0)
    {

        return;
    }
    indexProduct--;
    productSlides.style.transition="all .3s";
    productSlides.style.transform =`translateX(-${(widthItem+20)*(indexProduct)}px)`
}
function LoopSlide(){
    if(indexProduct==0){
         productSlides.style.transition="none";
        indexProduct=itemSlide.length-4;
        productSlides.style.transform =`translateX(-${(widthItem+20)*(indexProduct)}px)`
    }
    if(indexProduct==itemSlide.length-4){
          productSlides.style.transition="none";
           indexProduct=1;
           productSlides.style.transform =`translateX(-${(widthItem+20)*(indexProduct)}px)`
    }
}
productSlides.addEventListener("transitionend",LoopSlide);
productBtn_right.addEventListener("click",productNext);
productBtn_left.addEventListener("click",productBack);


/*  Slide client*/

var indexClient = 1;
var clientSlides = document.querySelector(".banner__client__slides");
var clientSlide = document.getElementsByClassName("banner__client__slide");
var widthClient =clientSlide[0].clientWidth;
console.log(widthClient);
var clientBtn_left = document.querySelector(".banner__client__btn-left");
var clientBtn_right = document.querySelector(".banner__client__btn-right");
clientSlides.style.transform =`translateX(-${(widthClient)*(indexClient)}px)`;
function clientNext(){
    if (indexClient>=clientSlide.length-2){
        return;
    }
    indexClient++;
    clientSlides.style.transition="all .3s";
    clientSlides.style.transform =`translateX(-${(widthClient)*(indexClient)}px)`
}
function clientBack(){
    console.log(indexClient);
    if(indexClient<=0)
    {

        return;
    }
    indexClient--;
    clientSlides.style.transition="all .3s";
    clientSlides.style.transform =`translateX(-${(widthClient+20)*(indexClient)}px)`
}
function loopClient(){
    if(indexClient==0){
         clientSlides.style.transition="none";
        indexClient=clientSlide.length-2;
        clientSlides.style.transform =`translateX(-${(widthClient+20)*(indexClient)}px)`
    }
    if(indexClient==clientSlide.length-2){
          clientSlides.style.transition="none";
           indexClient=1;
           clientSlides.style.transform =`translateX(-${(widthClient+20)*(indexClient)}px)`
    }
}
clientSlides.addEventListener("transitionend",loopClient);
clientBtn_left.addEventListener("click",clientBack);
clientBtn_right.addEventListener("click",clientNext);

