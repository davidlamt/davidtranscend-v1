$(document).ready(function() {
    // Performing smooth scrolling
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });  
    
    // Event handler for the accordion
    var action  = "click",
    speed   = 500;
    
    $("li.accordion-title").on(action, function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(".q").removeClass("active");
            $(this).addClass("active");               
        }        

        $(".accordion-title").each(function() {
            if ($(this).hasClass("active")) {
                $(this).children("i").css({
                    transform: "rotate(90deg)",
                    transition: "transform 0.5s"                 
                });            
                $(this).next().slideDown(speed);
            } else {
                $(this).children("i").css({
                    transform: "rotate(0deg)",
                    transition: "transform 0.5s"                  
                });            
                $(this).next().slideUp(speed);
            }                
        });                           
    });    
    
    // Creating the sticky navigation 
    $('#section-introduction').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav animated slideInDown');
            $("nav p").css({ display: "block" });
        } else {
            $('nav').addClass('sticky-nav animated slideOutUp');
            $("nav p").css({ display: "none" });
            setTimeout(fadeNavOut, 1000)
        }
        }, {
        offset: '60px;'
    });
    
    // Creating the mobile navigation
    $(".nav-icon").on("click", function() {
        var nav = $(".main-nav");
        var icon = $(".nav-icon");
        
        nav.slideToggle(200);
        
        if(icon.hasClass("fa-bars")) {
            $(icon).removeClass("fa-bars").addClass("fa-times");
        } else {
            $(icon).removeClass("fa-times").addClass("fa-bars");
        }
    });
    
    // Initializing WOW for animation
    new WOW().init();
    
    /* ---------------------------------------- */
    /* FUNCTION DEFINITIONS */
    /* ---------------------------------------- */
    
    function fadeNavOut() {
        $('nav').removeClass('sticky-nav animated slideInDown slideOutUp')
    }
})