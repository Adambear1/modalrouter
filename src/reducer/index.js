import {WatchBox, Bookshelf} from "../classes"
const data = {
    items: []
}

function reducer (state = data, {type, payload}){
    switch(type){
        case "ADD_ITEM":
            if(payload.type === "Book"){
                var isComplete = payload.isComplete ? true : false;
                var isGood = payload.isGood ? true : false
                return {...state, collection: [...state.items, {Book: new Bookshelf(payload.title, [isComplete, isGood]).addToCollection()}]}  
            }
            if(payload.type === "Watch"){
                var isNew = payload.isNew ? true : false;
                var isCollectable = payload.isCollectable ? true : false
                return {...state, collection: [...state.items, {Watch: new WatchBox(payload.title, [isNew, isCollectable]).addToCollection()}]}  
            }
        // case "DELETE_TASK":
        //     return {...state, items: state.items.slice(0, payload).concat(state.items.slice(payload + 1, state.items.length))}
            }
}

export default reducer