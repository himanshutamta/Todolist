export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }

    }
}

export const deleteTodo = (id) => {
    return{
        type: "DELETE_TODO",
        id
    }
}

export const editTodo = (data) => {
    return {
        type: "EDIT_TODO",
        payload: data
    }
}

export const deleteAll = () => {
    return{
        type : "DELETE_ALL",

    }
}
export const checked = (id) => {
    return{
        type: "CHECKED",
        payload :id
    }
}