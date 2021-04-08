// ! initialState
const tasks = [
    {
        id: 1,
        todo: 'buy bread',
        done: false,
    },
]

const todoReducer = (state = tasks, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }
    return state
}

let todos = todoReducer()
const newTask = {
    id: 2,
    todo: 'buy milk',
    done: false,
}

const addTaskAction = {
    type: 'add',
    payload: newTask,
}

todos = todoReducer(todos, addTaskAction)
console.log(todos)
