import { CriarItemDaLista } from './scripts/criarItemDaLista.js';
import verificarListaVazia from './scripts/VerificarListaVazia.js';

const botaoAdicionar = document.getElementById('adicionar-item');
const listaCompras = document.getElementById('lista-de-compras');

botaoAdicionar.addEventListener('click', (evento) => {

    evento.preventDefault();

    const itemLista = CriarItemDaLista();

    listaCompras.appendChild(itemLista);

    verificarListaVazia(listaCompras);

});

















