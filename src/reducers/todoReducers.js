const initialState = {
    list: []
}

const todoReducers = (state= initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": 
            const { id , data} = action.payload;
            const todo = [...state.list];
            todo.push({id:id, data: data})
            return {
                ...state,
                list: todo
            }

        case "DELETE_TODO":
            const newList = state.list.filter((element)=> element.id !== action.id)
            return{
                ...state,
                list: newList
            }


            // case "EDIT_TODO":
            //     const editOne = state.list.find((element) =>  element.id === action.id );
            //     console.log(editOne);
            //     return{ list: id}

        default: return state;
       
    }


}

export default todoReducers; 