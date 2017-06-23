// plays music on page load
$(document).ready($('.begin')[0].play());


//
$('#start').click(createBattleField);

function createBattleField() {
  var $battlefield = $('.battlefield');
  $battlefield.empty(); // clears page from headings and start button
  var $scene = $('<canvas/>',{
    id: 'scene'          // creates canvas
  });
  $scene.appendTo($battlefield); // and adds it to the page

  map();
}
