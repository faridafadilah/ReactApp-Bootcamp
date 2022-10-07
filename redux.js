const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	value: 1,
	age: 17,
	count: 10,
}

//membuat reducer
const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_AGE':
			return{
				...state,
				age: state.age + 1
		}
		case 'CHANGE_VALUE':
			return{
				...state,
				value: state.value + action.newValue
			}
		case 'ADD_COUNT':
			return{
				...state,
				count: state.count - 1
			}
		default:
			return state;
	}
}

//membuat store
const store = createStore(rootReducer);
console.log(store.getState());

//membuat subscription
store.subscribe(() => {
	console.log('change:', store.getState());
});

//membuat dispatching 
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 10});
store.dispatch({type: 'ADD_COUNT'});
console.log(store.getState());