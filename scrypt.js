$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var headerHight = 140;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

  $('.shadow-sm').each(function(){
    var src_off = $(this).find('img').attr('src');
    var src_on = src_off.replace('_off','_on');
    $('<img />').attr('src',src_on);
    $(this).hover(function(){
        $(this).find('img').attr('src',src_on);
    },function(){
        $(this).find('img').attr('src',src_off);
    });
});


  $( '#my-slid' ).sliderPro({
    width:600,
    arrows:true,
    buttons:true,
    slideDistance:0,
  });

  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollin');
        }
    });
});

});


