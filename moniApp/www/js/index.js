

function chamarPagina(){
	alert("clicado");
	var xhr= new XMLHttpRequest();
	xhr.open('GET', 'x.html', true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return; // or whatever error handling you want
	    document.getElementById('btnFooter').innerHTML= this.responseText;
	};
	xhr.send();

	//window.location = "pesquisar.html";
}



function mostrarMenu(){
	/*alert('é hora do show');*/
	var menu = document.getElementById("myMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        var icone = document.getElementById("more");
        icone.innerHTML = "menu";
    } else {
        menu.style.display = "block";
        var icone = document.getElementById("more");
   		icone.innerHTML = "close";
    }

}