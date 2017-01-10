$("#ssc-box img").addClass("hidden");
$("img.icon").addClass("hidden");
$("img.icon2").addClass("hidden");
$(".about").addClass("hidden");
$(document).ready(function () {
    $("#intro").delay(1300).queue(function () {
        $(this).addClass("tada")
    });
    $("a.ciao_link").delay(3e3).queue(function () {
        $(this).addClass("flash")
    });
    $("#intro").hover(function () {
        $(this).filter(":not(:animated)").addClass("tada")
    }, function () {
        $(this).removeClass("tada")
    });
    $("#section-3").waypoint(function (e, t) {
        $("#ssc-box img").removeClass("hidden").addClass("rotateInDownLeft")
    });
    $("#section-4").waypoint(function (e, t) {
        $("img.icon").delay(100).queue(function () {
            $(this).removeClass("hidden").addClass("bounceInDown")
        })
    });

    $("#section-2").waypoint(function (e, t) {
        $(".about").delay(100).queue(function () {
            $(this).removeClass("hidden").addClass("fadeIn")
        })
    });
    $("#section-6").waypoint(function (e, t) {
        $("img.icon2").delay(100).queue(function () {
            $(this).removeClass("hidden").addClass("bounceInDown")
        })
    });
    var e = $("#directions-box").outerHeight();
    $("#directions-wrap").append( /*'<div id="directions-angle"></div>'*/ );
    $("#directions-angle").css({
        "border-top-width": e
    });
    var e = $("#ssc-box").outerHeight();
    $("#ssc-wrap").append('<div id="ssc-angle"></div>');
    $("#ssc-angle").css({
        "border-top-width": e
    })
});
$(function () {
    var e = $("#intro");
    e.waypoint({
        handler: function (t, n) {
            if (n == "down") {
                e.removeClass("tada")
            } else {
                e.addClass("tada").delay(500).queue(function () {
                    $(this).removeClass("tada")
                })
            }
        }
    })
});
$(function () {
    var e = $(".nav-container");
    var t = $("nav");
    var n = $(".logo-container");
    var r = $(".logo-container img");
    var i = 0;
    var s = 0;
    e.waypoint({
        handler: function (o, u) {
            if (u == "down") {
                e.css({
                    height: t.outerHeight()
                });
                t.stop().addClass("sticky").css("top", -t.outerHeight()).css({
                    top: i
                });
                n.stop().addClass("stuck");
                r.animate({
                    width: "200px"
                }, 300)
            } else {
                e.css({
                    height: "auto"
                });
                t.stop().removeClass("sticky").css("top", t.outerHeight() + s).css({
                    top: ""
                });
                n.stop().removeClass("stuck");
                r.animate({
                    width: "433px"
                }, 300)
            }
        },
        offset: function () {
            return -t.outerHeight() - s
        }
    });
    var o = $("section");
    var u = $("nav a, #intro a, nav select, a.ciao_link, a.top");
    o.waypoint({
        handler: function (e, t) {
            var n;
            n = $(this);
            if (t === "up") n = n.prev();
            var r = $('nav a[href="#' + n.attr("id") + '"]');
            u.removeClass("selected");
            r.addClass("selected")
        },
        offset: "25%"
    });
    u.click(function (e) {
        e.preventDefault();
        $.scrollTo($(this).attr("href"), {
            duration: 500,
            offset: {
                left: 0,
                top: 0 * $(window).height()
            }
        })
    })
})