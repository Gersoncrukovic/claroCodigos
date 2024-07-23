//apaga umas merda que eu n quero ver na tela
document.querySelector("#logo > ytd-yoodle-renderer > picture > img").style.display = "none";

//--------------------------------------------------------------------------------------------

// Impede a navegação ou fechamento
window.addEventListener('beforeunload', (event) => {
  event.preventDefault(); 
});
