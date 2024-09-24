

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

//dado de telefone sanitizado
function(){
  function sanitizePhoneNumber(phoneNumber) {
    return phoneNumber.replace(/[()\-\s]/g, '');
  }

  if(document.querySelector('#txt-telefone-migracao').value != ''){
    return '+55' + sanitizePhoneNumber(document.querySelector('#txt-telefone-migracao').value);
  }
  if(document.querySelector('#txt-telefone-portabilidade').value != ''){
    return '+55' + sanitizePhoneNumber(document.querySelector('#txt-telefone-portabilidade').value);
  }
  if(document.querySelector('#txt-telefone-aquisicao').value != ''){
    return '+55' + sanitizePhoneNumber(document.querySelector('#txt-telefone-aquisicao').value);
  }
}



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

//----------------------------------------------------------------------------------------------------
	
//script simples pra adicionar algo ao datalayer 	
<script>
window.dataLayer.push({
event: 'CliqueiNofone',
tel: document.querySelector("#phonenumber").value
})
</script>
	
<script>
  function telefone() {
    var coletaTelefone = document.querySelector("#phonenumber").value;
    dataLayer.push({
      event: 'CliqueiNofone',
      tel: coletaTelefone
    });
  }
</script>

//--------------------------------------------------------------------------------------------
//funcao autoinvocavel  ( function (){ //mágica aqui  } )

<script>
  (function telefone () {
    var coletaTelefone = document.querySelector("#phonenumber").value;
    var sanitiza = '+55' + coletaTelefone.replace(/[()\-\s]/g, '');
    window.dataLayer.push({
      event: 'floodlight_telefone',
      tel: sanitiza
    });
  })();
</script>

//-----------------------------------------------------------------------------------------------
//armazena no local storage
	
//html personalizado

<script>
  function a(){
    var valor = document.querySelector("#phonenumber");
    if(valor != null){
    return valor;
    }
  }
  localStorage.setItem("myCat", a());
</script>

//variavel

function(){
  return window.localStorage.getItem('myCat');
}
function(){
  var a = window.localStorage.getItem("myCat");
  return a;
}
//---------------------------------------------------------------------------------
/*clique no botão eu_quero no clarorecarga https://clarorecarga.claro.com.br/recarga/landing*/

document.querySelector("#app-root > div > main > div.sc-crrsfI.crdgHM > div.BrainhubCarousel__container > div > div > ul > li:nth-child(29) > div > button").addEventListener("click", function() {
  console.log('Cliquei no botão e disparei o evento')
    dataLayer.push({
        event : 'clique',
        custom_section: 'claro_recarga:home',
        custom_title: '25_reais:eu_quero',
})  
});


//---------------------------------------------------------------------------------------------------------------------------
//pme
//coleta phone
function limpaPhoneNumber() {
    var phone = document.querySelector("#phone").value;
    phone = phone.replace(/[^0-9]/g, "");
    phone = "+55" + phone;
    return phone;
}
//coleta e-mail
function(){
  var email = document.querySelector('#email').value;
  return email; 
}
//---------------------------------------------------------------------------------------------------------------------------
function coletaPhoneNumber() {
    if (document.querySelector('input#txt-telefone-migracao').value != '') {
        var telefoneMigracao = document.querySelector('#txt-telefone-migracao').value;
        telefoneMigracao = '+55' + telefoneMigracao.replace(/\D/g, '');
        localStorage.setItem('telefoneMigracao', telefoneMigracao);
        return telefoneMigracao;
    }

    if (document.querySelector('input#txt-telefone-portabilidade').value != '') {
        var telefonePortabilidade = document.querySelector('#txt-telefone-portabilidade').value;
        telefonePortabilidade = '+55' + telefonePortabilidade.replace(/\D/g, '');
        localStorage.setItem('telefonePortabilidade', telefonePortabilidade);
        return telefonePortabilidade;
    }

    if (document.querySelector('input#txt-telefone-aquisicao').value != '') {
        var telefoneAquisicao = document.querySelector('#txt-telefone-aquisicao').value;
        telefoneAquisicao = '+55' + telefoneAquisicao.replace(/\D/g, '');
        localStorage.setItem('telefoneAquisicao', telefoneAquisicao);
        return telefoneAquisicao;
    }
}

//coleta email e manda pro local
function(){
var email = document.querySelector("input#txt-email").value

return window.localStorage.setItem('e-mail', email);

}

//-------------------------------------------------------
//pega do local com o get e faz caso migracao, portabilidade e aquisicao

function getTelefone(situacao) {
  switch(situacao) {
    case 'aquisicao':
      return window.localStorage.getItem('telefoneAquisicao');
    case 'portabilidade':
      return window.localStorage.getItem('telefonePortabilidade');
    case 'migracao':
      return window.localStorage.getItem('telefoneMigracao');
    default:
      return null; // Caso a situação não corresponda a nenhuma das opções
  }
}

function getTelefone(situacao) {
  switch(situacao) {
    case 'aquisicao':
      return window.localStorage.getItem('telefoneAquisicao');
    case 'portabilidade':
      return window.localStorage.getItem('telefonePortabilidade');
    case 'migracao':
      return window.localStorage.getItem('telefoneMigracao');
    default:
      return null;
  }

	function getTelefone() {
  if ('aquisicao') {
    return window.localStorage.getItem('telefoneAquisicao');
  } else if ('portabilidade') {
    return window.localStorage.getItem('telefonePortabilidade');
  } else if ('migracao') {
    return window.localStorage.getItem('telefoneMigracao');
  } else {
    return null;
  }
}

//----------------------------------------------------------------------------------------------------
//retorna a utm campaign
function (){
var url = {{Referrer}};
// Função para obter o valor de um parâmetro da URL
function getParameterByName(name, url) {
    var urlObj = new URL(url);
    return urlObj.searchParams.get(name);
}
// Obtendo o valor do utm_campaign
var utmCampaign = getParameterByName('utm_campaign', url);
// Exibindo o resultado
document.cookie = "utm_campaign=" + utmCampaign + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
return utmCampaign

} 


