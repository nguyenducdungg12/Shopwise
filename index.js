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
setInterval(Next,5000);
