import * as actionType from './actionTypes'
const initialState = {
    channels:[]
}

const appReducer = (state=initialState, action)=>{
    switch(action.type){
        case actionType.ADD_CHANNEL : return {
            ...state,
            channels: action.value
        }
        default : return state
    }
}

export default appReducer