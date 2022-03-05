import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = (count = 0, action) => {
  switch (action.type) {
    case 'Add':
      return (count += 1);

    case 'Minus':
      return (count -= 1);
    default:
      return count;
  }

  if (action.type === 'Add') {
    return (count += 1);
  } else if (action.type === 'Minus') {
    return (count -= 1);
  }
};
const store = createStore(reducer);

store.dispatch({ type: 'Add' });
store.dispatch({ type: 'Add' });

number.innerText = store.getState();
store.subscribe(() => {
  number.innerText = store.getState();
});

const handleAdd = () => {
  store.dispatch({ type: 'Add' });
  // number.innerText = store.getState();
};

const handleMinus = () => {
  store.dispatch({ type: 'Minus' });
  // number.innerText = store.getState();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
