$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.slider').slider({
    indicators: false
  });
  $('.parallax').parallax();

  $('#masonry').masonry({
    itemSelector: '.col',
    columnWidth: '.col'
  })
});
