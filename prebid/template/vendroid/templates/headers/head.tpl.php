<head>
    <meta charset="utf-8" />
    <title><?php if (isset($title)) echo $title; ?> | <?php if (isset($website_name)) echo $website_name; ?></title>
    <meta name="keywords" content="<?php if (isset($keywords)) echo $keywords; ?>" />
    <meta name="description" content="<?php if (isset($description)) echo $description; ?>">
    <meta name="author" content="<?php if (isset($author)) echo $author; ?>">
    
    <!-- Set the viewport width to device width for mobile -->
    <?php if ($responsive){?><meta name="viewport" content="width=device-width, initial-scale=1.0"><?php }?>    
    
    
    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="img/ico/apple-touch-icon-57-precomposed.png">
    <link rel="shortcut icon" href="img/ico/favicon.png">
    
    
    <!-- CSS -->
       
    <!-- Bootstrap & FontAwesome & Entypo CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!--[if IE 7]><link type="text/css" rel="stylesheet" href="css/font-awesome-ie7.min.css"><![endif]-->
    <link href="css/font-entypo.css" rel="stylesheet" type="text/css">    

    <!-- Fonts CSS -->
    <link href="css/fonts.css"  rel="stylesheet" type="text/css">
               
    <!-- Plugin CSS -->
    <link href="plugins/jquery-ui/jquery-ui.custom.min.css" rel="stylesheet" type="text/css">    
    <link href="plugins/prettyPhoto-plugin/css/prettyPhoto.css" rel="stylesheet" type="text/css">
    <link href="plugins/isotope/css/isotope.css" rel="stylesheet" type="text/css">
    <link href="plugins/pnotify/css/jquery.pnotify.css" media="screen" rel="stylesheet" type="text/css">    
	<link href="plugins/google-code-prettify/prettify.css" rel="stylesheet" type="text/css"> 
   
         
    <link href="plugins/mCustomScrollbar/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css">
    <link href="plugins/tagsInput/jquery.tagsinput.css" rel="stylesheet" type="text/css">
    <link href="plugins/bootstrap-switch/bootstrap-switch.css" rel="stylesheet" type="text/css">    
    <link href="plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css">    
    <link href="plugins/bootstrap-timepicker/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
    <link href="plugins/colorpicker/css/colorpicker.css" rel="stylesheet" type="text/css">            

	<!-- Specific CSS -->
	<?php if (isset($specific_css)) { 
				foreach ($specific_css as $css) {
					echo '<link href="'.$css.'" rel="stylesheet" type="text/css">';
				}				
		   }
	?>
    
     
    <!-- Theme CSS -->
    <link href="css/theme.min.css" rel="stylesheet" type="text/css">
    <!--[if IE]> <link href="css/ie.css" rel="stylesheet" > <![endif]-->
    <link href="css/chrome.css" rel="stylesheet" type="text/chrome"> <!-- chrome only css -->    


        
    <!-- Responsive CSS -->
    <?php if ($responsive){?>
    	<link href="css/theme-responsive.min.css" rel="stylesheet" type="text/css"> 

	<?php } else { ?>
    	<link href="css/non-responsive.css" rel="stylesheet" type="text/css">  
        <style>
		.middle-layout .container, .boxed-layout .container{
			width: <?php echo $width_non_responsive.'px'?> !important;
			max-width: <?php echo $width_non_responsive.'px'?> !important;					
		} 
		</style>
	<?php } ?>  
 
 
    <!-- for specific page in style css -->
    <?php if (isset($page_css)) { ?>
		<style>
	<?php echo $page_css ?>	
		</style>
	<?php }?>
    
    <!-- for specific page responsive in style css -->
    <?php if (($responsive) && (isset($page_responsive_css)) ){ ?>
		<style>
	<?php echo $page_responsive_css ?>	
		</style>
	<?php }?>    
    
    <!-- Custom CSS -->
    <link href="custom/custom.css" rel="stylesheet" type="text/css">



    <!-- Head SCRIPTS -->
    <script type="text/javascript" src="js/modernizr.js"></script> 
    <script type="text/javascript" src="js/mobile-detect.min.js"></script> 
    <script type="text/javascript" src="js/mobile-detect-modernizr.js"></script> 
 
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script type="text/javascript" src="js/html5shiv.js"></script>
      <script type="text/javascript" src="js/respond.min.js"></script>     
    <![endif]-->
    
</head>    

<body id="<?php if (isset($page)) echo $page; ?>" class="<?php  if (isset($layout)) echo $layout; ?> <?php  if (isset($navbar_left_config)) { 
	       if ( $navbar_left_config == 0) { echo 'no-nav-left'; }
		   else 
		   if ( $navbar_left_config == 2) { echo 'nav-left-hide nav-left-start-hide'; } 
       }     ?> <?php  if (isset($navbar_right_config)) { 
	       if ( $navbar_right_config == 0) { echo 'no-nav-right'; }
		   else 
		   if ( $navbar_right_config == 2) { echo 'nav-right-hide nav-right-start-hide'; } 
       }     ?> <?php  if ($navbar_left_fixed) echo 'nav-left-fixed'; if ($navbar_right_fixed) echo 'nav-right-fixed';  ?> <?php  if ($navbar_top_fixed) echo 'nav-top-fixed'; ?> <?php  if (isset($background)) echo $background; ?> <?php  if (isset($navbar_left_start_width)) echo $navbar_left_start_width; ?> <?php  if (isset($navbar_right_start_width)) echo $navbar_right_start_width; ?> <?php  if ($enlarge_left_to_medium) echo 'enlarge-left-to-medium' ?> <?php  if ($enlarge_right_to_medium) echo 'enlarge-right-to-medium' ?> <?php if ($responsive) echo 'responsive'; else echo 'no-responsive'; ?> <?php  if (isset($body_extra_class)) echo $body_extra_class; ?>   clearfix" data-active="<?php if (isset($page)) echo $page; ?> "  data-smooth-scrolling="1">     
<div class="vd_body">