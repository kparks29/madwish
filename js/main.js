$(document).ready(function(){
  
  /******************************
          Page
  ******************************/

  /******************************
          Navbar
  ******************************/

  $(document).scroll(function(e){
    if ($(document).scrollTop() >= $("#mission").offset().top - $("nav").height() - 20) {
      $("nav").css("background-color", "black");
      $("nav ul li a").css("color", "white");
    }
    else {
      $("nav").css("background-color", "rgba(0,0,0,0)");
      $("nav ul li a").css("color", "black");
    }
  });

  /******************************
          Mission
  ******************************/

  /******************************
          Team
  ******************************/

  $("#matt").addClass("active");

  $(".player").click(function(){
    removeActivePlayer();
    $(this).addClass("active");
  });

  function removeActivePlayer() {
    $(".player").removeClass("active");
  }
});
