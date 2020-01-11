$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( ".headlines" ).on( "swipe", swipeHandler );

  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    alert("yeah");
  }
});
