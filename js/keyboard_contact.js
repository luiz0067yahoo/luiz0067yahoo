document.addEventListener('scroll', function(e) {
	myID=document.getElementById("voltar");
	if( window.scrollY>=600){
		myID.style.display="block"
	}
	else
	{
		myID.style.display="none"
	}

  });
  
function BuscarFilhoPorClasseValor($element,className){
	var $result=new Array();
	if($element.hasChildNodes()){
		for(var i=0;i<$element.childNodes.length;i++){
			try{
				var $x=$element.childNodes[i];
				if ($x.nodeType==1){
					try{
						if (($x.className==className)||($x.className.indexOf(className+" ")!=-1)){
							$result.push($x);
						}
					}
					catch(erro____){}					
				}
				var acc=BuscarFilhoPorClasseValor($x,className);
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
function offline($element){
	var $elements=BuscarFilhoPorClasseValor($element.parentNode,'key');
	if(($elements!=null)&&($elements.length!=0))
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.color='#909195';
			$elements[i].style.textDecoration ='none';
		}
		catch(erro__){}
	}
	$elements=BuscarFilhoPorClasseValor($element.parentNode,'key2');
	if(($elements!=null)&&($elements.length!=0))
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.color='#909195';
			$elements[i].style.textDecoration ='none';
		}
		catch(erro__){}
	}
	$elements=BuscarFilhoPorClasseValor($element.parentNode,'key3');
	if(($elements!=null)&&($elements.length!=0))
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.color='#909195';
			$elements[i].style.textDecoration ='none';
		}
		catch(erro__){}
	}
	$elements=BuscarFilhoPorClasseValor($element.parentNode,'icone');
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.backgroundImage=$elements[i].style.backgroundImage.replace("preto","cinza")
		}
		catch(erro__){}
	}

} 			
function online($element){
	var $elements=BuscarFilhoPorClasseValor($element.parentNode,'key');
	if(($elements!=null)&&($elements.length!=0))
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.color='#000000';
			$elements[i].style.textDecoration ='underline';
		}
		catch(erro__){}
	}
	var $elements=BuscarFilhoPorClasseValor($element.parentNode,'key2');
	if(($elements!=null)&&($elements.length!=0))
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.color='#000000';
			$elements[i].style.textDecoration ='underline';
		}
		catch(erro__){}
	}
	$elements=BuscarFilhoPorClasseValor($element.parentNode,'key3');
	if(($elements!=null)&&($elements.length!=0))
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.color='#000000';
			$elements[i].style.textDecoration ='underline';
		}
		catch(erro__){}
	}
	$elements=BuscarFilhoPorClasseValor($element.parentNode,'icone');
	if(($elements!=null)&&($elements.length!=0))
	for(var i=0;i<$elements.length;i++){
		try{
			$elements[i].style.backgroundImage=$elements[i].style.backgroundImage.replace("cinza","preto")
		}
		catch(erro__){}
	}
}
