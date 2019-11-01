<script type="text/javascript">
$(document).ready(function() {
	"use strict";

        var form_register_2 = $('#forget-password-form');
        var error_register_2 = $('.alert-danger', form_register_2);
        var success_register_2 = $('.alert-success', form_register_2);
	
	var options = { 
		type: "POST",
		url:  $("#forget-password-form").attr('action'),
		dataType: "json",
		success: function(data) {
			if (data.response == "success") {
				setTimeout(function(){
					$('#submit-password .fa-spinner').remove()	;
					$('#submit-password').addClass('disabled');					
					success_register_2.fadeIn(500);
					error_register_2.fadeOut(500);
				},1500)
				
			} else if (data.response == "error") {
				$('#submit-password .fa-spinner').remove()	;
				$('#submit-password').removeClass('disabled');	
			
			} else if (data.response == "empty") {
					
			} else if (data.response == "unexpected") {
						
			}	
						
		},
		error: function() {

		}
	}; 

        form_register_2.validate({
            errorElement: 'div', //default input error message container
            errorClass: 'vd_red', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
				
                email: {
                    required: true,
                    email: true
                },				

				
            },
			
			errorPlacement: function(error, element) {
				if (element.parent().hasClass("vd_checkbox") || element.parent().hasClass("vd_radio")){
					element.parent().append(error);
				} else if (element.parent().hasClass("vd_input-wrapper")){
					error.insertAfter(element.parent());
				}else {
					error.insertAfter(element);
				}
			}, 
			
            invalidHandler: function (event, validator) { //display error alert on form submit              
                success_register_2.fadeOut(500);
                error_register_2.fadeIn(500);


            },

            highlight: function (element) { // hightlight error inputs
		
				$(element).addClass('vd_bd-red');
				$(element).parent().siblings('.help-inline').removeClass('help-inline hidden');
				if ($(element).parent().hasClass("vd_checkbox") || $(element).parent().hasClass("vd_radio")) {
					$(element).siblings('.help-inline').removeClass('help-inline hidden');
				}
				

            },

            unhighlight: function (element) { // revert the change dony by hightlight
                $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
            },

            success: function (label, element) {
                label
                    .addClass('valid').addClass('help-inline hidden') // mark the current input as valid and display OK icon
                	.closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
				$(element).removeClass('vd_bd-red');

					
            },

            submitHandler: function (form) {
				$(form).find('#submit-password').addClass('disabled').prepend('<i class="fa fa-spinner fa-spin mgr-10"></i>')/*.addClass('disabled').attr('disabled')*/;					
				$(form).ajaxSubmit(options);			
            }
        });	


	
	
});
</script>