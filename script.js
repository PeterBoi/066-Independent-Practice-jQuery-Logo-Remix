$(".board").hide();

//1
$(".start").dblclick(function() {
    $(".board").slideDown();
});

//2
$(".end").dblclick(function() {
    $(".board").slideUp();

});

//3
$("img").hover(function() {
    $("img").css("border", "5px solid blue");
});

//4
$("html").keydown(function() {
    $("img").css("border", "5px solid black");
});
//5
$("img").dblclick(function(){
    $(".company-slogan").text("Connecting Communities.Creating Opportunities");
});
//6
$("img").click(function(){
    $(".company-slogan").empty("");
});