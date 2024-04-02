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
