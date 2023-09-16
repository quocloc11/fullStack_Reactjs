import actionTypes from '../actions/actionTypes';

const initialState = {
    genders:[],
    role:[],
    positions:[]
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('start11',action)
            return {
                ...state,

            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState={...state}
            copyState.genders=action.data

            return {
                    ...copyState,
    
                }
         case actionTypes.FETCH_GENDER_FAIDED:
            console.log('faided',action)

            return {
                        ...state,
        
                    }
        default:
            return state;
    }
}

export default adminReducer;