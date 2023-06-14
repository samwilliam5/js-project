const todo = document.querySelector('.add');
const TodoUL = document.querySelector('.todos');
const todoDelete = document.querySelectorAll('.delete');
const search = document.querySelector('.search .form-control');
console.log(search);

const todoValidation = /^[a-zA-z ]{1,}$/;
const addTodo = (todoInput)=>{
    const todoHTML = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todoInput}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  TodoUL.innerHTML += todoHTML;

};

todo.addEventListener('submit', e=>{
    e.preventDefault();
    const todoInput = todo.add.value.trim();
    if(todoValidation.test(todoInput)){
        addTodo(todoInput);
    }
});

TodoUL.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const searchInputReuse = (searchInput)=>{
    Array.from(TodoUL.children)
    .filter(todo=>!todo.textContent.toLowerCase().includes(searchInput))
    .forEach(todo =>todo.classList.add('filtered'));
    Array.from(TodoUL.children)
    .filter(todo=>todo.textContent.toLowerCase().includes(searchInput))
    .forEach(todo =>todo.classList.remove('filtered'));
};

search.addEventListener('keyup', e=>{
   const searchInput = e.target.value.trim().toLowerCase();
   searchInputReuse(searchInput);
});