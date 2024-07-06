var titleFirstString = document.querySelector('.title-first-string');
var titleSecondString = document.querySelector('.title-second-string');
var titleThirtString = document.querySelector('.title-thirt-string');
var titleFourString = document.querySelector('.title-four-string');
var buttonСircleBottom = document.querySelector('.wrapper__button-circle_bottom');
var wrapperMenu = document.querySelector('.wrapper-menu');

    window.onload = function() {
        firstLumen();
        buttonСircleBottom.classList.add('zero-opacity');
        wrapperMenu.classList.add('zero-opacity');
        setTimeout(function() {
            var preloaderM = document.getElementById('page-preloader'); 
                if(!preloaderM.classList.contains('done'))
                    {
                        preloaderM.classList.add('done');
                    }
            }, 1000);
};

    function firstLumen() {
        titleFirstString.classList.add('logo-title_lumen');
        setTimeout(clearLumen, 1500);
        function clearLumen() {
            titleFirstString.classList.remove('logo-title_lumen');
            setTimeout(secondLumen, 1500);
        };
    };

    function secondLumen() {
        titleSecondString.classList.add('logo-title_lumen');
        setTimeout(clearLumen, 1500);
        function clearLumen() {
            titleSecondString.classList.remove('logo-title_lumen');
            setTimeout(thirtLumen, 1500);
        };
    };

    function thirtLumen() {
        titleThirtString.classList.add('logo-title_lumen');
        setTimeout(clearLumen, 1500);
        function clearLumen() {
            titleThirtString.classList.remove('logo-title_lumen');
            setTimeout(fourLumen, 1500);
        };
    };

    function fourLumen() {
        titleFourString.classList.add('logo-title_lumen');
        setTimeout(clearLumen, 1500);
        function clearLumen() {
            titleFourString.classList.remove('logo-title_lumen');
            setTimeout(firstLumen, 1500);
        };
    };