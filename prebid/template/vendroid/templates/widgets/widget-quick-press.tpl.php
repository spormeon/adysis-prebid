<div class="panel vd_quick-press-widget widget">

    <div class="panel-heading vd_bg-grey">
        <h3 class="panel-title">
			<span class="menu-icon">
            	<i class="fa fa-pencil"></i>
            </span>        
	        Quick Press        
        </h3>
        <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?>              
    </div>
    <div class="panel-body">
		<form role="form" action="#" class="form-horizontal">    
			<div class="form-group">
              <label class="col-sm-2 control-label">Title</label>
              <div class="col-sm-10 controls">
                <input type="text" placeholder="small">
              </div>
            </div> 
             <div class="form-group">
              	  <label class="col-sm-2 control-label">Body</label>              
                  <div class="col-sm-10 controls">                                    
                         <textarea name="editor1" data-rel="ckeditor" rows="3" ></textarea>                                                
                  </div>                                 
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">Category</label>
              <div class="col-sm-10 controls">
                    <select class="width-40">
                      <option>Technology</option>
                      <option>Media</option>
                      <option>Advertising</option>
                      <option>News</option>
                      <option>Hobby</option>
                    </select>
              </div>
            </div>              
            <div class="form-group">
              <label class="col-sm-2 control-label">Tags</label>
              <div class="col-sm-10 controls">
              	<input  type="text" class="tags" data-rel="tags-input" value="foo,bar,baz,roffle" />

              </div>
            </div> 
            <div class="form-group">
              <div class="col-sm-2"></div>
			  <div class="col-sm-7 controls">
                  <button type="submit" class="btn vd_btn vd_bg-green vd_white"><i class="icon-ok"></i> Publish</button>
				  <button type="submit" class="btn vd_btn vd_bg-yellow vd_white"><i class="icon-ok"></i> Save Draft</button>                  
                  <button type="button" class="btn vd_btn vd_black">Reset</button>
              </div>
            </div>               
          
                                      
        </form>     
    </div>
</div> <!-- Panel Widget -->       