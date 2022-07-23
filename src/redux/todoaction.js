export const ADD_ITEMS = "ADD_ITEMS";
export const DELETE_ITEMS = "DELETE_ITEMS";
export const UPDATA_ITEMS = "UPDATA_ITEMS";
export const COMPLETE_ITEMS = "COMPLETE_ITEMS"; 



export const addItem =(el)=>{
    return{
        type : ADD_ITEMS,
       payload: el
    }
    
}
export const deleteItem =(id)=>{
    return{
        type : DELETE_ITEMS,
        payload:id
       
    }
    
}

export const updateItem =(itemID,text)=>{
    return{
        type : UPDATA_ITEMS,
         payload:{
            id:itemID,
            text
        }  
    }
}

export const completeItem =(id)=>{
    return{
        type :COMPLETE_ITEMS,
         payload:id,
        
    }
}

 