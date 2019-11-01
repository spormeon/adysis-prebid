<div class="vd_panel-menu hidden-sm hidden-xs" data-intro="<strong>Expand Control</strong><br/>To expand content page horizontally, vertically, or Both. If you just need one button just simply remove the other button code." data-step=5  data-position="left">
  <?php if ($remove_navbar){?>
  <div data-action="remove-navbar" data-original-title="Remove Navigation Bar Toggle" data-toggle="tooltip" data-placement="bottom" class="remove-navbar-button menu"> <i class="fa fa-arrows-h"></i> </div>
  <?php } ?>
  <?php if ($remove_header){?>
  <div data-action="remove-header" data-original-title="Remove Top Menu Toggle" data-toggle="tooltip" data-placement="bottom" class="remove-header-button menu"> <i class="fa fa-arrows-v"></i> </div>
  <?php } ?>
  <?php if ($fullscreen){?>
  <div data-action="fullscreen" data-original-title="Remove Navigation Bar and Top Menu Toggle" data-toggle="tooltip" data-placement="bottom" class="fullscreen-button menu"> <i class="glyphicon glyphicon-fullscreen"></i> </div>
  <?php } ?>
  <?php if ($boxedtofull){?>
  <div data-action="boxedtofull" data-original-title="Change from boxed to full layout" data-toggle="tooltip" data-placement="bottom" class="boxedtofull-button menu"> <i class="fa fa-expand"></i> </div>
  <?php } ?>  
</div>
