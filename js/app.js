$(document).ready(function () {
  // Açılışta about sub menü gizleniyor
  $("#about-subMenu").hide();
  $("#video-section").hide();
  $("#contact-section").hide();

  // About üzerine mouse ile gelinirse sub menü gösteriliyor
  $("#about-menu").mouseover(function () {
    $("#about-subMenu").show();
    $("#services-subMenu").hide();
  });

  // About sub menu üzerinden mouse ayrıldığında gizleniyor.
  $("#about-subMenu").mouseleave(function () {
    $("#about-subMenu").hide();
  });

  // Get In Touch butonuna click yaparak video penceresi açılıyor.
  $("#getInTouch").click(function () {
    $("#video-section").show(200);
  });

  // Contact linkine click yaparak harita ve contact form acliliyor.
  $("#contact").click(function () {
    $("#contact-section").show(200);
  });

  // Açılan video penceresi close dügmesi ile kapatılıyor
  $("#closeWindow").click(function () {
    $("#video-section").hide(200);
  });

  // Açılan contact penceresi close dügmesi ile kapatılıyor
  $("#closeContact").click(function () {
    $("#contact-section").hide(200);
  });

  //------------------------------------------------------------------------------------
  //Klasik Javascript ile
  var services = document.getElementById("services-subMenu");
  var about = document.getElementById("about-subMenu");
  var servicesSubMenu = document.getElementById("services-subMenu");
  const mySliderElement = document.querySelector('#carouselExampleCaptions');

  services.style.display = "none";

  servicesShow = function () {
    services.style.display = "block";
    about.style.display = "none";
  };

  servicesSubMenuHide = function () {
    servicesSubMenu.style.display = "none";
  };

  const slider = new bootstrap.Carousel(mySliderElement, {
    interval: 2000,
    ride: "carousel"
  });

});
