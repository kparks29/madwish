$(document).ready(function(){
  
  /******************************
          Page
  ******************************/

  /******************************
          Navbar
  ******************************/

  $(document).scroll(function(e){
    if ($(document).scrollTop() >= $("#mission").offset().top - $("nav").height()) {
      $("nav").css("background-color", "black");
      nav.css("color", "white");
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
