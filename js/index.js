$(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            disableOnInteraction: false
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    $('.number').countUp();
    
    $("#index-xd-tab").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#index-xd-tab").find("li").removeClass("active");
            $(this).addClass("active");
            $(".index-xd-item").hide();
            $(".index-xd-item").eq(i).show();
        })
    })

    $("#index-build-content").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#index-build-content").find("li").removeClass("active");
            $(this).addClass("active");
            $(".index-build-item").hide();
            $(".index-build-item").eq(i).show();
        })
    })

    $("#tab-change").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#tab-change").find("li").removeClass("active");
            $(this).addClass("active");
            $(".js-eg").hide();
            $(".js-eg").eq(i).show();
        })
    })

    var artNum = 0;
    $("#js-art-change-left").click(function () {
        if(artNum==0){
            artNum =  $(".js-art-change").length-1
        }else{
            artNum--;
        }
        $(".js-art-change").hide();
        $(".js-art-change").eq(artNum).show();
    })
    $("#js-art-change-right").click(function () {
        if(artNum==$(".js-art-change").length-1){
            artNum = 0
        }else{
            artNum++;
        }
        $(".js-art-change").hide();
        $(".js-art-change").eq(artNum).show();
    })

    var generalizeNum = 0;
    $("#generalize-left").click(function () {
        if(generalizeNum==0){
            generalizeNum =  $(".js-generalize-change").length-1
        }else{
            generalizeNum--;
        }
        $(".js-generalize-change").hide();
        $(".js-generalize-change").eq(generalizeNum).show();
    })
    $("#generalize-right").click(function () {
        if(generalizeNum==$(".js-generalize-change").length-1){
            generalizeNum = 0
        }else{
            generalizeNum++;
        }
        $(".js-generalize-change").hide();
        $(".js-generalize-change").eq(generalizeNum).show();
    })


    //旋转木马
    // 初始化
    var imgNum = $(".index-turn-item3").size();
    var item0 = $(".index-turn-item3").eq(0);
    var item1 = $(".index-turn-item3").eq(1);
    var item2 = $(".index-turn-item3").eq(2);
    item0.attr("class","index-turn-item0");
    item1.attr("class","index-turn-item1");
    item2.attr("class","index-turn-item2");

    if(imgNum>3){
        $(".index-left-btn-s").click(function () {
            $(".index-turn-item0").attr("class","index-turn-item3");
            $(".index-turn-item1").attr("class","index-turn-item0");
            $(".index-turn-item2").next().attr("class","index-turn-item2");
            $(".index-turn-item2").eq(0).attr("class","index-turn-item1");
            $('.index-turn-item3').eq(0).insertBefore( $(".index-right-btn-s") );
        })

        $(".index-right-btn-s").click(function () {
            $(".index-turn-item2").attr("class","index-turn-item3");
            $(".index-turn-item1").attr("class","index-turn-item2");
            $(".index-turn-item0").attr("class","index-turn-item1");
            $(".index-turn-item3").eq($(".index-turn-item3").size()-1).attr("class","index-turn-item0");
            $('.index-turn-item0').eq(0).insertAfter( $(".index-left-btn-s") );
        })
    }else if(imgNum == 3){
        $(".index-left-btn-s").click(function () {
            $(".index-turn-item0").attr("class","index-turn-item2");
            $(".index-turn-item1").attr("class","index-turn-item0");
            $(".index-turn-item2").eq(1).attr("class","index-turn-item1");
            $(".index-turn-item2").insertBefore( $(".index-right-btn-s") );
        })

        $(".index-right-btn-s").click(function () {
            $(".index-turn-item2").attr("class","index-turn-item0");
            $(".index-turn-item1").attr("class","index-turn-item2");
            $(".index-turn-item0").eq(0).attr("class","index-turn-item1");
            $('.index-turn-item0').insertAfter( $(".index-left-btn-s") );
        })
    }else{
        console.log("图片数量不足3张,旋转轮播无法正常轮播");
    }
})