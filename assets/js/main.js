// check off specific tasks by clicking on them
$('li').click(function(){
  // $(this).css('color', 'gray');
  // $(this).css('textDecoration', 'line-through');
  if($(this).css('color') === 'rgb(128, 128, 128)'){
    console.log("It is currently gray");
  };
  $(this).css({
    'color': 'gray',
    'textDecoration': 'line-through'
  })

});