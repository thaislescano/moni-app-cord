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
    if (menu.style.display === "none" || !menu.style.display) {
    	menu.style.display="block";
    	icone.innerHTML = "close";
      
    } else {
    	menu.style.display="none";
    	icone.innerHTML = "menu";

    }
}

function mostrarCards(){
	//apenas um modelo
	//depois: receber input
	//buscar prof daquele input(disciplina)
	//mostrar os cards com a informação
	//cored de corda aleatoria depois?

	//card
	var card = document.createElement("div");
	card.classList.add("info-card");
	card.classList.add("flexbox-row-around");
	document.body.appendChild(card);

	//foto
	var infoCard = document.getElementsByClassName("info-card")[0];
	var imagem = document.createElement("img");
	imagem.src="img/danpix.png";
	imagem.alt="avatar do monitor";
	infoCard.appendChild(imagem);

	//info
	var divInfo = document.createElement("div");
	divInfo.classList.add("info-monitor");
	divInfo.innerHTML = "<h3 class='nome'> Fulano de Tal Tal</h3><h4 class='dias'> Segunda</h4><h4 class='horario'> 14:00 - 16:00 </h4>"
	infoCard.appendChild(divInfo);


}
