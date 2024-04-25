//adiciona ao datalayer o evento através do push

window.dataLayer = window.dataLayer || [];

document.getElementById("inputSubmit").addEventListener("click", function() {
    var evento = {
        'event': 'bananinhas',
        'custom_title': 'meu deus eu vou muuurre'
    };
    
    window.dataLayer.push(evento);
 
    console.log('foi?');
});


//cria um numero aleatorio arredondado
function() {
    return Math.floor(Math.random() * 100)+1;
}


//teste de push manual
dataLayer.push({
	'event': 'purchase',
	'eventCategory': 'TESTE',
	'eventAction': 'TESTE',
	'eventLabel': 'TESTE',
	'ecommerce': {
		'purchase': {
			'actionField': {
				'id': 'TESTEERRE4545',	
				'revenue': '00.00',
			},
			'products': [{
				'name': 'TESTE1',			
				'id': 'PRD122',
				'price': '00.00',
				'brand': 'TESTE',
				'category': 'TESTE/TVTESTE',
				'quantity': '1',
			},
        {
				'name': 'TESTE2',			
				'id': 'PRD2222',
				'price': '00.00',
				'brand': 'TESTE',
				'category': 'TESTE/TESTEINTERNET',
				'quantity': '1',
			},
        {
				'name': 'TESTE3',			
				'id': 'PRD2232',
				'price': '00.00',
				'brand': 'TESTE',
				'category': 'TESTE/selecoes',
				'quantity': '1',
			}]
		}
	}
});


function(){
  if({{Event}} === 'addToCart' | {{Event}} === 'checkout' | {{Event}} === 'purchase'){
    var quantProdutos = {{EEC Products -> GA4 Items}}.length;
  // Validar se temos mais do que um produto 
    if(quantProdutos > 1){
      var categoriasProdutos = [];
      for(i=0; quantProdutos > i;i++){
        var brandProdutos = {{EEC Products -> GA4 Items}}[i].item_brand;
        // Verificar se a Brand é um plano
        if(brandProdutos == 'claro-movel'){
          categoriasProdutos.push({{EEC Products -> GA4 Items}}[i].item_category + '_' + {{EEC Products -> GA4 Items}}[i].item_category3);
        }
        // Verificar se a Brand é um aparelho ou acessorio
        if(brandProdutos != 'claro-movel'){
          categoriasProdutos.push({{EEC Products -> GA4 Items}}[i].item_category);
        }
      }
        // Cria uma string com todos os valores e substitui '[',']','"' e ','
        var stringlistproducts = JSON.stringify(categoriasProdutos);
        return stringlistproducts.replace(/\[|\]|"|/g, '').replace(/,/g, '_');
    }
    var brandProdutos = {{EEC Products -> GA4 Items}}[0].item_brand;
    if(brandProdutos != 'claro-movel'){
      return {{EEC Products -> GA4 Items}}[0].item_category;
    }
    return ({{EEC Products -> GA4 Items}}[0].item_category + '_' + {{EEC Products -> GA4 Items}}[0].item_category3);
  }
}
