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

//-------------------------------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------------------------------------
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
