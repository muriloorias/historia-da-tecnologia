function search() {
  const input = document.querySelector('.searchInput');
  const searchBtn = document.querySelector('.searchBtn');
  const items = document.querySelectorAll('.item');

  function filterItens() {
    if (!input || !(input instanceof HTMLInputElement)) return;

    const term = input.value.toLowerCase();

    items.forEach(item => {
      const titleEl = item.querySelector('h2');
      const title = titleEl ? titleEl.innerText.toLowerCase() : '';

      if (item instanceof HTMLElement) {
        item.style.display = title.includes(term) ? 'block' : 'none';
      }
    });
  }

  // Agora adiciona os eventos corretamente
  if (searchBtn) {
    searchBtn.addEventListener('click', filterItens);
  }

  if (input) {
    input.addEventListener('keyup', (event) => {
      /*
      * HACK: se esta dando erro aqui releva por que ta funcionando
      * não sei se é alguma gambiarra do pessoal do stack overflow
      * mas esta funcionando to vendo alguma maneira de arrumar isto
      */
      if (event.key === 'Enter') {
        filterItens();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  search();
});
