<h2>Setupdraw jQuery Form Validation</h2>
Simple form validation for checking input is present.<br />
Works nicely with an ajax form submission call.

<h2>Important source files</h2>
validation.js 	- jQuery and JavaScript

<h2>Usage</h2>

1. Add validation.js after jQuery in the document head or copy the function into your js code.

2. Add placeholders to your inputs and textareas. Selects need a blank option at the start of the dropdown.

3. Function checks elements on form submit and returns true or false dependent on validation state. 

4. Use either an ajax call as demonstrated in the general.js here or just:

```
function submitForm() {
	$('#my-form').submit(function() {
		return validateForm();
	});
```
for a standard form submission.
