$(function(){

  labelFade = function() {
  
    var emailField = $('.form-newsletter #email');
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

	newsletterValidation = function() {
	
  	$('form').submit(function(e) {
  		var formEmail = $('#email');
  		
  		$(formEmail).each(function() {
		    iValue = $(this).val();
    		if(iValue == '') {
          $(this).parent().addClass('error');
      		e.preventDefault();
    		}
  		});
  	});
  	
  	$('input[type="email"]').focus(function() {
  	   if ($(this).hasClass('error')) {
  	       $(this).keyup(function() {
  	           $(this).removeClass('error');
  	       });
  	   }
  	});
  }

  labelFade();
  scrollTo();
  menuToggle();
  newsletterValidation();
  
});