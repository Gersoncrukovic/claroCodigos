function getUTMSourceMedium() {
  const url = new URL(window.location.href);
  const params = url.searchParams;

  // GCLID presente
  const hasGclid = params.has('gclid');
  const utm_source = params.get('utm_source');
  const utm_medium = params.get('utm_medium');

  // Caso padrão: utm_source e utm_medium existem
  if (utm_source && utm_medium) {
    return `utm_source=${utm_source}+utm_medium=${utm_medium}`;
  }

  // Se GCLID presente, assumir origem paga Google
  if (hasGclid) {
    return `utm_source=google+utm_medium=cpc`;
  }

  // Verifica se veio de buscador (tráfego orgânico)
  const referrer = document.referrer;
  if (referrer.includes('google.') || referrer.includes('bing.') || referrer.includes('yahoo.')) {
    return `utm_source=__organic__+utm_medium=undefined`;
  }

  // Acesso direto
  return `utm_source=__direct__+utm_medium=undefined`;
}



Como usar no GTM
Se quiser encapsular isso como variável JavaScript personalizada no Google Tag Manager:

Nome: js--utm_source_medium_concat

Tipo: Variável JavaScript Personalizada

Código:

function() {
  var url = new URL(window.location.href);
  var params = url.searchParams;

  var hasGclid = params.has('gclid');
  var utm_source = params.get('utm_source');
  var utm_medium = params.get('utm_medium');

  if (utm_source && utm_medium) {
    return `utm_source=${utm_source}+utm_medium=${utm_medium}`;
  }

  if (hasGclid) {
    return `utm_source=google+utm_medium=cpc`;
  }

  const referrer = document.referrer;
  if (referrer.includes('google.') || referrer.includes('bing.') || referrer.includes('yahoo.')) {
    return `utm_source=__organic__+utm_medium=undefined`;
  }

  return `utm_source=__direct__+utm_medium=undefined`;
}
