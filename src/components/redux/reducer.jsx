
const initialState = {
    count: 0
}

export default function reducer(state = initialState, action){
    if(action.type === 'ADD'){
       return {...state, count: state.count + action.payload} 
    }else if(action.type === 'SUBTRACT' && state.count > 0){
        return{ ...state, count: state.count - action.payload}
    }else if(action.type === 'ADD10'){
        return{ ...state, count: state.count + action.payload}
    }else if(action.type === 'SUBTRACT10' && state.count > 0){
        return{ ...state, count: state.count - action.payload}
    }else if(action.type === 'RESET'){
        return {count: 0}
    }
    return state;
}