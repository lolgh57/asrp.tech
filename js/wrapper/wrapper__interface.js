var menuButton = document.querySelector('.wrapper__menu-button');
var buttonCircleLeft = document.querySelector('.wrapper__button-circle_left');
var buttonCircleMiddle = document.querySelector('.wrapper__button-circle_middle');
var buttonCircleRight = document.querySelector('.wrapper__button-circle_right');
var buttonCircleBottom = document.querySelector('.wrapper__button-circle_bottom');
var buttonMainPage = document.querySelector('.wrapper-menu__shadow-button-main-page');

var titleFirstString = document.querySelector('.title-first-string');
var titleSecondString = document.querySelector('.title-second-string');
var titleThirtString = document.querySelector('.title-thirt-string');
var titleFourString = document.querySelector('.title-four-string');
var wrapperMenu = document.querySelector('.wrapper-menu');
var wrapperLogo = document.querySelector('.wrapper__logo');



menuButton.addEventListener('mouseover', function() {
        buttonCircleLeft.classList.add('wrapper__button-circle_left_transform');
        buttonCircleMiddle.classList.add('wrapper__button-circle_middle_transform');
        buttonCircleRight.classList.add('wrapper__button-circle_right_transform');
        buttonCircleBottom.classList.remove('zero-opacity');
        buttonCircleBottom.classList.add('wrapper__button-circle_bottom_transform');
    });

menuButton.addEventListener('mouseleave', function() {
        buttonCircleLeft.classList.remove('wrapper__button-circle_left_transform');
        buttonCircleMiddle.classList.remove('wrapper__button-circle_middle_transform');
        buttonCircleRight.classList.remove('wrapper__button-circle_right_transform');
        buttonCircleBottom.classList.add('zero-opacity');
        buttonCircleBottom.classList.remove('wrapper__button-circle_bottom_transform');
    });

menuButton.addEventListener('click', function() {
        buttonCircleLeft.classList.add('zero-opacity');
        buttonCircleRight.classList.add('zero-opacity');
        buttonCircleBottom.classList.add('zero-opacity');
        menuButton.classList.add('wrapper__menu-button_push_left');
        setTimeout(hideButton, 50);
        function hideButton() {
            menuButton.classList.add('zero-opacity');
            setTimeout(ShowWrapperMenu, 500);
        };
    });

function ShowWrapperMenu () {
        menuButton.classList.add('hide-element');
        wrapperLogo.classList.add('zero-opacity');
        wrapperMenu.classList.remove('hide-element');
        setTimeout(showWrapperMenu, 50);
        function showWrapperMenu () {
            wrapperMenu.classList.remove('zero-opacity');
        };
};

buttonMainPage.addEventListener('click', function() {
        buttonCircleLeft.classList.remove('zero-opacity');
        buttonCircleRight.classList.remove('zero-opacity');
        buttonCircleBottom.classList.remove('zero-opacity');
        menuButton.classList.remove('wrapper__menu-button_push_left');
        menuButton.classList.remove('hide-element');
        wrapperMenu.classList.add('zero-opacity');
        setTimeout(hideWrapperMenu, 1000);
        function hideWrapperMenu () {
            wrapperMenu.classList.add('hide-element');
            menuButton.classList.remove('zero-opacity');
            wrapperLogo.classList.remove('zero-opacity');
        };
    });