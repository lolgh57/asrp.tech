var buttonTeam = document.querySelector(".wrapper-menu__shadow-button-team");
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
var teamElem1 = document.querySelector(".team__elem1");
var teamElem2 = document.querySelector(".team__elem2");
var video = document.querySelector("#video");
var wrapperMenu = document.querySelector(".wrapper-menu");
var wrapperTeam = document.querySelector(".wrapper-team");

function isIphone() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isIphone()) {
  buttonTeam.addEventListener("click", function () {
    teamElem2.classList.add("team__elem2_push_down");
    setTimeout(() => (window.location.href = "team.html"), 500);
  });
} else {
  buttonTeam.addEventListener("mouseover", function () {
    teamElem2.classList.add("team__elem2_push_down");
  });

  buttonTeam.addEventListener("mouseleave", function () {
    teamElem2.classList.remove("team__elem2_push_down");
  });
  buttonTeam.addEventListener("click", function () {
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
          buttonTeam.classList.add("zero-opacity");
          wrapperMenu.classList.add("zero-opacity_long");
          setTimeout(wrapperMenuTeamHide, 1000);
          window.location.href = "team.html";
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
}
