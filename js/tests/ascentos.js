import { removeAccentMark } from '../search.js';

function testRemoveAccentMarkSearch() {
    const itens = ["têxtó", "com", "àscéntô"];
    const usuarysearch = "ascento";
  
    const result = itens.filter(item =>
      removeAccentMark(item).includes(removeAccentMark(usuarysearch))
    );
  
    const expected = ["àscéntô"];
  
    const passed = JSON.stringify(result) === JSON.stringify(expected);
  
    if (passed) {
      console.log("✅ Teste passou!");
    } else {
      console.error("❌ Teste falhou!");
      console.error("Esperado:", expected);
      console.error("Recebido:", result);
    }
  }
  
testRemoveAccentMarkSearch();