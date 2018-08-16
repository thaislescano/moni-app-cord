function carregarView(pagina){
	//nessa parte vai receber uma string com o nome da pagina que vc quer chamar e..
	if(PAGINAS[pagina] !== undefined){
		document.getElementById("corpo").innerHTML = PAGINAS[pagina];
	}
	//carregar ela dentro do #corpo se existir
}
