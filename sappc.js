//procurar por Set Atribuition Params Persistent Cookie (by Metricaz)

//js--sappc--origemMTZ.utm_source
function(){
  if(typeof {{sappc--origemMTZ}} == 'object'){
    return JSON.stringify({{sappc--origemMTZ}}['utm_source']);
  }
  return JSON.stringify({{sappc--origemMTZ}});
}
//js--sappc--origemMTZ.utm_medium
function(){
  if(typeof {{sappc--origemMTZ}} == 'object'){
    return JSON.stringify({{sappc--origemMTZ}}['utm_medium']);
  }
  return JSON.stringify({{sappc--origemMTZ}});
}
