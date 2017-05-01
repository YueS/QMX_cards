/**
 * Created by yue on 2017/4/23 0023.
 */

$("#move_s").hide();
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 100){
        $("#move_s").fadeIn();
    }
    else {
        $("#move_s").fadeOut();
    }
};

//顶部底部移动
$('a.scrollToTop').click(function(){
    $('html, body').animate({scrollTop:0},1000);
    return false;
});
// Scroll page to the bottom
$('a.scrollToBottom').click(function(){
    $('html, body, .content').animate({scrollTop: $(document).height()}, 1000);
    return false;
});