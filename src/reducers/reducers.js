import {combineReducers} from 'redux';
import {ADD_TODO} from '../actions/actions';

//função para criação de cada um dos itens da lista
function todo(state, action){
    //verificar o que a action esta fazendo
    switch(action.type){
        case ADD_TODO:
            return{
                id: action.id,
                text: action.text,
            }
            default:
                return state
    }
}

function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
            default:
                return state
    }
}

//Constante para receber a "junção" a partir da função
//combineReducers
const todoApp = combineReducers({
    todos
});

export default todoApp;