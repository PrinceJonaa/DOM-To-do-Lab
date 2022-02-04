/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

let todoList = document.querySelector('#todo-list');
let btnAdd = document.querySelector('#submit-button');
let input = document.querySelector('#textbox');
let resetBtn = document.querySelector('#clear-button');
let accordionAdd = document.querySelector('#accordion-body');

/*----------------------------- Event Listeners -----------------------------*/

btnAdd.addEventListener('click', function(event) { 
    event.preventDefault();
    let newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');
    newTodo.textContent = input.value;
    todoList.appendChild(newTodo);
    input.value = '';
}
);

resetBtn.addEventListener('click', function(event) {
    event.preventDefault();
    todoList.innerHTML = '';
}
);




/*-------------------------------- Functions --------------------------------*/

if {
    
}