function addTask() {
    // Obtendo o valor do input
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Verificando se o input não está vazio
    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    // Criando uma nova linha na tabela
    const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Criando as células para a tarefa e os botões de ação
    const taskCell = newRow.insertCell(0);
    const actionsCell = newRow.insertCell(1);

    // Preenchendo a célula da tarefa
    taskCell.textContent = taskText;

    // Criando o botão de completar tarefa
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.onclick = function() {
        taskCell.classList.toggle('completed');
    };

    // Criando o botão de remover tarefa
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1);
    };

    // Adicionando os botões na célula de ações
    actionsCell.appendChild(completeButton);
    actionsCell.appendChild(removeButton);

    // Limpando o input
    taskInput.value = '';
}
