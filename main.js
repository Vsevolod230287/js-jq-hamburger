var hamburgerMenu = $("i.fas.fa-bars");
var menuClose = $("i.fas.fa-times");
var menuActive = $(".hamburger-menu");


hamburgerMenu.click(function () {
    menuActive.addClass("active");
  });

menuClose.click(function() {
  menuActive.removeClass("active");
})
