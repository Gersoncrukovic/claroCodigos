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


//----------------------------------------------------------------------------

apaga umas merda que eu n quero ver na tela
document.querySelector("#logo > ytd-yoodle-renderer > picture > img").style.display = "none";

//----------------------------------------------------------------------------------------

window.addEventListener('beforeunload', (event) => {
  event.preventDefault(); // Impede a navegação ou fechamento
});
//---------------------------------------------------------------------------------------------

document.querySelector("#btn-eu-quero-23283").addEventListener('click',function () {
    console.log('Cliquei no botão e disparei o evento')
    dataLayer.push({
        event : 'clique',
        custom_section: 'lp_movel:home',
        custom_section: 'planos:eu_quero',
    })
})
//--------------------------------------------------------------------------------------------------

document.querySelector("#submit").addEventListener('click',function(){
    if(!document.querySelector("#submit").disabled){
        console.log(document.querySelector("#phonenumber").value)
    }
})
//--------------------------------------------------------------------------------------------------
<script>
document.querySelector("#submit").addEventListener('click', function() {
    if (!document.querySelector("#submit").disabled) {
        var phoneNumber = document.querySelector("#phonenumber").value;
        return phoneNumber;
    }
});
</script>
//-------------------------------------------------------------------------------------------------
//sanitizado
<script>
function SetCookie(nomeCookie, valorCookie, expiracaoCookieDias) {
    var dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (expiracaoCookieDias * 24 * 60 * 60 * 1000));
    var expiracao = "expires=" + dataExpiracao.toUTCString();
    
    return document.cookie = nomeCookie + '=' + valorCookie + '; ' + expiracao + '; path=' + document.location.pathname + '; domain=' + document.domain;
}

function limparTelefone(telefone) {
    return telefone.replace(/[()\-\s]/g, ''); // Remove parênteses, hífen e espaços
}

var telefone = document.querySelector("#phonenumber").value;
telefone = limparTelefone(telefone);
SetCookie('cookie_phone_teste', telefone, 1);

</script>

//nao sanitizado
<script>
function SetCookie(nomeCookie,valorCookie,expiracaoCookieDias ) {
    var dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (expiracaoCookieDias * 24 * 60 * 60 * 1000));
    var expiracao = "expires=" + dataExpiracao.toUTCString();
    
    return  document.cookie = nomeCookie+'='+valorCookie+'; expires='+expiracao + 'path='+document.location.pathname+'; domain='+ document.domain
}

SetCookie('cookie_telefone', document.querySelector("#phonenumber").value, 1);

</script>
/* */

//----------------------------------------------------------------------------------------------------
script simples pra adicionar algo ao datalayer 	
<script>
dataLayer.push({
event: 'CliqueiNofone',
tel: document.querySelector("#phonenumber").value
})
</script>

//-----------------------------------------------------------------------------------------------
armazena no local storage
	
html personalizado

<script>
  function a(){
    var valor = document.querySelector("#phonenumber");
    if(valor != null){
    return valor;
    }
  }
  localStorage.setItem("myCat", a());
</script>

variavel

function(){
  return window.localStorage.getItem('myCat');
}
function(){
  var a = window.localStorage.getItem("myCat");
  return a;
}
//---------------------------------------------------------------------------------
clique no botão eu_quero no clarorecarga https://clarorecarga.claro.com.br/recarga/landing

document.querySelector("#app-root > div > main > div.sc-crrsfI.crdgHM > div.BrainhubCarousel__container > div > div > ul > li:nth-child(29) > div > button").addEventListener("click", function() {
  console.log('Cliquei no botão e disparei o evento')
    dataLayer.push({
        event : 'clique',
        custom_section: 'claro_recarga:home',
        custom_title: '25_reais:eu_quero',
})  
});




