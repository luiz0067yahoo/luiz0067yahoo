var avancar_voltar=true;
var pausar=false;
var intervalo=250;
var inicidado=false;
function pause(){
	if(inicidado){
		pausar=true;
		$("botoes_play").parentNode.style.display="block";
		$("botoes_pause").parentNode.style.display="none";
	}
}
function play(){
	if(inicidado){
		pausar=false;
		$("botoes_play").parentNode.style.display="none";
		$("botoes_pause").parentNode.style.display="block";
	}
}
function progredir(){
	if(inicidado){
		avancar_voltar=true;
		intervalo=200;
	}
}
function progredir_rapido(){
	if(inicidado){
		avancar_voltar=true;
		intervalo=75;
	}
}
function retroceder(){
	if(inicidado){
		avancar_voltar=false;
		intervalo=200;
	}
}
function retroceder_rapido(){
	if(inicidado){
		avancar_voltar=false;
		intervalo=75;
	}
}
function avancar($rotativo){
	var $imagens=BuscarFilhoPorAtributoValor($rotativo,"funcao","imagem_rotativa");
	var posicao=0;
	try{
		for(var y=0;y<$imagens.length;y++){
			if($imagens[y].style.display=="block"){
				if((y+1)<$imagens.length)
					posicao=y+1;
				$imagens[y].style.display="none";
			}						
		}
		$imagens[posicao].style.display="block"
	}
	catch(erro__){}
}
function moverPara($rotativo,posicao){
	var $imagens=BuscarFilhoPorAtributoValor($rotativo,"funcao","imagem_rotativa");
	try{
		for(var y=0;y<$imagens.length;y++){
			if($imagens[y].style.display=="block"){
				$imagens[y].style.display="none";
			}						
		}
		$imagens[posicao-1].style.display="block"
	}
	catch(erro__){}
}
function voltar($rotativo){
	try{
		var $imagens=BuscarFilhoPorAtributoValor($rotativo,"funcao","imagem_rotativa");
		var posicao=$imagens.length-1;
		try{
			for(var y=$imagens.length-1;y>=0;y--){
				if($imagens[y].style.display=="block"){
					if((y-1)>=0)
						posicao=y-1;
					$imagens[y].style.display="none";
				}	
			}
			$imagens[posicao].style.display="block"
		}
		catch(erro__){}
	}
	catch(erro__222){}
}
function rodar(){
	try{
		$("carregando").style.display="none";
		inicidado=true;
		if(!pausar){
			var $body=document.getElementsByTagName("body")[0];
			var $rotativos=BuscarFilhoPorAtributoValor($body,"funcao","banner_rotativa");
			for(var x=0;x<$rotativos.length;x++){
				
				if(avancar_voltar)
					avancar($rotativos[x]);
				else
					voltar($rotativos[x]);
			}
			var $imagens=BuscarFilhoPorAtributoValor($body,"class","banner1");
		}
		setTimeout("rodar("+intervalo+")", intervalo);
	}
	catch(erro__222){}
}
function BuscarFilhoPorAtributoValor($element,atributo,valor){
	var $result=new Array();
	if($element.hasChildNodes()){
		for(var i=0;i<$element.childNodes.length;i++){
			try{
				var $x=$element.childNodes[i];
				if ($x.nodeType==1){
					try{
						if ($x.getAttribute(atributo)!=null){
							if ($x.getAttribute(atributo)==valor){
								$result.push($x);
							}
						}
					}
					catch(erro____){}					
				}
				var acc=BuscarFilhoPorAtributoValor($x,atributo,valor);
				if (acc!=null){
					for(var j=0;j<acc.length;j++){
						$result.push(acc[j]);
					}					
				}									
			}
			catch(e){}
		}
	}
	if ($result.length==0)
		$result=null
	return $result;
}
function BuscarPaiPorAtributoValor(componente,atributo,valor){
	var resultado=null;
	var erro=null;
	//for(var i=0;i<nivel;i++){
	while(true){
		try{
			if (componente.hasAttribute(atributo)!=null){			
				if (componente.getAttribute(atributo)!=null){
					if (componente.getAttribute(atributo)===valor){
						resultado = componente;			
						break;
					}
				}		
			}
			if ((componente!=null)||(componente.equals(document)))
				componente=componente.parentNode;
			else
				break;
		}
		catch(erro){break;}
	}
	return resultado;
}
function $(id){
	return document.getElementById(id);
}

function getDimenssion(){
	var de = document.documentElement;
	this.width = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	this.height = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	return this;
}       


function redimenciona(){
	var altura_janela=getDimenssion().height;
	var altura_conteudo=document.getElementById('centro_pagina').scrollHeight;
	diferenca=altura_janela-altura_conteudo;
	diferenca/=2;
	diferenca=Math.floor(diferenca);
	
	if (diferenca>0){
		document.getElementById('espaco_topo').style.height=diferenca+"px";
		document.getElementById('espaco_baixo').style.height=diferenca+"px";
	}
}
function trocacor(element,cor){
	element.style.backgroundColor=cor;
}