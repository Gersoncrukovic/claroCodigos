

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



//-------------------------------------------------------------------------------------------


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
	
//script simples pra adicionar algo ao datalayer 	
<script>
dataLayer.push({
event: 'CliqueiNofone',
tel: document.querySelector("#phonenumber").value
})
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




