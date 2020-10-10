$(document).ready(function(){
  $('.sidenav').sidenav();

  $('.fixed-action-btn').floatingActionButton();

  $('#masonry').masonry({
    itemSelector: '.col',
    columnWidth: '.col'
  })

  $.farbtastic(".colorpicker").setColor("#AB47BC");

  });

  var Tcolor = "#AB47BC";

  var background = 0;

function toggledark(){
  if(background == 0){
    console.log("Switched to darkSide");
    background = 1;
    document.body.classList.add("darkbg");
    document.getElementById("ico").innerHTML = "🌞";
  }
  else{
    console.log("here's more light so you can burn your shitty eyes")
    background = 0;
    document.body.classList.remove("darkbg");
    document.getElementById("ico").innerHTML = "🌚";
  }
}

var lang = 0;

function switchLang(){
  if(lang == 0){
    
    lang = 1;
    document.getElementById("flag").src = "img/ita.min.png";
    var elementToHide = document.getElementsByClassName('en');
    var elementToShow = document.getElementsByClassName('it');
    for(let i=0; i < elementToHide.length; i++){
      elementToHide[i].classList.add("hide");
      elementToShow[i].classList.remove("hide");
    }

    console.log("ITA");
  }
  else{
    lang = 0;
    document.getElementById("flag").src = "img/eng.min.png";
    var elementToHide = document.getElementsByClassName('it');
    var elementToShow = document.getElementsByClassName('en');
    for(let i=0; i < elementToHide.length; i++){
      elementToHide[i].classList.add("hide");
      elementToShow[i].classList.remove("hide");
    }

    console.log("ENG");
  }
}

$('.colorpicker').farbtastic(function(color) {
  console.log('The user has just selected the following color: ' + color);
  // setting input value
  $('.colorpicker').val(color);
  $(".primary").css("background" , color);
  $(".icons a").css("color" , color);
  $(".description a").css("color" , color);
  Tcolor = color;

  const particlesJSON = {"particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 700 // Denser the smaller the number.
      }
    },
    "color": { // The color for every node, not the connecting lines.
      "value": Tcolor // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
    },
    "shape": {
        "type": "polygon", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
        "stroke": { // The border
          "width": 1,
          "color": Tcolor
        },
        "polygon": { // if the shape is a polygon
          "nb_sides": 5
        },
        "image": { // If the shape is an image
          "src": "",
          "width": 100,
          "height": 100
        }
    },
    "opacity": {
      "value": 0.7,
      "random": true
    },
    "size": {
      "value": 10,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 200, // The radius before a line is added, the lower the number the more lines.
      "color": Tcolor,
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
      "random": true,
      "straight": false, // Whether they'll shift left and right while moving.
      "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
      "bounce": false,
      "attract": { // Make them start to clump together while moving.
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  }}

  particlesJS("particles-js", particlesJSON)

});

  