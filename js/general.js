$(document).ready(function() {
	submitForm();
});

// Submit the form if validation passed
function submitForm() {
	$('#my-form').submit(function() {
		if(validateForm()) {
			// Validation passed, POST the data
			var form = $(this).serialize();
			$('#ajax-message').empty();
			
			$.ajax({
				url: "form.php",
				type: "post",
				data: form,
				success: function() {
					$('#ajax-message').show().html("Your form has been submitted successfully.");
				},
				error: function(msg) {
					console.log(msg);
					$('#ajax-message').show().html("An error occurred, please try again.");
				}
			});
		} else {
			setTimeout(function() { $('html,body').animate({ scrollTop: $('#validation-message').offset().top }); },750);
			$('#validation-message').show();
		}
		
		return false;
	});
}