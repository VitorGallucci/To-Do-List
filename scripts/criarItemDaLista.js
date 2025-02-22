import GerarDiaDaSemana from './GerarDiaDaSemana.js';

const inputItem = document.getElementById('input-item');
let contador = 0;

export function CriarItemDaLista () {

    if (inputItem.value === "") {
        alert('Digite um item para adicionar a lista');
        return;
    }

    const itemLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener('click', function() {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through';
            nomeItem.style.color = 'var(--cor-cinza)';
        } else {
            nomeItem.style.textDecoration = 'none';
            nomeItem.style.color = 'var(--cor-preta)';
        }
    })

    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);

    itemLista.appendChild(containerItemLista);

    const dataCompleta = GerarDiaDaSemana();

    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');

    itemLista.appendChild(itemData)

    return itemLista;

}