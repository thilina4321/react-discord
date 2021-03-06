import * as actionType from './actionTypes'
const initialState = {
    channels:[],
    messages:[]
}

const appReducer = (state=initialState, action)=>{
    switch(action.type){
        case actionType.ADD_CHANNEL : return {
            ...state,
            channels: action.value
        }
        case actionType.ADD_MESSAGES : {
            return {
            ...state,
            messages: action.value
        }
    }
        default : return state
    }
}

export default appReducer