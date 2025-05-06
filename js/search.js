// export por conta que testes usarão esta função
export function removeAccentMark(str){
  /*
  * NOTE: primeiramente com normalize separa os acentos do texto, exemplo:
  * maçã retorna m + a + ç + a + ~
  * e o replace junta tudo e retira o acento, exemplo:
  * maçã retorna maca
  */ 
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
}

function search() {
  //variaveis referentes aos elementos do html
  const input = document.querySelector('.searchInput');
  const searchBtn = document.querySelector('.searchBtn');
  const items = document.querySelectorAll('.item');

  //função que filtra os itens
  function filterItens() {
    //verifica se o input existe e é um elemento HTMLInputElement
    if (!input || !(input instanceof HTMLInputElement)) return;

    //remove os acentos do input e transforma em minusculo
    const term = removeAccentMark(input.value); 

    //repete a verificação se eles correspondem a pesquisa 
    items.forEach(item => {
      //busca o titulo do item
      const titleEl = item.querySelector('h2');
      //obtem o titulo e o define como string vazia se não houvefr titulo
      const title = titleEl ? titleEl.innerText : ''; 

      //verifica se o item não é um html vazio
      if (item instanceof HTMLElement) {
        //remove os ascentos e transforma em minusculo
        const normalizedTitle = removeAccentMark(title); 
        //verifica se o titulo contem o termo
        item.style.display = normalizedTitle.includes(term) ? 'block' : 'none';
      }
    });
  }

  //função que verifica quando o botão é clicado
  if (searchBtn) {
    searchBtn.addEventListener('click', filterItens);
  }

  //quando ENTER é pressionado ele realiza a pesquisa
  if (input) {
    input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        filterItens();
      }
    });
  }
}

//aguarda o carregamento do DOM para executar a função 
//o dom é como se você estivesse esperando o html carregar para executar o js
document.addEventListener('DOMContentLoaded', () => {
  search();
});
