var buttonMainPage = document.querySelector('.wrapper-menu__shadow-button-main-page');
var mainPageLeft = document.querySelector('.main-page__left');
var mainPageRight = document.querySelector('.main-page__right');
var mainPageBottom = document.querySelector('.main-page__bottom');



buttonMainPage.addEventListener('mouseover', function() {
        mainPageLeft.classList.add('main-page__left_push');
        mainPageRight.classList.add('main-page__right_push');
        mainPageBottom.classList.add('main-page__bottom_push');
    });

buttonMainPage.addEventListener('mouseleave', function() {
        mainPageLeft.classList.remove('main-page__left_push');
        mainPageRight.classList.remove('main-page__right_push');
        mainPageBottom.classList.remove('main-page__bottom_push');
    });

buttonMainPage.addEventListener('click', function() {
    
    });