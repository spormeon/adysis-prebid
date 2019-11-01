<script type="text/javascript" src='plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js'></script>


<script type="text/javascript">
$(document).ready(function() {
	
  "use strict";
  	
  var tablet_width = 751;

  var top_value;
  var bottom_value;
  
  setValue();
  resizePanel();
  setAffix();  

  $(window).on("resize", function(){
		if ($(window).width()>tablet_width){	  
			resizePanel();	 
			setValue();	
		} else{
			$('.sidebar-affix .panel').removeAttr('style');
		}


  });		  

 

  function setAffix(){
	  $('.sidebar-affix').before('<style>.affix{top:'+top_value+'px; position:fixed !important;} .affix-bottom{position:absolute; }</style>');
	  $('.sidebar-affix .panel').affix({
		offset: {
		  top: top_value,
		  bottom: bottom_value
		}
	  })
  }
  
  function resizePanel(){
	  $('.sidebar-affix .panel').css('width',($('.vd_content-section').innerWidth()-114)/3+'px');
	  if ($(window).width()<=tablet_width)	{
			$('.sidebar-affix .panel').removeAttr('style');		  
	  }
  }
  function setValue(){
	  top_value = $('#header').outerHeight() + $('.vd_content .vd_head-section').height() + $('.vd_content .vd_title-section').height() - 39;
	  bottom_value = $('#footer').outerHeight() + 61 ;		  
  } 
  function clearAffix(){
	  $('.sidebar-affix .panel').removeClass('affix');
	  $('.sidebar-affix .panel').removeClass('affix-top');
	  $('.sidebar-affix .panel').removeClass('affix-bottom');
	  $('.sidebar-affix .panel').removeAttr('style');	  	  	  
  }
  
  // Bootstrap Wizard
	$('#wizard-1').bootstrapWizard({
		'tabClass': 'nav nav-pills nav-justified',
		'nextSelector': '.wizard .next',
		'previousSelector': '.wizard .prev',
		'onTabShow' :  function(tab, navigation, index){
			$('#wizard-1 .finish').hide();
			$('#wizard-1 .next').show();
			if ($('#wizard-1 .nav li:last-child').hasClass('active')){
				$('#wizard-1 .next').hide();
				$('#wizard-1 .finish').show();
			}
			var $total = navigation.find('li').length;
			var $current = index+1;
			var $percent = ($current/$total) * 100;
			$('#wizard-1').find('.progress-bar').css({width:$percent+'%'});			
		},
		'onTabClick': function(tab, navigation, index) {
			return false;		
		},
		'onNext': function(){
			scrollTo('#wizard-1',-100);
		},
		'onPrevious': function(){
			scrollTo('#wizard-1',-100);
		}		
	});
	$('#wizard-1 .finish').click(function(){
		alert('You are finished !');
	});
  
});
</script>