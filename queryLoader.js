var QueryLoader = {
    /*
     * QueryLoader		Preload your site before displaying it!
     * Author:			Gaya Kessler
     * Date:			23-09-09
     * URL:				http://www.gayadesign.com
     * Version:			1.0
     * 
     * A simple jQuery powered preloader to load every image on the page and in the CSS
     * before displaying the page to the user.
     */

    overlay: "",
    loadBar: "",
    preloader: "",
    fonts: "",
    font1: "",
    font2: "",
    font3: "",
    font4: "",
    items: new Array(),
    doneStatus: 0,
    doneNow: 0,
    doneAnimated: 0,
    borderProcent: 25,
    borderProcent2: 0,
    selectorPreload: "body",
    ieLoadFixTime: 0,
    ieTimeout: "",
    arrayLetter: "QWERTYUIOPLKJHGFDSAZXCVBNMQWERTYUIOPLKJHGFDSAZXCVBNM",
    letter: "",
    perc: 0,
    font: "",
    fontsList: ["RunishQuillMK", "Pegypta", "ZARATHUS"],
    tempSeconds: 0,
    opacity: 0,
    stack: [],


    init: function() {

        if (navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/) == "MSIE 6.0,6.0") {
            //break if IE6			
            return false;
        }
        if (QueryLoader.selectorPreload == "body") {
            QueryLoader.spawnLoader();
            QueryLoader.getImages(QueryLoader.selectorPreload);
            QueryLoader.createPreloading();
        } else {
            $(document).ready(function() {
                QueryLoader.spawnLoader();
                QueryLoader.getImages(QueryLoader.selectorPreload);
                QueryLoader.createPreloading();
            });
        }

        //help IE drown if it is trying to die :)
        // QueryLoader.ieTimeout = setTimeout("QueryLoader.ieLoadFix()", QueryLoader.ieLoadFixTime);

        QueryLoader.loop1();
    },
    loop1: function() {



        if (QueryLoader.doneStatus > QueryLoader.doneAnimated) {
            setTimeout(function() {
                QueryLoader.loop2();
            }, 200);
        }
        QueryLoader.doneAnimated++;
        QueryLoader.animateLoader();
    },
    loop2: function() {
        QueryLoader.imgCallback();

        QueryLoader.loop1();

    },


    imgCallback: function() {
        try {
            if (QueryLoader.doneStatus / 4 > QueryLoader.doneAnimated && QueryLoader.doneAnimated % 3 == 0) {
                setTimeout(function() { QueryLoader.changeF(1); }, (Math.random() * 100) + 200);
                setTimeout(function() { QueryLoader.changeF(2); }, (Math.random() * 100) + 200);
                setTimeout(function() { QueryLoader.changeF(3); }, (Math.random() * 100) + 200);
                setTimeout(function() { QueryLoader.changeF(4); }, (Math.random() * 100) + 200);

            } else if (QueryLoader.doneStatus / 2 > QueryLoader.doneAnimated && QueryLoader.doneAnimated % 3 == 0) {
                setTimeout(function() {
                    $(".font1").css("font-family", 'Bungee Hairline');
                    $(".font1").css("font-weight", 'bold');
                      $(".font1").css("opacity", '1');
                    $(".font1").text("A");

                }, (1000));


                setTimeout(function() { QueryLoader.changeF(2); }, (Math.random() * 100) + 200);
                setTimeout(function() { QueryLoader.changeF(3); }, (Math.random() * 100) + 200);
                setTimeout(function() { QueryLoader.changeF(4); }, (Math.random() * 100) + 200);

            } else if ((QueryLoader.doneStatus - (QueryLoader.doneStatus / 4)) > QueryLoader.doneAnimated && QueryLoader.doneAnimated % 3 == 0) {
                setTimeout(function() {
                    $(".font2").css("font-family", 'Bungee Hairline');
                    $(".font2").css("font-weight", 'bold');
                    $(".font2").css("opacity", '1');
                    $(".font2").text("S");
                }, (1000));
                setTimeout(function() { QueryLoader.changeF(3); }, (Math.random() * 100) + 200);
                setTimeout(function() { QueryLoader.changeF(4); }, (Math.random() * 100) + 200);

            } else if (QueryLoader.doneStatus > QueryLoader.doneAnimated && QueryLoader.doneAnimated % 3 == 0) {
                setTimeout(function() {
                    $(".font3").css("font-family", 'Bungee Hairline');
                    $(".font3").css("font-weight", 'bold');
                    $(".font3").css("opacity", '1');
                    $(".font3").text("R");
                }, (1000));

                setTimeout(function() { QueryLoader.changeF(4); }, (Math.random() * 100) + 200);
            } else if (QueryLoader.doneStatus <= QueryLoader.doneAnimated) {
                setTimeout(function() {
                    $(".font4").css("font-family", 'Bungee Hairline');
                    $(".font4").css("font-weight", 'bold');
                    $(".font4").css("opacity", '1');
                    $(".font4").text("P");
                }, (1000));
            }


        } catch (err) {
            console.log(err);
        }



    },

    getImages: function(selector) {

        var everything = $(selector).find("*:not(script)").each(function() {
             try{
            var url = "";

            if ($(this).css("background-image") != "none") {
                var url = $(this).css("background-image");
            } else if (typeof($(this).attr("src")) != "undefined") {
                var url = $(this).attr("src");
            } else if ($(this).attr("tagName").toLowerCase() == "img") {
                var url = $(this).attr("src");
            } else if ($(this).attr("tagName").toLowerCase() == "source") {
                var url = $(this).attr("src");
            } else if ($(this).attr("tagName").toLowerCase() == "source") {
                var url = $(this).attr("src");
            } else {
                url = "";
            }



            url = url.replace("url(\"", "");
            url = url.replace("url(", "");
            url = url.replace("\")", "");
            url = url.replace(")", "");

            if (url.length > 0) {
                QueryLoader.items.push(url);
            }

            }catch(err){}
        });
    },

    createPreloading: function() {
        QueryLoader.fonts = $("<div class=\"fonts\"></div>").appendTo(QueryLoader.overlay);

        $("<span class=\"font1\"></span>").appendTo(QueryLoader.fonts);
        QueryLoader.changeF(1);
        $("<span class=\"font2\"></span>").appendTo(QueryLoader.fonts);
        QueryLoader.changeF(2);
        $("<span class=\"font3\"></span>").appendTo(QueryLoader.fonts);
        QueryLoader.changeF(3);
        $("<span class=\"font4\"></span>").appendTo(QueryLoader.fonts);
        QueryLoader.changeF(4);


        QueryLoader.preloader = $("<div></div>").appendTo(QueryLoader.selectorPreload);


        $(QueryLoader.preloader).css({
            height: "0px",
            width: "0px",
            overflow: "hidden"
        });

        var length = QueryLoader.items.length;
        QueryLoader.doneStatus = length;

        for (var i = 0; i < length; i++) {
            var imgLoad = $("<img></img>");
            $(imgLoad).attr("src", QueryLoader.items[i]);
            $(imgLoad).unbind("load");
            $(imgLoad).bind("load", function() {
                QueryLoader.doneNow++;
            });
            $(imgLoad).bind("error", function() {
                QueryLoader.doneNow++;
            });


            $(imgLoad).appendTo($(QueryLoader.preloader));
        }
    },

    spawnLoader: function() {
        if (QueryLoader.selectorPreload == "body") {
            var height = $(window).height();
            var width = $(window).width();
            var position = "fixed";
        } else {
            var height = $(QueryLoader.selectorPreload).outerHeight();
            var width = $(QueryLoader.selectorPreload).outerWidth();
            var position = "absolute";
        }
        var left = $(QueryLoader.selectorPreload).offset()['left'];
        var top = $(QueryLoader.selectorPreload).offset()['top'];

        QueryLoader.overlay = $("<div></div>").appendTo($(QueryLoader.selectorPreload));
        $(QueryLoader.overlay).addClass("QOverlay");
        $(QueryLoader.overlay).css({
            position: position,
            top: top,
            left: left,
            width: width + "px",
            height: height + "px"
        });

        QueryLoader.loadBar = $("<div></div>").appendTo($(QueryLoader.overlay));
        $(QueryLoader.loadBar).addClass("QLoader");

        $(QueryLoader.loadBar).css({
            position: "relative",
            top: "60%",
            width: "0%"
        });
    },

    animateLoader: function() {

        var perc = (100 / QueryLoader.doneStatus) * QueryLoader.doneAnimated;
        if (perc > 99) {
            $(QueryLoader.loadBar).stop().animate({
                width: perc + "%"
            }, 1710, "linear", function() {
                $(QueryLoader.overlay).fadeOut(300);
                $(QueryLoader.preloader).remove();
            });

        } else {
            $(QueryLoader.loadBar).stop().animate({
                width: perc + "%"
            }, 1110, "linear", function() {});
        }
        // }
    },

    changeF: function(num) {

        letter = QueryLoader.arrayLetter.charAt(Math.random() * (QueryLoader.arrayLetter.length - 1));
        font = QueryLoader.fontsList[Math.round(Math.random() * (QueryLoader.fontsList.length - 1))];
        var classTO = ".font" + num;
        $(classTO).css("font-family", font);
        if (QueryLoader.opacity==1) {
        	QueryLoader.opacity=0;
        }else{
        	QueryLoader.opacity=1;
        }
        $(classTO).css("opacity", QueryLoader.opacity);
        // $(classTO).animate({text:letter},500);
        $(classTO).text(letter);

    }
}