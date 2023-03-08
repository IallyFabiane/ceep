const novaTarefa = document.querySelector('[data-form-button]');

const criaraTarefa = (event) => {
    event.preventDefault(); 
    const input = document.querySelector('[data-form-input');
    let value = input.value;
    console.log(value);

    const tarefa = document.querySelector('[data-task');
    const conteudo = `<p class='content'>${value}</p>`;

    tarefa.innerHTML = conteudo;
    input.value = '';
}


novaTarefa.addEventListener('click', criaraTarefa);