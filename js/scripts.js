// Changes the navbar color
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll <300) {
        $('.fixed-top').css('background', 'transparent')
    } else {
        $('.fixed-top').css('background', 'rgba(175, 175, 175, 1)')
    }
    // background-color: rgba(243, 3, 3, 0.75);

})

// Closes navbar on click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Activates scrollspy and adds active nav link on scroll
$('body').scrollspy({target: '#bar', offset: 100})

// Shows the button when the user scrolls down 40px from the top of the document
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("gotoTop").style.display = "block";
    } else {
        document.getElementById("gotoTop").style.display = "none";
    }
}

// function topFunction() {
//     $('html, body').animate({scrollTop:0}, 'slow');
// }

// $('#back-to-top').each(function(){
//     $(this).click(function(){
//         $('html,body').animate({ scrollTop:0}, 'slow');
//         return false;
//     });
// });

