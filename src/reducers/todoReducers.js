const initialState = {
    list: [
        {id:1, data:"first"},
        {id:2, data:"second"}
    ]
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


            case "EDIT_TODO":
                const newtest = [...state.list]

                let list = newtest.map(event => {
                    if (event.id === action.payload.id){
                        event.data = action.payload.data;
                        return event;
                    }
                    return event;
                })
                return {...state, list}

                case "CHECKED":
                    const forCheck = [...state.list].map(event => {
                        console.log(event.id,action.payload)
                        if (event.id === action.payload){
                            event.checked = !event.checked ;
                            return event;
                        }
                        return event;
                    })
                    return {...state, list: forCheck}
 


                case "DELETE_ALL":
                    const forChecke = [...state.list].filter((event) => {
                      return event.checked !== true;
                    })
                    return{
                        ...state,
                        list: forChecke
                    }


        default: return state;
       
    }


}

export default todoReducers; 