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

//----------------------------------------------------------------------------------------------------------------------------------  
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
//--------------------------------------------------------------------------
function () {
  var pageValue = {{dataLayer--page}};
  document.cookie = "amazonPrime=" + pageValue + "; path=/";
  return pageValue;
}
 envia pro cookie simples


function () {
  var pageValue = {{dataLayer--page}};
  
  // Envia o valor para o cookie
  document.cookie = "amazonPrime=" + pageValue + "; path=/";
  
  // Envia o valor para o localStorage
  localStorage.setItem("amazonPrime", pageValue);
  
  return pageValue;
}

function getAmazonPrime() {
  var pageValue = localStorage.getItem("amazonPrime");
  return pageValue;
}
