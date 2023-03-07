//main parsley validate function from the Demo
$(function () {
	$('#polling-form')
		.parsley()
		.on('field:validated', function () {
			var ok = $('.parsley-error').length === 0;
			$('.bs-callout-info').toggleClass('hidden', !ok);
			alert('debugging: field:validated running');
			$('.bs-callout-warning').toggleClass('hidden', ok);
		})
		.on('form:submit', function (e) {
			alert('form:submit');
			e.preventDefault();
			var $input = $(
				'<input type="button" value="debugging: Submit clicked" />'
			);
			$input.appendTo($('body'));
			var form = $(this);
			form.parsley().validate();
			if (form.parsley().isValid()) {
				alert('debugging: form valid');
			}
			return false; // Don't submit form for this demo
		});
});

// me adding a UK phone number regex - the regex itself is testing well on regexr
// this whole function doesn't seem to be working
window.Parsley.addValidator('phone', {
	validateString: function (inputNumber) {
		alert('inside phone regexr');
		const regex = new RegExp(
			'^(((+44s?d{4}|(?0d{4})?)s?d{3}s?d{3})|((+44s?d{3}|(?0d{3})?)s?d{3}s?d{4})|((+44s?d{2}|(?0d{2})?)s?d{4}s?d{4}))(s?#(d{4}|d{3}))?$'
		);
		let result = regex.test(inputNumber);
		console.log('inside phone regexr');
		console.log(regex, result);
		alert('result is ' + result);
		return false;
	},
	messages: {
		en: 'Numbers should begin with 0 or +44',
	},
});

alert('js file running');
