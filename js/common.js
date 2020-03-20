$(function () {
    $("#js-nav").find("li").each(function () {
        $(this).hover(function () {
            $(this).find("div").stop().css("display","block").animate({
                "opacity":1,
                "filter":"alpha(opacity=100)",
                "top":"70px"
            },400,"swing");

        },function () {
            $(this).find("div").stop().animate({
                "opacity":0,
                "filter":"alpha(opacity=0)"

            },400,"swing");
            $(this).find("div").css({
                "display":"none",
                "top":"90px"
            });
        })
    })



})