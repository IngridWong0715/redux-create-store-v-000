function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action)
    render();
  }

  function getState(){
    return state;
  }

  return { dispatch, getState};
}

function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: store.getState().count + 1}
      default:
        return state;
    }
  }

function render(){
  let container = document.getElementById('container')
  container.textContent = store.getState().count
}

let store = createStore(changeState)
store.dispatch({type: '@@INIT'})

let button = document.getElementById('button');

button.addEventListener('click', function(){
  store.dispatch({type: 'INCREASE_COUNT'})
})
