//Constante que detem o nome da action
export const ADD_TODO = 'ADD_TODO';

//criar o let para o incremento da lista de Todos
let nextTodoId = 0;

export function addTodo(text){
    return{
        type: ADD_TODO,
        id: nextTodoId ++,
        text
    }
};