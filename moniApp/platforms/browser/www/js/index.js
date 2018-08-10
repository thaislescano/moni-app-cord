
 function chamarPagina(path)
 {
    window.location = path;
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
