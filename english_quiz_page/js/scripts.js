/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  


  

function moveToQuizPage(selectedSubject){
  console.log(selectedSubject)

  if (selectedSubject == 'english1'){
      console.log(selectedSubject)
      location.href = 'english1.html'
  }
}

function moveToMainPage(){
  location.href = "../index.html"
}



function showResult(results){

  var correctCount = 0
  for (var i in results){

      if (i == "length"){
          break
      }

      results[i].readOnly = true
      if (i==0){

          if (results[i].value=="사과"){
              results[i].style.border = "2px solid #008000"
              correctCount++
              console.log("정답")
          }
          else{
              results[i].style.border = "2px solid #ff0000"
              console.log("오답")
          }
      }
      else if (i==1){

          if (results[i].value=="바나나"){
              correctCount++
              results[i].style.border = "2px solid #008000"
              console.log("정답")
          }
          else{
              results[i].style.border = "2px solid #ff0000"
              console.log("오답")
          }

      }
      else if (i==2){

          if (results[i].value=="병신"){
              correctCount++
              results[i].style.border = "2px solid #008000"
              console.log("정답")
          }
          else{
              results[i].style.border = "2px solid #ff0000"
              console.log("오답")
          }

      }
  }


  var answers = document.querySelectorAll('.answer')

  for (var i in answers){

      if (i == "length"){
          break
      }

      answers[i].style.display = "block"
      
  }

  document.querySelector(".otherButtons").style.display = "block"
  document.querySelector(".buttonDefault").style.display = "none"

  document.querySelector(".result").style.display = "block"
  document.querySelector(".result").innerHTML = `정답수 : ${correctCount}/3`;


}