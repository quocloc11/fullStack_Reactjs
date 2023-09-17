import actionTypes from './actionTypes';
import {getAllCodeService} from "../../services/userServive"

export const fetchGenderStart = () => {
    
   return async(dispatch,getState)=>{
       try{
        dispatch({
            type:actionTypes.FETCH_GENDER_START
        })
           let res=await getAllCodeService("GENDER");
           if(res && res.errCode===0){
            dispatch(fetchGenderSuccess(res.data))
           }else{
            dispatch(fetchGenderFailed())
           }
       }catch(e){
           
        dispatch(fetchGenderFailed())
           
           console.log(e)
       }
   }

}
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})

export const fetchPositionSuccsess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data:positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})
export const fetchRoleSuccsess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data:roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})
export const fetchPositionStart = () => {
    
    return async(dispatch,getState)=>{
        try{
      
            let res=await getAllCodeService("POSITION");
            if(res && res.errCode===0){
             dispatch(fetchPositionSuccsess(res.data))
            }else{
             dispatch(fetchPositionFailed())
            }
        }catch(e){
            
         dispatch(fetchPositionFailed())
            
            console.log(e)
        }
    }
 
 }
export const fetchRoleStart = () => {
    
    return async(dispatch,getState)=>{
        try{
            let res=await getAllCodeService("ROLE");
            if(res && res.errCode===0){
             dispatch(fetchRoleSuccsess(res.data))
            }else{
             dispatch(fetchRoleFailed())
            }
        }catch(e){
            
         dispatch(fetchRoleFailed())
            
            console.log(e)
        }
    }
 
 }

//start doing end



