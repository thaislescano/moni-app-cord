

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

var PAGINAS;
function loadPages() {
	//to do
	//carregar todas as paginas de html em alguma variavel global
	//pode ser a PAGINAS
	//dai PAGINAS.home vai ser o html do login e PAGINAS.pesquisar do html de pesquisar
}
function chamarPagina(pagina){
	//to do
	//nessa parte vai receber uma string com o nome da pagina que vc quer chamar e..
	document.getElementById("corpo").innerHTML = PAGINAS[pagina];
}