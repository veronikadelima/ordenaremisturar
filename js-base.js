import { bubble_sort, selection_sort, quick_sort, shuffle } from './ordenando.js';

export const add = () => {
    const valorInput = document.getElementById('valor');
    const listaValores = document.getElementById('valores');
    const node = document.createElement('li');
    const textoNode = document.createTextNode(valorInput.value);
    node.appendChild(textoNode);
    listaValores.appendChild(node);
    valorInput.value = ''; // Limpa o campo de entrada
};

export const ordenar = () => {
    const listaValores = document.getElementById('valores');
    const algoritmoSelect = document.getElementById('algoritmo');
    const numeros = Array.from(listaValores.children).map(li => Number(li.innerHTML));
    let ordenados;

    switch (algoritmoSelect.value) {
        case 'bubble':
            ordenados = bubble_sort(numeros);
            break;
        case 'selection':
            ordenados = selection_sort(numeros);
            break;
        case 'quick':
            ordenados = quick_sort(numeros, 0, numeros.length - 1);
            break;
    }

    listaValores.innerHTML = ordenados.map(num => `<li>${num}</li>`).join('');
};

export const misturar = () => {
    const listaValores = document.getElementById('valores');
    const numeros = Array.from(listaValores.children).map(li => Number(li.innerHTML));
    shuffle(numeros, 10); // Trocar 10 vezes
    listaValores.innerHTML = numeros.map(num => `<li>${num}</li>`).join('');
};
