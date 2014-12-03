var team = [{
  name: "Matt Kinney",
  stats: [
    {name: "Aura: Battle Cry", rating: 5}, 
    {name: "Wildcard", rating: 5}, 
    {name: "Web Development", rating: 2}, 
    {name: "Hardcore Gamer", rating: 4}
  ], 
  type: "Paladin",
  image: "./assets/images/mattFullBody.png",
  logo: "./assets/images/paladin.png",
  info: "I am a paladin. A warrior of the light, I can be on the front lines absorbing damage for the team or heal the team through conflict resolution"},
  {name: "Dylan Watkins",
  stats: [
    {name: "Design", rating: 3}, 
    {name: "Connecting", rating: 5}, 
    {name: "Systemizer", rating: 4}, 
    {name: "Flag Carrier", rating: 4}
  ], 
  type: "Druid",
  image: "./assets/images/FullBodyDylan.png",
  logo: "./assets/images/druid.png",
  info: "As a master of shape shifting Druids can take on any form of beast that suits the situation. In this way I find myself performing whatever rolls are necessary to complete the project for the team"},
  {name: "Arman Bastani",
  stats: [
    {name: "M2M Communication", rating: 5}, 
    {name: "Adaptability", rating: 5}, 
    {name: "Rapid Prototyping", rating: 4}, 
    {name: "Rock Star", rating: 5}
  ], 
  type: "Mage",
  image: "./assets/images/armanFullBody.png",
  logo: "./assets/images/mage.png",
  info: "Students gifted with a keen intellect and unwavering discipline may walk the path of the mage. Testing the limits of what’s possible with magic (or technology) a magi is both great and dangerous, and thus is revealed only to the most devoted practitioners"},
  {name: "Michel Haddad",
  stats: [
    {name: "Aspect of the Pack", rating: 5}, 
    {name: "Creativity", rating: 3}, 
    {name: "Protection", rating: 4}, 
    {name: "Execution", rating: 4}
  ], 
  type: "Hunter",
  image: "./assets/images/FullBodyMichel.png",
  logo: "./assets/images/hunter.png",
  info: "From an early age the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside. Those who endure become hunters. Masters of their environment, they are able to slip like ghosts through the trees and lay traps in the paths of their enemies"},
  {name: "Kendrick Parks",
  stats: [
    {name: "Lock Picking", rating: 3}, 
    {name: "Embeded Systems", rating: 3}, 
    {name: "Web Development", rating: 4}, 
    {name: "Puzzle Solving", rating: 5}
  ], 
  type: "Rogue",
  image: "./assets/images/kenFullBody.png",
  logo: "./assets/images/rogue.png",
  info: "I am a rogue and rogues are known for being a lone wolf, but when they find a team worthy enough to join, like the team we have now, they will fully dedicate themselves to the betterment of the team"}
];

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
  switchPlayerInfo(0)

  $(".player").click(function(){
    removeActivePlayer();
    $(this).addClass("active");
    switchPlayerInfo(getIndex($(this)[0].id));

  });

  function removeActivePlayer() {
    $(".player").removeClass("active");
  }

  function getIndex(name) {
    if (name == "matt") {
      return 0;
    }
    else if (name == "dylan") {
      return 1;
    }
    else if (name == "arman") {
      return 2;
    }
    else if (name == "meesh") {
      return 3;
    }
    else if (name == "ken") {
      return 4;
    }
    else {
      return "random";
    }
  }

  function switchPlayerInfo(i) {
    if (i == "random") {
      i = Math.floor(Math.random() * team.length);
    }
    $("#team #about h2").text(team[i].name);
    $("#team #about img").attr("src", team[i].logo);
    $("#team #about p").html("<b>Class: " + team[i].type  + "</b>" + "<br />" + team[i].info);
    $("#team #character #characterImage").css("background-image", "url(" + team[i].image + ")");
    var newHtml = [];
    for (var j=0; j<team[i].stats.length; j++) {
      var unrated = "";
      var rating = "";
      for (var a=0; a<(5 - team[i].stats[j].rating); a++){
        unrated += '&#9734;';
      }
      for (var b=0; b<team[i].stats[j].rating; b++){
        rating += '&#9734;';
      }
      newHtml.push(team[i].stats[j].name + "<span><span class='unrated'>" + unrated + "</span><span class='rating'>" + rating + "</span></span>");
      $("#team #stats #stat" + (j+1)).html(newHtml[j]);
    }
  }
});
