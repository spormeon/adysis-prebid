
<div class="panel widget panel-bd-top vd_todo-widget light-widget">
  <div class="panel-heading no-title ">
    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
  </div>
  <div class="panel-body">
    <h2 class="mgbt-xs-20"> <span class="append-icon"> <i class="fa fa-check-circle-o vd_green"></i> </span> Todo List</h2>
    <div class="input-group mgbt-xs-15">
      <input type="text">
      <div class="input-group-btn">
        <button data-toggle="dropdown" class="btn dropdown-toggle vd_bg-green vd_white" type="button"><i class="fa fa-plus fa-fw"></i></button>
      </div>
      <!-- /btn-group --> 
    </div>
    <div class="controls">
      <div class="vd_checkbox checkbox-done">
        <input type="checkbox" id="checkbox-1" value="1">
        <label for="checkbox-1"> Basketball time </label>
      </div>
      <div class="vd_checkbox  checkbox-done">
        <input type="checkbox" id="checkbox-2" value="1">
        <label for="checkbox-2"> Design Logo for customer</label>
      </div>
      <div class="vd_checkbox  checkbox-done">
        <input type="checkbox" id="checkbox-3" value="1">
        <label for="checkbox-3"> Cooking delicious meal</label>
      </div>
      <div class="vd_checkbox  checkbox-done">
        <input type="checkbox" id="checkbox-4" value="1">
        <label for="checkbox-4"> Sleeping with my pillow</label>
      </div>
      <div class="row mgtp-15 mgbt-xs-0">
        <div class="col-xs-6"> <a role="button" href="#" class="btn vd_btn vd_bg-green">Save</a> </div>
        <div class="col-xs-6 text-right"> <a role="button" href="#" class="btn vd_btn vd_bg-grey"><i class="icon-trash"></i></a> </div>
      </div>
    </div>
  </div>
</div>
<!-- Panel Widget --> 