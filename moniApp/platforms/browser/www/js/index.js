function carregarView(pagina){
	//nessa parte vai receber uma string com o nome da pagina que vc quer chamar e..
	if(PAGINAS[pagina] !== undefined){
		document.getElementById("corpo").innerHTML = PAGINAS[pagina];
	}
	//carregar ela dentro do #corpo se existir
}

function mostrarMenu(){
	var menu = document.getElementById("myMenu");
	var icone = document.getElementById("more");
    if (menu.style.display === "none") {
    	icone.innerHTML = "close";
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
        icone.innerHTML = "menu";
    }
}
