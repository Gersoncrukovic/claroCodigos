//Impressões de Produto:
<script>
  window.dataLayer.push({
    'event': 'viewItemList',
    'ecommerce': {
      'items': [
        {
          'item_name': 'Produto A',
          'item_id': 'ID A',
          'price': 'Preço A',
          'item_brand': 'Marca A',
          'item_category': 'Categoria A',
          'item_variant': 'Variante A',
          'position': 1
        },
        {
          'item_name': 'Produto B',
          'item_id': 'ID B',
          'price': 'Preço B',
          'item_brand': 'Marca B',
          'item_category': 'Categoria B',
          'item_variant': 'Variante B',
          'position': 2
        }
      ]
    }
  });
</script>

//Adicionar ao Carrinho:
<script>
  window.dataLayer.push({
    'event': 'addToCart',
    'ecommerce': {
      'items': [
        {
          'item_name': 'Nome do Produto',
          'item_id': 'ID do Produto',
          'price': 'Preço',
          'item_brand': 'Marca',
          'item_category': 'Categoria',
          'item_variant': 'Variante',
          'quantity': 1
        }
      ]
    }
  });
</script>

  //purchase
<script>
  window.dataLayer.push({
    'event': 'purchase',
    'ecommerce': {
      'transaction_id': 'ID da Transação',
      'affiliation': 'Nome da Loja',
      'value': 'Valor Total',
      'tax': 'Imposto',
      'shipping': 'Frete',
      'currency': 'BRL',
      'items': [
        {
          'item_name': 'Nome do Produto',
          'item_id': 'ID do Produto',
          'price': 'Preço',
          'item_brand': 'Marca',
          'item_category': 'Categoria',
          'item_variant': 'Variante',
          'quantity': 1
        }
      ]
    }
  });
</script>


Passos Detalhados
1. Capturar os Valores Dinâmicos
Suponha que você tenha uma estrutura HTML com informações sobre os produtos, como nome, ID, preço, etc. Você pode usar JavaScript para capturar esses valores.

Exemplo de estrutura HTML para um produto:

<div class="product" data-id="12345" data-name="Produto Exemplo" data-price="99.99" data-brand="Marca Exemplo" data-category="Categoria Exemplo">
  <h2>Produto Exemplo</h2>
  <span class="price">99.99</span>
</div>

Você pode usar JavaScript para capturar esses valores:
// Capturando o elemento do produto
var productElement = document.querySelector('.product');

// Extraindo os valores dos atributos data
var productId = productElement.getAttribute('data-id');
var productName = productElement.getAttribute('data-name');
var productPrice = productElement.getAttribute('data-price');
var productBrand = productElement.getAttribute('data-brand');
var productCategory = productElement.getAttribute('data-category');

2. Enviar os Valores para o dataLayer
Depois de capturar os valores dinâmicos, você pode enviá-los para o dataLayer.
  // Enviando os valores para o dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'viewItem',
  'ecommerce': {
    'items': [
      {
        'item_name': productName,
        'item_id': productId,
        'price': productPrice,
        'item_brand': productBrand,
        'item_category': productCategory,
        'quantity': 1
      }
    ]
  }
});

3. Automatizar para Múltiplos Produtos
  Se você tiver uma lista de produtos, pode iterar sobre eles e enviar os dados para o dataLayer.

Exemplo de estrutura HTML para uma lista de produtos:
<div class="product" data-id="12345" data-name="Produto Exemplo 1" data-price="99.99" data-brand="Marca Exemplo" data-category="Categoria Exemplo">
  <h2>Produto Exemplo 1</h2>
  <span class="price">99.99</span>
</div>
<div class="product" data-id="12346" data-name="Produto Exemplo 2" data-price="149.99" data-brand="Marca Exemplo" data-category="Categoria Exemplo">
  <h2>Produto Exemplo 2</h2>
  <span class="price">149.99</span>
</div>

JavaScript para capturar e enviar os dados de múltiplos produtos:
// Capturando todos os elementos de produtos
var productElements = document.querySelectorAll('.product');

// Iterando sobre cada produto e extraindo os dados
var items = Array.from(productElements).map(function(productElement) {
  return {
    'item_name': productElement.getAttribute('data-name'),
    'item_id': productElement.getAttribute('data-id'),
    'price': productElement.getAttribute('data-price'),
    'item_brand': productElement.getAttribute('data-brand'),
    'item_category': productElement.getAttribute('data-category'),
    'quantity': 1
  };
});

// Enviando os dados para o dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'viewItemList',
  'ecommerce': {
    'items': items
  }
});



