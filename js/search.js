const button = document.getElementById('searchButton');
const input = document.getElementById('searchInput');
const listItems = document.querySelectorAll('#itemList li');
const resultado = document.getElementById('resultado');

button.addEventListener('click', () => {
  const termo = input.value.toLowerCase();
  let encontrou = false;

  listItems.forEach(item => {
    const textoItem = item.textContent.toLowerCase();
    if (textoItem.includes(termo)) {
      item.classList.remove('hidden');
      encontrou = true;
    } else {
      item.classList.add('hidden');
    }
  });

  if (encontrou) {
    resultado.textContent = '';
  } else {
    resultado.textContent = 'Item não encontrado.';
  }
});