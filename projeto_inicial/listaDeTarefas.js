( () => {
    const novaTarefa = document.querySelector('[data-form-button]');

    const criarTarefa = (event) => {
        event.preventDefault(); 
        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class='content'>${value}</p>`;
        tarefa.innerHTML = conteudo;
        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);
        input.value = '';
    }


    novaTarefa.addEventListener('click', criarTarefa);


    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button');
        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = 'Concluir';
        botaoConclui.addEventListener('click', concluirTarefa);

        return botaoConclui;
    }


    const concluirTarefa = (event) => {
        const botaoConclui = event.target;
        const tarefaCompleta = botaoConclui.parentElement;
        tarefaCompleta.classList.toggle('done');
    }

    const  BotaoDeleta = () => {
      const botaoDeleta = document.createElement('button');
      botaoDeleta.innerText= 'Deletar';
      botaoDeleta.addEventListener('click', deletarTarefa);

      return botaoDeleta;
    }

    const deletarTarefa = (event) => {
        const botaodeleta = event.target;
        const tarefaCompleta = botaodeleta.parentElement;
        tarefaCompleta.remove();
        return botaoDeleta;
    }

})();