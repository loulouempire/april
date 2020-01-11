
$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 740) {
            // if larger or equal
            $('header .centerize').addClass('moveSocial');
        } else {
            // if smaller
            $('header .centerize').removeClass('moveSocial');
        }

        if($(window).width() <= 711) {
            // if larger or equal
            $('.home-page-container').addClass('fullWidth');
            $('.menu-box').show();
            $('.col-holder .col2').addClass('fullWidth');
            $('.headline-comment-box').css('width', '71%');
        } else {
            // if smaller
            $('.home-page-container').removeClass('fullWidth');
            $('.menu-box').hide();
            $('.col-holder .col2').removeClass('fullWidth');
            $('.headline-comment-box').css('width', '45%');
            $('.headline-comment-box').css('width', '45%');
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});


function openMenu(){
  $(".navigation").addClass("appearZI");
}
function removeMenu(){
  $(".navigation").removeClass("appearZI");
}
