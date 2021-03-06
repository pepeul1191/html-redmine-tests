QUnit.module( "Ver lista de usuarios", {
	beforeEach: function() {
		this.tabla = tablaUsuarios;
		this.id_tabla = "#tablaUsuarios";
	}
});


QUnit.test( "La tabla debe redireccionar a una nueva vista para agrear un usuario", function( assert ) {
  	assert.equal(this.tabla.url_nuevo, BASE_URL + "accesos/usuario/agregar", "URL debe ser BASE_URL+ accesos/usuario/agregar");
  	
	$.ajax({
	    type: "GET",
	    url: BASE_URL + "accesos/usuario/agregar",
	    data: '',
	    success: function(data,status,xhr){

	    },
	    error: function(xhr, status, error){
	       	
	    },
	    complete: function(xhr){
	    	var status = xhr.status;
	    	assert.equal(status, 200, "Vista redireccionada por BASE_URL+ accesos/usuario/agregar existe");
	    }
	});
});

function verAccesosTest(id_tabla){
  	var tbody = $(id_tabla).children().eq(1);
  	//var filas = $(this.id_tabla).children(0).children().eq(1).children().last().children().eq(3);
  	var numero_filas = tbody.children().length;

  	for(var k = numero_filas; k > 0; k = k - 1){
  		var btn_ver_accesos = tbody.children().eq(k - 1).children().last().children().eq(0);
  		console.log(btn_ver_accesos);
  		
  		btn_ver_accesos.click(function() {
    		$.ajax({
				type: "GET",
				url: BASE_URL + "accesos/usuario/ver_accesos",
				data: '',
				success: function(data,status,xhr){
					var status = xhr.status;
					QUnit.test( "La tabla debe mostrar un modal para ver los registros de ingreso al sistema del usuario", function( assert ) {
				   	assert.equal(status, 200, "Debe cargar un modal con la lista de accesos del usuario al sistema");
				});
				},
				error: function(xhr, status, error){
				},
				complete: function(xhr){
					console.log(tablaAccesos);
				}
			});
		});

  		btn_ver_accesos.trigger("click");

  		$("#modal-container").click();
		$(".modal-backdrop").remove();
  	}
};

verAccesosTest("#tablaUsuarios");


$(".mootools").click(function(event){
	/*
	$.ajax({
		type: "GET",
		url: BASE_URL + "accesos/usuario/ver_accesos",
		data: '',
			success: function(data,status,xhr){
				var status = xhr.status;
				QUnit.test( "La tabla debe mostrar un modal para ver los registros de ingreso al sistema del usuario", function( assert ) {
			   		assert.equal(status, 200, "Debe cargar un modal con la lista de accesos del usuario al sistema");
			   	});
			},
			error: function(xhr, status, error){
			},
			complete: function(xhr){
				console.log(tablaAccesos);
			}
		});

	$("#modal-container").click();
	$(".modal-backdrop").remove();

	return false;
	*/
});