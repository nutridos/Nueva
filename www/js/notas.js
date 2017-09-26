//AGregar
localStorage.cont = 1;
function agregar(){
	crear();
	i = localStorage.cont;
	document.getElementById('agregar'+localStorage.cont).innerHTML ='\
    <div class="nota">\
        <textarea placeholder="Descripcion" class="des" id="des'+localStorage.cont+'"></textarea>\
        <input type="number" placeholder="$0" class="cos" id="gas'+localStorage.cont+'">\
        <input type=image src="img/guardar.svg" id="guardar'+i+'" class="guar" onclick="guardar('+i+')">\
    </div>';
    localStorage.cont++;
}

function crear(){
	if (localStorage.cont == 1) {
        var x;
        x = document.createElement("DIV");
        x.setAttribute("id", "agregar"+localStorage.cont);
        document.body.appendChild(x);
	}else{
        var x;
        x = document.createElement("DIV");
        x.setAttribute("id", "agregar"+localStorage.cont);
        document.body.appendChild(x);
    }
}




