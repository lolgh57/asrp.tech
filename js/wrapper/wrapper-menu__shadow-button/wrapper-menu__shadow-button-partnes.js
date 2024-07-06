var buttonPartners = document.querySelector('.wrapper-menu__shadow-button-partnes');
var partnersElem1 = document.querySelector('.partners__elem1');
var partnersElem2 = document.querySelector('.partners__elem2');



buttonPartners.addEventListener('mouseover', function() {
        partnersElem2.classList.add('partners__elem2_push_down');
    });

buttonPartners.addEventListener('mouseleave', function() {
        partnersElem2.classList.remove('partners__elem2_push_down');
    });

buttonPartners.addEventListener('click', function() {
    
    });