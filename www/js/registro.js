function insertar(){
			$(document).ready(function(){
				 $("#insert").click(function(){

					nom   = $("#nom").val()
					ape   = $("#ape").val()
					fec   = $("#fec").val()
					ema   = $("#ema").val()
					pass  = $("#pass").val()
					pass2 = $("#pass2").val()
						if (nom == "" || ape== "" || fec=="" || ema=="" || pass=="" || pass2==""){
							//Validamos que los campos esten llenos
							alert("Por favor llena los campos");
						}
						else{
							//Validamos que las contrasenas se han iguales
							if (pass != pass2) {
								alert("Las contrasenas no coinciden");
							}else{
								//Guardamos la informacion en localStorage
								localStorage.nom   = nom;
								localStorage.ape   = ape;
								localStorage.fec   = fec;
								localStorage.ema   = ema;
								localStorage.pass  = pass;
								localStorage.pass2 = pass2;
								alert("registrado correctamente")
							}
						}
					 if($.trim(nom).length>0 & $.trim(ape).length>0  & $.trim(fec).length>0  & $.trim(ema).length>0 & $.trim(pass).length>0)
					 {
						 $.ajax({
							 type: "POST",
							 url:"https://aesir.000webhostapp.com/insert.php",
							 data: {insert:"", nom:$("#nom").val(), ape:$("#ape").val(), fec:$("#fec").val(), ema:$("#ema").val(), pass:$("#pass").val()},
							 crossDomain: true,
							 cache: false,
							 beforeSend: function(){ $("#insert").val('Connecting...');},
							 success: function(data){
							     if(data=="success"){
									 alert("inserted");
								 }
								 else if(data=="error")
								 {
								 	alert("error");
								 }
							}
						});

					}return false;
			 	});
			 });
}
//Registro de datos
function registro()
{
	//Validar contrasena
}
//Mostrar los datos registrados
function perfil()
{
var xnom = localStorage.nom 
var xape = localStorage.ape
var xfec = localStorage.fec
var xema = localStorage.ema
	if (xnom == "" || xape== "" || xfec=="" || xema==""){
		alert("Por favor llena los campos")
	}
	else{
		alert("Nombre: " + xnom + "\nApelidos: " + xape + "\nFecha: " + xfec + "\nCorreo: " + xema);
	}
}
//Iniciar sesion despues de registrarse
function inicio()
{
var ema = localStorage.ema 
var pass = localStorage.pass
xema = document.getElementById("ema").value
xpass = document.getElementById("pass").value
if(xema=="" || xpass==""){
	document.getElementById("validar").innerHTML="Por favor llena los campos";
}
else{
	if(ema==xema && pass==xpass){
		window.location.href = "pagina.html";
	    localStorage.inicio = true;
	}
	else{
		document.getElementById("validar").innerHTML="La contraseña o el usuario es incorrecto";
	}
}
}
//Crerrar sesion
function cerrar_sesion()
{
	alert("Sesion finalizada")
    localStorage.compra = "no compra"
		window.location.href = "index.html";
}

function cambiar3(){
	document.getElementById("result").innerHTML='\
	<iframe src="silla.html" style="height:1070px; width:99%;"> </iframe>';
}

function cambiar5(){
	document.getElementById("result").innerHTML='\
	<iframe src="autos.html" style="height:970px; width:99%;"> </iframe>';
}

function cambiar6(){
	document.getElementById("result").innerHTML='\
	<iframe src="mesas.html" style="height:1010px; width:99%;"> </iframe>';
}

function cambiar4(){
		document.getElementById("result").innerHTML='\
	<iframe src="miscompras.html" style="height:10000px; width:99%;"> </iframe>';
}
