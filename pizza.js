/*(function() {
    var documentEl = $(document);
    var parallaxBg = $('section.parallax-bg');

    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop;
        parallaxBg.css('background-position', '0 '+ -currScrollPos/4 + 'px');

    })

    var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));              
            // Put together the final background position
            var coords = '50% '+ yPos + 'px';
           // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
})();*/

$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var documentEl = $(document);
        var parallaxBg = $('section.parallax-bg');
        documentEl.on('scroll', function() {
            var currScrollPos = documentEl.scrollTop;
            parallaxBg.css('background-position', '0 '+ -currScrollPos/4 + 'px');
        })   
    });   
});

/*$(document).ready(function(){

    var imagesrc = 'pics/string-pic.jpg';

    var probeimage = $('<img src="'+ imagesrc +'" />');
    probeimage.load(
        function() {
            var imagewidth = this.width;

            /* imgcount - amount of images we need to rotate. */
            /* instead of (+2) we could use (+1 + (screen.width % imagewidth)), but that's too complex */
            /* so, one  will be hiding in the left side, another would cover the empty space in the right 
            var imgcount = ((screen.width - (screen.width % imagewidth)) / imagewidth) + 2;
            var contwidth = imgcount * imagewidth;

            /* since #cont is absolutely positioned, the #contrap's height would be 0. Let's set the height 
            $('#slidewrap').css({'height':this.height});
            $('#slideshow').css({'width':contwidth});

            $('#slideshowt').append(probeimage);
            /* -1 because we have probeimage 
            for (i = 0; i < imgcount - 1; i++) {
                $('#slideshow').append($('<img src="'+ imagesrc +'" />'));
            }

            function eternalmotion() {
                $('#slideshow IMG').first().animate({ marginLeft: -imagewidth }, 4000, 'linear',
                function() {
                    $('#slideshow IMG:first').css({'marginLeft': '0'}).appendTo('#slideshow');
                    eternalmotion();
                }
                );
            }

            eternalmotion();
        }
    ); //probeimage.load

});*/

$(document).ready(function(){
    var time = 10000;
    var index = 0;
    var container = $("#slideshow");
    var childrenCount = $(".section").length;

    function slideToNext() {
        container.css({
            marginLeft: -125 + "%"
        });
        
        
    }
      function moveItems() {
      index = (index + 1);
      if (index > 1) {
$("#slideshow").append($("#slideshow>img:first"));
      }
      
  }
    /*function moveItems() {
        $($(".section")[1]).detach();
        console.log($(".section")[1])
        $("#slideshow").append($(".section")[2]);
        console.log(($(".section")[2]))
    }*/

  /*function moveItems() {
        $("#slideshow").prepend($(".section")[0]);;
        console.log($(".section")[0])
        $("#slideshow").append($(".section")[0]);
        console.log(($(".section")[0]))
  }  */


    var pt = window.setInterval(function() {
        slideToNext();moveItems();
    }, time);
    

});

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        
            $('#return-to-top').fadeIn(200);    
        } else {
            $('#return-to-top').fadeOut(200);   
        }
    });
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                       
        }, 500);
    });
});
