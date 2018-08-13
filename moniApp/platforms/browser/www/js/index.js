
document.addEventListener("click", chamarPagina, true);

function chamarPagina(){
	
	window.location = "pesquisar.html";
}



function mostrarMenu(){
	/*alert('é hora do show');*/
	var menu = document.getElementById("myMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        var icone = document.getElementById("more");
        icone.innerHTML = "m";
    } else {
        menu.style.display = "block";
        var icone = document.getElementById("more");
   		icone.innerHTML = "close";
    }

}