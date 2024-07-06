var buttonSiteMap = document.querySelector('.wrapper-menu__shadow-button-site-map');
var mapElem1 = document.querySelector('.site-map__elem1');
var mapElem2 = document.querySelector('.site-map__elem2');



buttonSiteMap.addEventListener('mouseover', function() {
        mapElem2.classList.add('site-map__elem2_push_down');
    });

buttonSiteMap.addEventListener('mouseleave', function() {
        mapElem2.classList.remove('site-map__elem2_push_down');
    });

buttonSiteMap.addEventListener('click', function() {
    
    });