import actionTypes from './actionTypes';
import {getAllCodeService,createNewUserService} from "../../services/userServive"

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
    type: actionTypes.FETCH_POSITION_FAILDED
})
export const fetchRoleSuccsess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data:roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
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

 export const createNewUser=(data)=>{
    return async(dispatch,getState)=>{
        try{
            let res=await createNewUserService(data) ;
            console.log('check redux',res)
            if(res && res.errCode===0){
             dispatch(saveUserSuccess())
            }else{
             dispatch(saveUserFailed())
            }
        }catch(e){
            
         dispatch(saveUserFailed())
            
            console.log(e)
        }
    }
 }

 export const saveUserSuccess=()=>({
    type:'CREATE_USER_SUCCESS'
 })
 export const saveUserFailed=()=>({
    type:'CREATE_USER_FAILDED'
 })

//start doing end



