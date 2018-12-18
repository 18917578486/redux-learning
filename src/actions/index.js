export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextTodoId = 0;

export function addTodo (text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export function toggleTodo (index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter (filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}