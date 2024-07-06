var buttonProducts = document.querySelector('.wrapper-menu__shadow-button-products');
var productsElem1 = document.querySelector('.products__elem1');
var productsElem2 = document.querySelector('.products__elem2');



buttonProducts.addEventListener('mouseover', function() {
        productsElem2.classList.add('products__elem2_push');
    });

buttonProducts.addEventListener('mouseleave', function() {
        productsElem2.classList.remove('products__elem2_push');
    });

buttonProducts.addEventListener('click', function() {
    
    });