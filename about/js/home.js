$(".home-link").hover(function(){
  $(".home-link-li").addClass("afterHoverEffect");
},function(){
  $(".home-link-li").removeClass("afterHoverEffect");
});

$(".about-link").hover(function(){
  $(".about-link-li").addClass("afterHoverEffect");
},function(){
  $(".about-link-li").removeClass("afterHoverEffect");
});

$(".news-link").hover(function(){
  $(".news-link-li").addClass("afterHoverEffect");
},function(){
  $(".news-link-li").removeClass("afterHoverEffect");
});

$(".music-link").hover(function(){
  $(".music-link-li").addClass("afterHoverEffect");
},function(){
  $(".music-link-li").removeClass("afterHoverEffect");
});

$(".artist-link").hover(function(){
  $(".artist-link-li").addClass("afterHoverEffect");
},function(){
  $(".artist-link-li").removeClass("afterHoverEffect");
});

$(".sports-link").hover(function(){
  $(".sports-link-li").addClass("afterHoverEffect");
},function(){
  $(".sports-link-li").removeClass("afterHoverEffect");
});

$(".partner-link").hover(function(){
  $(".partner-link-li").addClass("afterHoverEffect");
},function(){
  $(".partner-link-li").removeClass("afterHoverEffect");
});

// WARNING: LATEST NEWS SECTION
$(".horizontal-inns").hover(function(){
  $(".comment-section").addClass("show");
},function(){
  $(".comment-section").removeClass("show");
});

// WARNING: ON SWIPE RIGHT OR LEFT
$(".headlines").on("swipeleft",function(){
    alert("You swiped left!");
});

// WARNING: CONTACT EMAIL
function openEmailContact(){
  alert("yeah");
  window.location.href='news/';
  var email = 'contact@loulouempire.com';
  var subject = 'LOULOU EMPIRE ONLINE';
  window.location = 'mailto:' + email + '?subject=';
}
