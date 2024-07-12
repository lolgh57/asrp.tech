// var buttonProducts = document.querySelector(
//   ".wrapper-menu__shadow-button-products"
// );
// var productsElem1 = document.querySelector(".products__elem1");
// var productsElem2 = document.querySelector(".products__elem2");

// buttonProducts.addEventListener("mouseover", function () {
//   productsElem2.classList.add("products__elem2_push");
// });

// buttonProducts.addEventListener("mouseleave", function () {
//   productsElem2.classList.remove("products__elem2_push");
// });

// buttonProducts.addEventListener("click", function () {});

// todo review the code
var buttonMainPage = document.querySelector(
  ".wrapper-menu__shadow-button-main-page"
);
var buttonPartners = document.querySelector(
  ".wrapper-menu__shadow-button-partnes"
);
var buttonProducts = document.querySelector(
  ".wrapper-menu__shadow-button-products"
);
var buttonSiteMap = document.querySelector(
  ".wrapper-menu__shadow-button-site-map"
);
var productsElem1 = document.querySelector(".products__elem1");
var productsElem2 = document.querySelector(".products__elem2");
var video = document.querySelector("#video");
var wrapperMenu = document.querySelector(".wrapper-menu");
var wrapperTeam = document.querySelector(".wrapper-team");

buttonProducts.addEventListener("mouseover", function () {
  productsElem2.classList.add("products__elem2_push");
});

buttonProducts.addEventListener("mouseleave", function () {
  productsElem2.classList.remove("products__elem2_push");
});

document.addEventListener("DOMContentLoaded", () => {
  video.setAttribute("autoplay", "autoplay");
  video.setAttribute("loop", "loop");
  video.setAttribute("preload", "auto");
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "playsinline");
});

buttonProducts.addEventListener("click", function () {
  setTimeout(changeVideo, 500);
  function changeVideo() {
    video.src = "res/background-video-stonehenge.mp4";
    video.muted = false;
    video.volume = 1.0;
  }
  wrapperMenu.classList.add("wrapper-menu_full-opacity");
  setTimeout(hideLeftRightElemtnsFirst, 500);
  function hideLeftRightElemtnsFirst() {
    buttonMainPage.classList.add("zero-opacity");
    buttonSiteMap.classList.add("zero-opacity");
    setTimeout(hideLeftRightElemtnsSecond, 500);
    function hideLeftRightElemtnsSecond() {
      buttonPartners.classList.add("zero-opacity");
      buttonProducts.classList.add("zero-opacity");
      setTimeout(hideLeftRightElemtnsThirt, 500);
      function hideLeftRightElemtnsThirt() {
        buttonProducts.classList.add("zero-opacity");
        wrapperMenu.classList.add("zero-opacity_long");
        setTimeout(wrapperMenuTeamHide, 1000);
        function wrapperMenuTeamHide() {
          wrapperMenu.classList.add("hide-element");
          setTimeout(teamMenuShow, 5000);
          function teamMenuShow() {
            wrapperTeam.classList.remove("hide-element");
            setTimeout(teamMenuShowOpacityRemove, 500);
            function teamMenuShowOpacityRemove() {
              wrapperTeam.classList.remove("zero-opacity");
            }
          }
        }
      }
    }
  }
});
