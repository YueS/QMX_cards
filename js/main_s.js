$(".name").click(function() {
	$(this).parent().parent().parent().toggleClass("card");
});
$(".click00").click(function() {
	$(".card1").removeClass("card");
	//$(".cards").show();
});
$(".click0").click(function() {
	$(".card1").addClass("card");
	//$(".cards").hide();
});
$(".click1").click(function() {
	$(this).toggleClass("rol_hide");
	$(".type1").toggleClass("hide");
});
$(".click2").click(function() {
	$(this).toggleClass("rol_hide");
	$(".type2").toggleClass("hide");
});
$(".click3").click(function() {
	$(this).toggleClass("rol_hide");
	$(".type3").toggleClass("hide");
});
$(".click4").click(function() {
	$(this).toggleClass("rol_hide");
	$(".type4").toggleClass("hide");
});
$(".click5").click(function() {
	$(this).toggleClass("rol_hide");
	$(".type5").toggleClass("hide");
});
$(".click6").click(function() {
	$(this).toggleClass("rol_hide");
	$(".type6").toggleClass("hide");
});
$(".click7").click(function() {
	$(this).toggleClass("rol_hide");
	$(".type7").toggleClass("hide");
});
$(".span_old").click(function() {
	$(this).hide().siblings().show();
	$(".card1[name='card_type_s_old']").toggleClass("card_old_hide");
});
////21070306-20170326 命运长夜
//$(".span_tower20170306").click(function() {
//	$(this).hide().siblings().show();
//	$(".card1[name='card_type_s20170306']").toggleClass("card_old_hide");
//});
////20170213-20170305 开学祭
//$(".span_tower20170213").click(function() {
//	$(this).hide().siblings().show();
//	$(".card1[name='card_type_s20170213']").toggleClass("card_old_hide");
//});
////21070123-20170212 浴衣旗袍
//$(".span_tower20170123").click(function() {
//	$(this).hide().siblings().show();
//	$(".card1[name='card_type_s20170123']").toggleClass("card_old_hide");
//});
////20170102-20170122 圣诞西装
//$(".span_tower20170102").click(function() {
//	$(this).hide().siblings().show();
//	$(".card1[name='card_type_s20170102']").toggleClass("card_old_hide");
//});
////20161212-20170101 圣诞西装
//$(".span_tower20161212").click(function() {
//	$(this).hide().siblings().show();
//	$(".card1[name='card_type_s20161212']").toggleClass("card_old_hide");
//});
$(".btn_tsx").click(function(){
	$(this).hide();
	$(".btn_ts").show()
	$(".btn_tsf").show().removeClass("btn_tsf");
});
$(".btn_ts").click(function(){
	$(this).hide();
	$(".btn_tsx").show()
	$("span:contains('非特殊卡')").parents(".card1:visible").addClass("btn_tsf").hide();
});

//重置，暂留
$("#reset").click(function(){
	$("*").removeAttr("style");
	$("div[class=none]").css({"display":"none"});
});

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