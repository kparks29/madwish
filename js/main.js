$(document).ready(function(){
  $("#matt").addClass("active");

  $(".player").click(function(){
    removeActivePlayer();
    $(this).addClass("active");
  });

  function removeActivePlayer() {
    $(".player").removeClass("active");
  }
});
