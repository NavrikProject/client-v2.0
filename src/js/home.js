import $ from "jquery";

$(function () {
  var manageHomeBannerImg = function () {
    $(".homeBanner li").each(function () {
      var selectImg = $(this).children("figure").find("img");
      //var orImg = selectImg.attr('data-mobimg');
      //selectImg.attr('data-img',orImg.split('-')[0]+'.jpg');
      //var orImg2 = selectImg.attr('data-img');

      if ($(window).width() < 1024) {
        selectImg.attr("src", selectImg.attr("data-mobimg"));
      } else {
        //selectImg.attr('src',orImg2);
      }

      $(this).css({
        background: "url(" + selectImg.attr("src") + ") no-repeat 50% 50%",
        "background-size": "cover",
      });
    });
  };

  var manageHomeBannerHeight = function () {
    if ($(window).width() > 1024) {
      if ($(window).width() > $(window).height() + $(window).height() * 0.4) {
        $(".homeSec1").css("height", "auto");
        $(".homeSec1").css("height", "100vh");
      } else {
        $(".homeSec1").css("height", "auto");
      }
    } else {
      if ($(window).width() > $(window).height()) {
        $(".homeSec1").css("height", "auto");
      } else {
        $(".homeSec1").css("height", "auto");
        $(".homeSec1").css("height", $(window).height() - 110 + "px");
      }
    }
  };

  manageHomeBannerHeight();
  manageHomeBannerImg();

  $(window).on("resize", function () {
    // alert(10);
    manageHomeBannerHeight();
    manageHomeBannerImg();
  });

  var loader = function () {
    var can = document.getElementById("bannerLoader"),
      c = can.getContext("2d");

    var posX = can.width / 2,
      posY = can.height / 2,
      fps = 5000 / 360,
      oneProcent = 360 / 100,
      result = oneProcent * 100;

    //c.lineCap = 'round';
    //arcMove();
    //function arcMove(){
    var deegres = 0;
    var acrInterval = setInterval(function () {
      deegres += 1;
      c.clearRect(0, 0, can.width, can.height);

      c.beginPath();
      c.arc(posX, posY, 20, 0, (Math.PI / 180) * (270 + 360));
      c.strokeStyle = "#b1b1b1";
      c.lineWidth = "3";
      c.stroke();

      c.beginPath();
      c.strokeStyle = "#C00";
      c.lineWidth = "3";
      c.arc(
        posX,
        posY,
        20,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + deegres)
      );
      c.stroke();
      if (deegres >= result) clearInterval(acrInterval);
      //if( a==false ) clearInterval(acrInterval);
    }, fps);

    //}
  }; //loader

  var bannerCtrl = true;
  $(document).on("click", "#bannerPlayPose", function () {
    $(this).toggleClass("play");
    if (bannerCtrl == true) {
      $(".homeBanner").slick("slickPause");
      bannerCtrl = false;
    } else {
      $(".homeBanner").slick("slickPlay");
      bannerCtrl = true;
    }
  });

  $(document).on("click", ".bpc", function () {
    $(".homeBanner").slick("slickPause");
    $("#bannerPlayPose").addClass("play");
    bannerCtrl = false;
  });

  $(".homeBanner").on("init", function (event, slick, currentSlide, nextSlide) {
    $(".homeBanner").css("visibility", "visible");
    $(".homeBanner li.slick-active")
      .find("*")
      .each(function () {
        $(this).addClass($(this).attr("data-animation"));
      });

    $(".homeBanner")
      .parent()
      .append(
        "<div class='bannerControl'><canvas id='bannerLoader' width='45' height='45'></canvas><strong id='bannerPlayPose' class='playPose'></strong></div>"
      );
    $(".homeBanner").find(".banner_prev").appendTo(".bannerControl");
    $(".homeBanner").find(".banner_next").appendTo(".bannerControl");
  });

  $(".homeBanner").on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".gallery_paging").remove();
      $(".homeBanner")
        .siblings(".bannerControl")
        .append("<span class='gallery_paging'>01/</span>");
      var $status = $(".gallery_paging");

      var i = (currentSlide ? currentSlide : 0) + 1,
        totalslide =
          slick.slideCount >= 10 ? slick.slideCount : "0" + slick.slideCount;
      if (i >= 10) {
        $status.html("<b>" + i + "</b>" + " / " + totalslide);
      } else {
        $status.html("<b>0" + i + "</b>" + " / " + totalslide);
      }

      loader();
    }
  );

  $(".homeBanner").slick({
    dots: false,
    autoplay: true,
    arrows: true,
    prevArrow:
      '<span href="" data-role="none" class="banner_prev bpc">Previous</span>',
    nextArrow:
      '<span href="" data-role="none" class="banner_next bpc">Next</span>',
    infinite: true,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: false,
    slide: "li",
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: "ps_dots",
        },
      },
    ],
  });

  $(".homeBanner").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".homeBanner li.slick-active")
        .find("*")
        .each(function () {
          $(this).addClass($(this).attr("data-animation"));
        });
    }
  );

  $(".homeBanner").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".homeBanner li.slick-active")
        .find("*")
        .each(function () {
          $(this)
            .addClass($(this).attr("data-animation2"))
            .delay(1000)
            .queue(function () {
              $(".homeBanner li")
                .not(".slick-active")
                .find("*")
                .removeClass($(this).attr("data-animation2"))
                .dequeue();
            });
          $(".homeBanner li")
            .find("*")
            .removeClass($(this).attr("data-animation"));
        });
    }
  );

  /*$('.homeBanner').on('afterChange', function(event, slick, currentSlide, nextSlide){
	loader();
});*/

  $(".productSlide").slick({
    dots: false,
    dotsClass: "ps_dots",
    autoplay: true,
    arrows: true,
    prevArrow: '<span href="" data-role="none" class="ps_prev">Previous</span>',
    nextArrow: '<span href="" data-role="none" class="ps_next">Next</span>',
    //infinite: true,
    speed: 500,
    //cssEase: "linear",
    pauseOnHover: false,
    slide: "li",
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".productSlide").slick("slickFilter", ".auto");
  $(".productSlide").slick("slickGoTo", 0);
  $("input[name='type']").click(function () {
    var rdVaule = $("input[name='type']:checked").val();
    $(".autoText").show();
    if (rdVaule === "auto") {
      $(".productSlide").slick("slickFilter", ".auto");
      $(".productSlide").slick("slickGoTo", 0);
      $(".autoText").fadeIn();
      $(".none_autoText").hide();
    } else if (rdVaule === "none_auto") {
      $(".productSlide").slick("slickFilter", ".none_auto");
      $(".productSlide").slick("slickGoTo", 0);
      $(".autoText").hide();
      $(".none_autoText").fadeIn();
    }
  });

  $(".whyGoForSf_slid").slick({
    dots: true,
    dotsClass: "ps_dots",
    autoplay: true,
    arrows: true,
    prevArrow: '<span href="" data-role="none" class="ps_prev">Previous</span>',
    nextArrow: '<span href="" data-role="none" class="ps_next">Next</span>',
    infinite: true,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: false,
    slide: "li",
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".pattery_type_slid").slick({
    dots: false,
    dotsClass: "ps_dots",
    autoplay: false,
    arrows: false,
    prevArrow: '<span href="" data-role="none" class="ps_prev">Previous</span>',
    nextArrow: '<span href="" data-role="none" class="ps_next">Next</span>',
    infinite: true,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: false,
    slide: "li",
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          dots: true,
        },
      },
    ],
  });

  $(".social_slide").slick({
    dots: true,
    dotsClass: "ps_dots",
    autoplay: false,
    arrows: false,
    prevArrow: '<span href="" data-role="none" class="ps_prev">Previous</span>',
    nextArrow: '<span href="" data-role="none" class="ps_next">Next</span>',
    infinite: true,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: false,
    slide: "li",
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //    variableWidth: true,
        },
      },
    ],
  });

  $(window).on("resize", function () {
    //$('.productSlide')[0].slick.refresh()
  });

  $(document).on("click", ".openInfo", function () {
    $(this).parent().find(".moreProductInfo").fadeIn(300);
    return false;
  });

  $(document).on("click", ".InfoClose", function () {
    $(this).parent().fadeOut(300);
    return false;
  });

  $(".pattery_type_slid li").hover(
    function () {
      $(this).append(
        "<span style='position:absolute; left:0; top:0; right:0; bottom:0; margin:auto; width:150px; height:40px; text-align:center; line-height:40px; background:#343783; color:#FFF; border-radius:3px; box-shadow: 0px 3px 10px 0px rgb(0,0,0,0.5); ' class='tooltip' >Coming soon</span>"
      );
    },
    function () {
      $(".tooltip").remove();
    }
  );
});
console.log("Hello");
// Quick link
$(function () {
  $(".quick-link-btn").click(function () {
    //if ($(window).width() <= 1366) {
    $(this).toggleClass("open-close");
    if ($(this).parent().css("right") == "-100px") {
      $(this).parent().animate({ right: "0px" });
      //$(this).text('Close');
    } else {
      $(this).parent().animate({ right: "-100px" });
      //$(this).text('Open');
    }
    //}
  });
  // Service slider
});
