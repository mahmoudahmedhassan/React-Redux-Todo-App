import { ADD_ITEMS, DELETE_ITEMS, UPDATA_ITEMS,COMPLETE_ITEMS } from "../redux/todoaction";

const INITIAL_STATE = [];
const reducer = (state = INITIAL_STATE, action) => {
  let newTodos;

  switch (action.type) {

//Adding todos

    case ADD_ITEMS:
      newTodos = [...state, action.payload];
      return newTodos;

   //Remove todos

    case DELETE_ITEMS:
      newTodos = [...state];
      newTodos = state.filter((el) => el.id !== action.payload);
      return newTodos;

       //Update todos

       case UPDATA_ITEMS:
        newTodos = state;
         newTodos =state.map(todo => ( todo.id === action.payload.id ? {...todo , text:action.payload.text } :todo));
          return newTodos;

        // return state.map(todo =>{
        //   if(todo.id===action.payload.id){
        //     console.log(action.payload)
        //     return{
        //       ...todo,
        //       text:action.payload.text,
      
        //     };
        //   }
        //   return todo;

        // }) 


    //completed
        case COMPLETE_ITEMS:
          newTodos = state;
          state.map(todo => (todo.id === action.payload ? {...todo, complete:true } :todo))
          console.log(action.payload)
          return newTodos;
  
    default:
      return state;
  }
};

export default reducer;
