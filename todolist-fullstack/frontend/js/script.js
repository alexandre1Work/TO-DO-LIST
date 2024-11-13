//Função para extrair as task atráves de um arquivo json
const fetchTask = async () => {
    const response = await fetch('localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
}

//função para criar uma função atráves da TAG passada
const createElement = (tag) => {
    const element = document.createElement(tag);
    return element;
}

const createRow = (task) => {
    const tr = createElement('tr');
}