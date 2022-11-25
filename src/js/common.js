import $ from "jquery";
(function ($) {
  $.fn.krisAccordian = function (options) {
    var settings = $.extend(
      {
        activeClass: "active",
        int: function () {},
        initiallyContShow: true,
        slideDownCallback: function () {},
        slideDownCallback2: function () {},
        slideUpCallback: function () {},
      },
      options
    );

    return this.each(function () {
      settings.int();
      var accordian = $(this);
      var kid = accordian.children();

      if (settings.initiallyContShow == true) {
        accordian.children(":first").addClass(settings.activeClass);
        accordian.children().children(":last-child").hide();
        accordian.children(":first").children(":last-child").show();
      } else {
        accordian.children().children(":last-child").hide();
      }

      var findh3 = accordian.children().children(":first-child");
      var finddiv = accordian.children().children(":last-child");

      //findh3.css('color','#555');

      findh3.click(function () {
        if ($(this).next(finddiv).is(":hidden") == true) {
          findh3.next().slideUp();
          kid.removeClass(settings.activeClass);
        }

        if ($(this).next(finddiv).is(":hidden") == true) {
          $(this)
            .next(finddiv)
            .slideDown(function () {
              settings.slideDownCallback();
              settings.slideDownCallback2.call(this);
              //$('html, body').animate({scrollTop : $(this).offset().top},800);
            });
          $(this).parent().addClass(settings.activeClass);
        } else {
          $(this).next(finddiv).slideUp();
          $(this).parent().removeClass(settings.activeClass);
          settings.slideUpCallback();
        }
      });
    });
  };
})(jQuery);
console.log("Hello");
$(function () {
  var mngMenuEvent = function () {
    $(".nav>li").each(function () {
      if ($(window).width() > 1024) {
        if ($(this).children(".submenuHolder").length > 0) {
          $(this).addClass("dropdown_dex");
        }
        $(this).removeClass("dropdown_mob");
      } else {
        $(this).removeClass("dropdown_dex");
        if ($(this).children(".submenuHolder").length > 0) {
          $(this).addClass("dropdown_mob");
        }
      }
    });

    $(".nav li.addedFromTop").remove();
    $(".topLinks li").each(function () {
      if ($(window).width() < 1024) {
        $(".nav").append(
          "<li class='addedFromTop'>" + $(this).html() + "</li>"
        );
      } else {
        $(".nav li.addedFromTop").remove();
      }
    });
  };

  mngMenuEvent();

  $(".nav>li.dropdown_dex").on("mouseenter", function () {
    $(this).find(".submenuHolder").stop(!0, !0).slideDown(250);
    $("header").next(".submenu_bg").remove();
    $("header").after("<div class='submenu_bg'></div>");
  });

  $(".nav>li.dropdown_dex").on("mouseleave", function () {
    $(".submenuHolder").stop(!0, !0).delay(50).slideUp(250);
    $("header").next(".submenu_bg").fadeOut();
  });

  $(".nav>li.dropdown_mob>a").on("click", function () {
    $(this).next(".submenuHolder").slideToggle();
    $(this).toggleClass("openMobSub");
    return false;
  });

  $(".mobNavTriger").on("click", function () {
    $(this).toggleClass("mtClose");
    if (!$(this).hasClass("mtClose")) {
      $(".navHolder").animate({ left: "100%" });
      //$('header').removeClass('headerFixed');
    } else {
      $(".navHolder").animate({ left: "0" }, function () {
        //$('header').addClass('headerFixed');
      });
    }
  });

  $(window).on("resize", function () {
    mngMenuEvent();
    // mngtabA();
  });

  /*---------- above only nav ------------*/

  $(window).scroll(function () {
    //alert(10);
    var scrollFrom = $(window).width() > 1024 ? 48 : 0;
    if ($(this).scrollTop() > scrollFrom) {
      $("header").addClass("headerFixed");
    } else {
      $("header").removeClass("headerFixed");
    }
  });

  if ($(".popTable").length > 0) {
    $(".popTable").each(function () {
      var $this = $(this);
      $(this)
        .children("li")
        .each(function () {
          $(this)
            .children("aside")
            .each(function (i) {
              var getText = $this
                .children("li:eq(0)")
                .children("aside:eq(" + i + ")")
                .text();
              $(this).prepend("<strong>" + getText + "</strong>");
            });
        });
    });
  }

  // custom upload file----

  $(document).on("change", ".uploadFile input", function () {
    var fileName = $(this).val().split("\\")[
      $(this).val().split("\\").length - 1
    ];
    if (fileName) {
      $(this).siblings("span").text(fileName).css("color", "#000");
      $(this).parent().addClass("activeBox");
    }
  });

  // custom upload file----
}); //ready function end

var loactionListHeight = function () {
  $("ul.loactionList").each(function () {
    var $this = $(this);
    var $lis = $(this).children("li");

    var $a = [];

    if ($(".llRow").length > 0) {
      $(".llRow").each(function () {
        $(this).children().unwrap();
        $(this).children().css({ height: "", width: "100%" });
        $a = [];
      });
    }
    if ($(window).width() > 900) {
      for (var i = 0; i < $lis.length; i += 3) {
        $lis.slice(i, 3 + i).wrapAll("<div class='llRow'></div>");
        $lis.css({ height: "", width: "33.3333333%" });
        $a = [];
      }
    } else if ($(window).width() > 550) {
      var $lis2 = $(this).children("li");
      for (var i = 0; i < $lis2.length; i += 2) {
        $lis2.slice(i, 2 + i).wrapAll("<div class='llRow'></div>");
        $lis2.css({ height: "", width: "50%" });
        $a = [];
      }
    } else {
      var $lis3 = $(this).children("li");
      $lis3.css({ height: "", width: "" });
      //alert('less 50000');
    }

    $(".llRow").each(function () {
      var $this = $(this);
      $this.children().each(function () {
        $a.push($(this).outerHeight());
      });
      $this.children().outerHeight(Math.max.apply(Math, $a));
    });
  });
}; //loactionListHeight

$(window).load(function () {
  if ($(".loactionList").length > 0) {
    var aa = function () {
      $(".llRow").each(function () {
        var $this = $(this);
        var $a = [];
        $this.children().each(function () {
          $a.push($(this).outerHeight());
        });
        $this.children().outerHeight(Math.max.apply(Math, $a));
      });
    };

    loactionListHeight();

    $(window).on("resize", function () {
      loactionListHeight();
      //aa();
    });
  } // loactionList

  /*------custom pop start ------*/

  var customPopClose = function (a) {
    var leftPos = a.position().left + a.outerWidth() - 35;
    var topPos = a.position().top - 35;
    a.parent(".custom_popwrap")
      .find(".popClose")
      .css({ left: leftPos + "px", top: topPos + "px", opacity: "1" });
  };

  if ($(document).find(".custom_popwrap").length > 0) {
    $(document)
      .find(".custom_popwrap")
      .each(function (i) {
        var s = $(this).find(".popupInfo");
        $(this).prepend(
          "<button type='button' id='custompopClose" +
            i +
            "' class='popClose' style='opacity:0'>close</button>"
        );
        s.css({
          "max-width": s.attr("data-maxWidth") + "px",
          width: "90%",
          "max-height": "80%",
        });
        setTimeout(function () {
          customPopClose(s);
        }, 1000);
      });
  }

  $(window).resize(function () {
    if ($("#custompopClose").length > 0) {
      var v1 = $(document).find("#custompopClose"),
        v2 = v1.parent().find(".popupInfo"),
        v3 = v2.position().left + v2.outerWidth() - 35,
        v4 = v2.position().top - 35;
      v1.css({ left: v3 + "px", top: v4 + "px", opacity: "1" });
    }
  });

  $(document).on("click", ".openInfoPop", function () {
    var s = $($(this).attr("href")).find(".popupInfo");
    $($(this).attr("href")).fadeIn(function () {
      customPopClose(s);
    });
    return false;
  });

  $(document).on("click", ".popClose", function () {
    $(this).parents(".custom_popwrap").fadeOut();
  });

  /*------custom pop end ------*/

  $(document).on("change", ".selectMenu", function () {
    $(this)
      .prev("b")
      .text($(this).find("option:selected").text())
      .css("color", "#000");
    if ($(this).val() == "Select") {
      $(this).prev("b").text("");
    }
  });

  $(".selectMenu").each(function () {
    if ($(this).val() != "" && $(this).val() != "Select") {
      $(this).parents(".selectMenuHolder").addClass("focus");
      $(this)
        .prev("b")
        .text($(this).find("option:selected").text())
        .css("color", "#000");
    }
  });

  $(document).on("focus", ".selectMenu", function () {
    //alert(10);
    $(this).parents(".selectMenuHolder").addClass("focus");
  });

  $(document).on("blur", ".selectMenu", function () {
    if ($(this).val() == "Select") {
      $(this).parents(".selectMenuHolder").removeClass("focus");
      $(this).prev("b").text("");
    }
  });
}); // end load function

$(window).on("load", function () {
  var manageDataPos = function () {
    $(".addAnimate").each(function () {
      $(this).attr("data-pos", $(this).offset().top);
      var makeClass = $(this).attr("data-class"),
        makeClass2 = makeClass.split("In");
      //if($(this).attr('data-pos')>$(window).height()){
      $(this).addClass(makeClass2[0] + "Out" + makeClass2[1]);
      //}
    });
  };

  manageDataPos();

  $(".addAnimate").each(function () {
    if ($(this).attr("data-pos") < $(window).height() + 50) {
      $(this).addClass($(this).attr("data-class"));
    }
  });

  $(window).on("scroll", function () {
    $(".addAnimate").each(function () {
      if (
        $(window).scrollTop() >
        $(this).attr("data-pos") - $(window).height() + 50
      ) {
        $(this).addClass($(this).attr("data-class"));
      } else {
        $(this).removeClass($(this).attr("data-class"));
      }
    });
  });

  $(window).on("resize", function () {
    manageDataPos();
  });
});
