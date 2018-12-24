$(function () {

  var openMenu = function() {
	  $(this).toggleClass("nav__mobile-menu-button_type_close");
    $(this).toggleClass("nav__mobile-menu-button_type_open");
    $(".catalog, .order, .search, .cart").toggleClass("nav__item_type_hidden");
    $(".catalog, .order, .search, .cart").toggleClass("nav__menu_type_open");

	};

	$(".nav__mobile-menu-button").click(openMenu);



  (function() {
      $(".modal__button_type_open").bind("click", function() {
          formModal.showModal();
      });

      $(".modal__button_type_close").bind("click", function() {
          formModal.close();
      });
  })();


/* отправка Email */
/*
  $(document).ready(function() {

  	$("#form").submit(function() {
  		$.ajax({
  			type: "POST",
  			url: "../mail.php",
  			data: $(this).serialize()
  		}).done(function() {
  			$(this).find("input").val("");
  			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
  			$("#form").trigger("reset");
  		});
  		return false;
  	});

  });
*/

  /*  Карусель отзывов  */

  var slide = $(".reviews__slide");
  var currentSlide = 0;

  function nextSlide() {
    goToSlide(currentSlide+1);
  }

  function previousSlide() {
    goToSlide(currentSlide-1);
  }

  function goToSlide(n) {
    slide[currentSlide].className = "reviews__slide";
    currentSlide = (n+slide.length)%slide.length;
    slide[currentSlide].className = " reviews__showing";
  }

  $(".right").click(nextSlide);
  $(".left").click(previousSlide);

});
