import * as actionType from './actionTypes'
const initialState = {
    user:null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionType.LOGIN: return {user : action.payload}
        case actionType.LOGOUT: return {user : null}

        default : return state
    }
}

export default reducer