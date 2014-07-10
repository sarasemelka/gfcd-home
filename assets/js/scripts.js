$(function(){

  labelFade = function() {
  
    var emailField = $('.form-newsletter input[type="text"]');
    var emailLabel = $('.form-newsletter label');
  
    $(emailField).bind('focus', function(){
      emailLabel.fadeOut();
    });

    $(emailField).bind('blur', function(){
      var emailFieldVal = $(this).val();
      if(emailFieldVal == '') {
        emailLabel.fadeIn();
      }
    });
    
  }
    
  scrollTo = function() {  
    
    $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      
      if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
      }
    });
  
  }
  

  menuToggle = function() {

    $('.mobile-menu-btn').click(function(){
      $('.main-nav ul, .admin-nav').toggleClass('show');
      $(this).toggleClass('active');
      return false;
    });

  }


  labelFade();
  scrollTo();
  menuToggle();
  
});