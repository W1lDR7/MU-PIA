$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


// // nav responsive

//  document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

//  nav = document.getElementById("nav");
//  background_menu = document.getElementById("back_menu")

//  function mostrar_menu(){

//      nav.style.right = "0px";

//  }