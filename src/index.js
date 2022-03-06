import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(Date.now());
      return [...state, { text: action.text, id: Date.now() }];
    case 'DELETE_TODO':
      console.log('wtf');
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const deleteTodo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  store.dispatch(deleteToDo(id));
  console.log('hi');
  console.log(store.getState());
  console.log(event.target.parentNode);
};

const addTodo = (text) => {
  store.dispatch(addToDo(text));
};

const paintTodo = () => {
  const todos = store.getState();
  list.innerHTML = '';

  todos.forEach((item) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'del';
    btn.addEventListener('click', deleteTodo);
    li.id = item.id;
    li.innerText = item.text;
    li.appendChild(btn);
    list.appendChild(li);
  });
};
store.subscribe(paintTodo);

const submit = (event) => {
  const todo = input.value;

  event.preventDefault();

  addTodo(todo);
  console.log(store.getState());
  input.value = '';
};

console.log(input.value);
form.addEventListener('submit', submit);
