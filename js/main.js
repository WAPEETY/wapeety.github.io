var Tcolor = "#AB47BC";
var background = 0;
var lang = 0;

function copyToClipboard(element) {
  if(lang == 0){
    M.toast({html: 'copied',classes: "primary"})
  }
  else{
    M.toast({html: 'copiato',classes: "primary"})
  }
  $(".primary").css("background" , Tcolor);
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


function toggledark(){
  if(background == 0){
    console.log("Switched to darkSide");
    background = 1;
    document.body.classList.add("darkbg");
    document.getElementById("ico").innerHTML = "🌞";
    insertUrlParam("bg","dark")
    document.getElementById("sharetext").textContent = window.location.href
  }
  else{
    console.log("here's more light so you can burn your shitty eyes")
    background = 0;
    document.body.classList.remove("darkbg");
    document.getElementById("ico").innerHTML = "🌚";
    removeURLParam(window.location.href,"bg")
    document.getElementById("sharetext").textContent = window.location.href
  }
}

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
    insertUrlParam("lang","it")
    document.getElementById("sharetext").textContent = window.location.href

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
    removeURLParam(window.location.href,"lang")
    document.getElementById("sharetext").textContent = window.location.href

    console.log("ENG");
  }
}

//retrieve get parameters (absolutely not copied from Stack Overflow LOL)
function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
      tmp = items[index].split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}

function insertUrlParam(key, value) {
  if (history.pushState) {
      let searchParams = new URLSearchParams(window.location.search);
      searchParams.set(key, value);
      let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
      window.history.pushState({path: newurl}, '', newurl);
  }
}

function removeURLParam(url, parameter) {
  var urlparts= url.split('?');   
  if (urlparts.length>=2) {

      var prefix= encodeURIComponent(parameter)+'=';
      var pars= urlparts[1].split(/[&;]/g);

      //reverse iteration as may be destructive
      for (var i= pars.length; i-- > 0;) {    
          //idiom for string.startsWith
          if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
              pars.splice(i, 1);
          }
      }

      url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");

  }
  window.history.pushState({path: url}, '', url)
}

function checkColor(color){
  if(color != null && color.length == 6){
    regex = new RegExp('^[a-fA-F0-9]+$')
    return regex.test(color)
  }
}

$(document).ready(function(){
  $('.sidenav').sidenav();
  if(findGetParameter("lang") == "it"){
    switchLang();
  }
  if(findGetParameter("bg") == "dark"){
    toggledark();
  }

  if(checkColor(findGetParameter("color"))){
    Tcolor = "#" + findGetParameter("color")
  }

  $('.fixed-action-btn').floatingActionButton();

  $('#masonry').masonry({
    itemSelector: '.col',
    columnWidth: '.col'
  })

  $.farbtastic(".colorpicker").setColor(Tcolor);

  particlesJS("particles-js", particlesJSON);

  });