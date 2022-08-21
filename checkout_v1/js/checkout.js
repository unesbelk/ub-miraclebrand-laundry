///////// Phone Intl ////////////////
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
	$(".skeleton-load").fadeOut();
	const shipInput = document.getElementById("ship_field_intl");
	const billInput = document.getElementById("billing_field_intl");
	const shipPhoneField = window.intlTelInput(shipInput, {
		utilsScript: "js/utils.js",
		initialCountry: window.checkout.cart.shippingZone
	});
	const billPhoneField = window.intlTelInput(billInput, {
		utilsScript: "/js/utils.js",
		initialCountry: window.checkout.cart.shippingZone
	});
	shipInput.addEventListener("change", (e) => {
		console.log("Setting shipping phone");
		document.getElementById("shipping_phone").value = shipPhoneField.getNumber();
	});
	billInput.addEventListener("change", (e) => {
		console.log("Setting billing phone");
		document.getElementById("billing_phone").value = billPhoneField.getNumber();
	});
	

});




///////// E-Mail Pristine ////////////////
$("input[type='email']").keypress(function(e) {
	console.log("keypress");
	$(this).parents(".form-group").find(".pristine-error").addClass("hide");
});

$("input[type='email']").focusout(function(e) {
	console.log("focusout");
	$(this).parents(".form-group").find(".pristine-error").removeClass("hide");
});


///////// Show Paypal Form ////////////////
$("input[name='combo_mode']").change(function(e) {
	console.log($(this).val());

	if ($(this).val() == "paypal") {
		$(".cc-form").hide();
		$(".paypal-form").slideDown();
	}
	else {
		$(".paypal-form").hide();
		$(".cc-form").slideDown();
	}
});


$(".checkout-submit-combo").click(function(e) {
	setTimeout(function() {
		// console.log($(".checkout-combo-form .checkout-invalid-field").length);
		// if ($(".checkout-combo-form .checkout-invalid-field").length > 0) {
		// 	var new_position = $(".checkout-combo-form .checkout-invalid-field").offset();
		// 	$('html, body').stop().animate({ scrollTop: new_position.top - 15 }, 200);
		// }
		// else {
		// 		$(".checkout-submit-combo").addClass("submitting");
		// 		$("#overlay").css("opacity",0.50);
		// 	$(document).on("checkout_failed", (e)=> {
		// 		$(".checkout-submit-combo").removeClass("submitting");
		// 		$("#overlay").css("opacity",1);

		// 	});
			
		// }
	}, 100);
});





jQuery(document).ready(function($) {
  if ($(window).width() >= 768) {
    $(".discount-mobile").remove();
  }
  else {
    $(".discount-desktop").remove();
  }


	$('.checkout-discount-value').on('DOMSubtreeModified',function(){
		//console.log("TTT");
		//console.log(checkoutData.cart.localCart.state.discountTotal);
		//console.log($(this).text());

		if (checkoutData.cart.localCart.state.discountTotal > 0) {
			$(".discount-success").removeClass("es_hide");
			$(".discount-code-holder-desktop").addClass("es_hide");
			$(".discount-code-holder-mobile").addClass("es_hide");
			$(".bar-discount-icon").addClass("es_hide");

		}
		else {
			$(".discount-success").addClass("es_hide");
		}
	});


});




$(document).ready(function() {
	if($("#countdown").length > 0) {
	  var counter = $('#countdown').html().split(':')[0]*60;

	  setInterval(function() {
	    counter--;

	   if(counter >= 0) {
	        var mins = Math.floor(counter / 60) % 60;
	        var secs = counter % 60;

	        $('#countdown').html(("0"+mins).slice(-2)+':'+("0"+secs).slice(-2));
	   } else {
	     $('#countdown').html('00:00');

	     $('#countdown').parent().parent().fadeOut('fast');

	     clearInterval(counter);
	   }
	  },1000);
	}
});


