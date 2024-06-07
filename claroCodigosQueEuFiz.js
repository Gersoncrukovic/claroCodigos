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
//------------------------------------------------------------------------------------------------------------------------------------------

//teste camada de dados nova GA4
dataLayer.push({
'tipo_compra':'portability', 
  'event': 'purchase',
  'ecommerce': {
    'items': [
      {
        'item_category': 'plano/celular/'
      }
    ]
  }
});

//------------------------------------------------------------------------------------------------------------------------------------------

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



//------------------------------------------------------------------------------------------------------------------------------------------
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'view_item_list',
  ecommerce: {
    items: [{
      item_name: 'Finnish magical parka',
      item_id: 'mp1122',
      price: '31.10',
      item_brand: 'PARKA4LIFE',
      item_category: 'Apparel',
      item_category2: 'Coats',
      item_category3: 'Parkas',
      item_category4: 'Unisex',
      item_variant: 'Navy blue',
      item_list_name: 'Featured items',
      item_list_id: 'FI1',
      index: 1,
      quantity: '1'
    },{
      item_name: 'Swedish regular parka',
      item_id: 'sp2323',
      price: '92.00',
      item_brand: 'PARKA4LIFE',
      item_category: 'Apparel',
      item_category2: 'Coats',
      item_category3: 'Parkas',
      item_category4: 'Unisex',
      item_variant: 'Black',
      item_list_name: 'Featured items',
      item_list_id: 'FI1',
      index: 2,
      quantity: '1'
    }]
  }
});
//---------------------------------------------------------------------------------

function(){
  var phone = document.querySelectorAll("#txt-telefone-aquisicao, #txt-telefone-migracao, #txt-telefone-portabilidade");
    for(var i = 0; phone.lenght > i; i++){
    if(phone[i].value != ''){
      return phone[i].value;
    }
    }
  }
//---------------------------------------------------------------------------------
 function(){
    if(document.querySelector('#txt-telefone-migracao').value != ''){return document.querySelector('#txt-telefone-migracao').value};
    if(document.querySelector('#txt-telefone-portabilidade').value != ''){return document.querySelector('#txt-telefone-portabilidade').value};
    if(document.querySelector('#txt-telefone-aquisicao').value != ''){return document.querySelector('#txt-telefone-aquisicao').value};
  }
//----------------------------------------------------------------------------------

Ve se o navegadordo cliente é dark ou light 
function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'Dark';
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'Light';
    }
    return 'No Preference';
  }





