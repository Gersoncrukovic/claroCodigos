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
