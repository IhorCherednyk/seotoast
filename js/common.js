$(function() {

	$(window).resize(function() {
		$(".who-item-wrap").equalHeights();
	});

	$(".who-item-wrap").equalHeights();

	$(".toggle_mnu").on("click", function() {
		$(".sandwich").toggleClass("active");
		return false;
	});

	$(".toggle_mnu").on("click", function() {
		if ($(".main-nav").is(":visible")) {
			$(".main-nav").fadeOut(600);
			$(".main-nav li").removeClass("fadeInDown animated")
		} else {
			$(".main-nav").fadeIn(600);
			$(".main-nav li").addClass("fadeInDown animated")
		};
		return false;
	});



	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
