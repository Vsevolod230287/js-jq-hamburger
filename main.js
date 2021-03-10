var hamburgerMenu = $("i.fa-times");


hamburgerMenu.click(function () {
  var menuActive = $(".hamburger-menu");
  if(menuActive.hasClass("active")) {
    menuActive.removeClass("active");
  } else {
    menuActive.addClass("active");
  }
})
