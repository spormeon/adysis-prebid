<script type="text/javascript" src="plugins/dataTables/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="plugins/dataTables/dataTables.bootstrap.js"></script>
<script type="text/javascript">
$(document).ready(function() {
		"use strict";
		

		var options = 
					{
		"processing": true,
		"dom": "<'row mgbt-xs-0'<'col-md-8 col-sm-12'li><'col-md-4 col-sm-12'p>>r<'table-scrollable't><'row'<'col-md-8 col-sm-12'<'bulk-action'>><'col-md-4 col-sm-12'p>>r", // datatable layout
//		"serverSide" : true,
//		"scrollX": true,
		"autoWidth": false,
		"ajax": "templates/files/data_ecommerce.php",
		"language": { // language settings
			"lengthMenu": "Display &nbsp; _MENU_ ",
			"info": "of _TOTAL_ records"
		},
		"columns": [
			{  "data": "id",
          	   "render": function ( data, type, full, meta ) {
      		   				return '<div class="vd_checkbox"><input type="checkbox" class="checkbox-group" id="'+data+'"><label for="'+data+'"></label></div>';}
			},
			{ "data": "id" },
			{ "data": "photo",
			  "render": function ( data, type, full, meta ) {
      		   				return '<a href="pages-ecommerce-product-add.php"><img alt="product image" style="width:60px" src="'+data+'"> </a>';}			
			},			
			{ "data": "name" },
			{ "data": "category" },
			{ "data": "price" },
			{ "data": "quantity" },
			{ "data": "status",
 			  "render": function ( data, type, full, meta ) {
      		   				var value= data.toLowerCase()=="enabled" ? '<i data-toggle="tooltip" data-original-title="Enabled" class="fa fa-check vd_green font-sm"></i>' : '<i data-toggle="tooltip" data-original-title="Disabled" class="fa fa-times vd_red font-sm"></i>';
							value = '<div class="text-center">' +value + ' <label class="sr-only">'+data+'</label>' + '</div'; 
							return value;}					
			
			},
			{ "data": "id",
			  "render": function ( data, type, full, meta ) {
      		   				return '<div class="btn-group">'+
                      '<button class="btn btn-default btn-sm" type="button">Edit</button>'+
                      '<button data-toggle="dropdown" class="btn btn-default btn-sm dropdown-toggle" type="button"> <span class="caret"></span> <span class="sr-only">Edit</span> </button>'+
                      '<ul role="menu" class="dropdown-menu pull-right">'+
                      '  <li><a href="#"><i class="fa fa-times append-icon"></i> Delete</a></li>'+
                      '  <li><a href="#"><i class="fa fa-power-off append-icon"></i> Disable</a></li>'+
                      '</ul>'+
                      '</div>'
			;}}
		],
		"columnDefs": [
    { "width": "100", "targets": [5,8] },
	{ "width": "150", "targets": [4] },
	{ "width": "70", "targets": [7] },
	{ "width": "80", "targets": [2] },
	{ "width": "20", "targets": [0] },
	{ "width": "50", "targets": [1,6] },
	{  "orderable": false, "targets": [0,2,8]}, 	
  ],
		"orderCellsTop": true,
		"order": [[ 1, "asc" ]]
	}
	var table = $('#product-table').DataTable(options);					

	// After Init Completed
	table.on( 'init.dt', function () {
        
		 $('#product-table thead .filter th').each( function (thindex) {
			
			var title = $('#product-table thead th').eq( thindex ).text();
			
			var nchild = $(this).parent().children().length ; // how many children
	
			if (thindex == 0  || thindex == 2){ 
						$(this).html( '' );
			}
			
			// Add Button
			else if (thindex == nchild-1){
				$(this).html( '<div style="width:100px"><a data-toggle="tooltip" data-original-title="Search" id="search-btn" class="btn vd_btn vd_round-btn btn-xs vd_bg-green append-icon" style="margin-top:-10px;"><i class="fa fa-search fa-fw "></i></a> <a data-toggle="tooltip" data-original-title="Reset Filter" id="filter-reset-btn" class="btn vd_btn vd_round-btn btn-xs vd_bg-yellow" style="margin-top:-10px;"><i class="fa fa-undo fa-fw "></i></a></div>' );
				
			// Add and Apply Select	
			} else if (thindex == 4 || thindex == 7) {
				var select = $('<select><option value=""></option></select>')
					.appendTo( $(this).empty() ) // empty the column
					.on( 'change', function () {
						// use bottom if you want to search on type
	/*					if ($(this)[0].selectedIndex > 0){
							table.column( thindex )
							.search( '^'+$(this).val()+'$', true, false )
							.draw();
						} else {
							table.column( thindex )
							.search( '' )
							.draw();							
						}*/
					 } );			
				table.column( thindex ).data().unique().sort().each( function ( d, j ) {					
					select.append( '<option value="'+d+'">'+d+'</option>' )
				} );
			// Add Input				
			} else{
				var input= $( '<input type="text" class="input-sm" placeholder="Search '+title+'" />' )
					.appendTo( $(this).empty() )
					.on( 'keyup change', function () {
						// use bottom if you want to search on type
/*						table.column( thindex )
							.search( this.value )
							.draw();	*/					
					});			
			}
			
		// End Th Each Function	
		});
		
		$('#filter-reset-btn').click(function(e) {
            e.preventDefault();
			resetFilter();
        });
		
		$('#search-btn').click(function(e) {
            e.preventDefault();
			searchTable();
        });
							
		
		$('#checkbox-0').click(function() {
			if($(this).is(':checked'))
				$('.checkbox-group').prop('checked', true).closest("tr").addClass('row-warning');
			else
				$('.checkbox-group').prop('checked', false).closest("tr").removeClass('row-warning');
		});
	
		$('.checkbox-group').click(function() {
			if($(this).is(':checked'))
				$(this).closest("tr").addClass('row-warning');
			else
				$(this).closest("tr").removeClass('row-warning')        
		});	
		
		$('.pagination').addClass('pagination-sm');
		
		
		
		$('.bulk-action').html('<div class="btn-group mgtp-5">\
                      <button data-toggle="dropdown" class="btn vd_btn vd_bg-yellow dropdown-toggle" type="button"> Bulk Action <i class="fa fa-caret-down prepend-icon"></i> </button>\
                      <ul role="menu" class="dropdown-menu">\
                        <li><a href="#"><i class="fa fa-times append-icon"></i> Delete</a></li>\
                        <li><a href="#"><i class="fa fa-power-off append-icon"></i> Unpublished</a></li>\
                      </ul>\
                    </div>');
					
	// End Init Completed
    })
	
	
	function resetFilter() {
		$('#product-table thead .filter th').each( function (thindex) {
			$(this).children('input,select').val("");
			table.column(thindex).search('').draw();
		})
		$('#product-table [type="checkbox"]').attr("checked", false);					
	}	
	function searchTable() {
		// reset first
		$('#product-table thead .filter th').each( function (thindex) {
			table.column(thindex).search('').draw();
		});		
		
				
		// search
		$('#product-table thead .filter th').each( function (thindex) {
			var value = $(this).children('input,select').val();
			
			if (value != '' && value !=null){

				if (thindex == 4 ) {
					table.column( thindex ).search( '^'+value+'$', true, false )
				} else{
					table.column(thindex).search(value);						
				}
			}
		})
		table.draw();
	}			


} );

</script>