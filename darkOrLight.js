//Ve se o navegadordo cliente é dark ou light 
function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'Dark';
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'Light';
    }
    return 'No Preference';
  }
