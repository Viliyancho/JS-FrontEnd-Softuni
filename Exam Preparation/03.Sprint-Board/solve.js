const taskSections = {
    ToDo: document.querySelector("#todo-section .task-list"),
    'In Progress': document.querySelector("#in-progress-section .task-list"),
    'Code Review': document.querySelector("#code-review-section .task-list"),
    'Done': document.querySelector("#done-section .task-list")
}

const statusToNextStatusMap = {
    ToDo: "In Progress",
    'In Progress': "Code Review",
    'Code Review': "Done",
    'Done': "Close"
}

function attachEvents() {
    document.querySelector("#load-board-btn").addEventListener("click", loadTasks)
}

function loadTasks(){
    const tasks = fetch("http://localhost:3030/jsonstore/tasks/").then((res) => res.json()).then(console.log)

    Object.values(tasks).forEach((task) =>{
        const section = taskSections[task.status]
        const item = createElement("li", null, ["task"], null, section)
        createElement("h3", task.title, [], null, item)
        createElement("p", task.description, [], null, item)
        createElement("button", `Move to ${statusToNextStatusMap[task.status]}`, [], null, item)
    })
}






function createElement(type, textContent, classes, id, parent){

    const element = document.createElement(type)

    if(textContent){
        element.textContent = textContent;
    }

    if(classes && classes.length > 0){
        element.classList.add(...classes);
    }

    if(id){
        element.setAttribute("id", id)
    }

    if(parent){
        parent.appendChild(element);
    }

    return element;
 }

attachEvents();