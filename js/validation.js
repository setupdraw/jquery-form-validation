// Form validation
function validateForm() {
	// Check inputs, selects and textareas have data if a placeholder exists
	$('#validation-message').hide();
	var i = true;
	
	// Inputs and textareas
	$('#my-form').find('input[type=text], input[type=email], textarea').each(function() {
		$(this).removeAttr('style');
		var p = $(this).attr('placeholder'); 	// find forms elements with a placeholder
		var r = $(this).attr('readonly');		// ignore readonly elements
		var v = $(this).val();					// get the current input value
		
		if(!r && p && v == '' && $(this).is(':visible')) {
			// if not readonly and the value is nothing and the element is visible
			// then highlight that element and return false
			$(this).css('border','2px solid #FF3366');
			i = false;
		} else {
			// otherwise hide the require icon and move on
			$(this).prev('label').find('.required').hide();
		}
	});
	
	// Something slightly different for the select elements
	$('#my-form').find('select').each(function() {
		var o = $(this).find('option:selected').val();
		var s = (o == '' || o == 'none') ? true : false;
		
		if(s && $(this).is(':visible')) {
			$(this).css('border','2px solid #FF3366');
			i = false;
		} else {
			$(this).prev('label').find('.required').hide();
		}
	});
		
	return i;
}