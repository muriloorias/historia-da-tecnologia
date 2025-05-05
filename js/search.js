// export por conta que testes usarão esta função
export function removeAccentMark(str){
  /*
  * NOTE: primeiramente com normalize separa os acentos do texto, exemplo:
  * maçã retorna m + a + ç + a + ~
  * e o replace junta tudo e retira o acento, exemplo:
  * maçã retorna maca
  */ 
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); // ⚠️ parênteses adicionados em toLowerCase()
}

function search() {
  const input = document.querySelector('.searchInput');
  const searchBtn = document.querySelector('.searchBtn');
  const items = document.querySelectorAll('.item');

  function filterItens() {
    if (!input || !(input instanceof HTMLInputElement)) return;

    const term = removeAccentMark(input.value); // ✅ substituído: input.value.toLowerCase()

    items.forEach(item => {
      const titleEl = item.querySelector('h2');
      const title = titleEl ? titleEl.innerText : ''; // ✅ removido .toLowerCase() para usar com removeAccentMark

      if (item instanceof HTMLElement) {
        const normalizedTitle = removeAccentMark(title); // ✅ normalização do título
        item.style.display = normalizedTitle.includes(term) ? 'block' : 'none'; // ✅ busca com acento ignorado
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', filterItens);
  }

  if (input) {
    input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        filterItens();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  search();
});
