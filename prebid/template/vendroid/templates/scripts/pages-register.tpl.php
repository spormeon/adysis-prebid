<script type="text/javascript">
$(document).ready(function() {
	
	"use strict";
	
	var form_register_2 = $('#register-form');
	var error_register_2 = $('.alert-danger', form_register_2);
	var success_register_2 = $('.alert-success', form_register_2);
	var warning_register_2 = $('.alert-warning', form_register_2);
		
			
	var options = { 
		type: "POST",
		url:  $("#register-form").attr('action'),
		dataType: "json",
		success: function(data) {
			if (data.response == "success") {		
/*				$("#register-form").fadeOut(500, function(){
					$('#register-passerror').fadeOut(500);					
					$('#register-success').fadeIn(500);
				});	*/
				
				setTimeout(function(){
					$('#submit-register .fa-spinner').remove()	;
					$('#submit-register').addClass('disabled');					
					success_register_2.fadeIn(500);
					error_register_2.fadeOut(500);
					warning_register_2.fadeOut(500);							
				},1500);
												
			} else if (data.response == "passerror") {	
				setTimeout(function(){
					error_register_2.fadeOut(500);			
					warning_register_2.fadeIn(500);	
					$('#submit-register .fa-spinner').remove()	;
					form_register_2.find('#submit-register').removeClass('disabled');	
					scrollTo(form_register_2,-100);					
				},1500);									
					
				
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
                firstname: {
                    minlength: 3,
                    required: true
                },
                lastname: {
                    minlength: 3,
                    required: true
                },				
                email: {
                    required: true,
                    email: true
                },
                website: {
                    required: true,
                    url: true
                },
                company: {
                    minlength: 3,					
                    required: true
                },
                country: {					
                    required: true
                },				
                phone: {					
                    required: true
                },					
                password: {
                    required: true
                },
                confirmpass: {
                    required: true
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
                success_register_2.hide();
                error_register_2.show();
				scrollTo(form_register_2,-100);

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
				$(form).find('#submit-register').addClass('disabled').prepend('<i class="fa fa-spinner fa-spin mgr-10"></i>')/*.addClass('disabled').attr('disabled')*/;					
				$(form).ajaxSubmit(options);
            }
        });		

	
	
});
</script>