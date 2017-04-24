$("#openMod").click(function () {
    if ($("#openMod").hasClass("s1")) {
        $(this).hide();
        $("#mod1").fadeIn();
        $("#save1").click(function () {
            $(".mod").fadeOut();
            $("#text1 span").css("display", "block");
            $("#text1 span").click(function () {
                $(this).hide();
                $("#openMod").show();
            })
        });


    }
});
$("#openMod2").click(function () {
    if ($("#openMod2").hasClass("s3")) {
        $(this).hide();
        $("#mod2").fadeIn();
        $("#save2").click(function () {
            $(".mod").fadeOut();
            $("#text2 span").css("display", "block");
            $("#text2 span").click(function () {
                $(this).hide();
                $("#openMod2").show();
            })
        })
    }


});

$("#openMod3").click(function () {
    if ($("#openMod3").hasClass("s5")) {
        $(this).hide();
        $("#mod3").fadeIn();
        $("#save3").click(function () {
            $("#mod3").fadeOut();
            $("#text3 span").css("display", "block");
            $("#text3 span").click(function () {
                $(this).hide();
                $("#openMod3").show();
            })
        })
    }


});
