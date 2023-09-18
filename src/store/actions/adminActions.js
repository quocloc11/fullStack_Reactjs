import actionTypes from './actionTypes';
import {getAllCodeService,createNewUserService,getAllUsers,deleteUserService
     ,editUserService,
} from "../../services/userServive"
import {toast} from "react-toastify"
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
            toast.success("Create anew user succeed!")
            if(res && res.errCode===0){
             dispatch(saveUserSuccess())
             dispatch(fetchAllUsersStart())
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
    type:actionTypes.CREATE_USER_SUCCESS
 })
 export const saveUserFailed=()=>({
    type:actionTypes.CREATE_USER_FAILDED
 })

//start doing end

export const fetchAllUsersStart=()=>{
    return async (dispatch,getState)=>{
        try{
            let res=await getAllUsers('ALL') ;
            if(res && res.errCode===0){
             dispatch(fetchAllUsersSuccess(res.users.reverse()))
            }else{
            toast.error("Fetch all user error!")

             dispatch(fetchAllUsersFailed())
            }
        }catch(e){
            toast.error("Fetch all user error!")

         dispatch(fetchAllUsersFailed())
            console.log(e)
        }
    }
 }
export const fetchAllUsersSuccess=(data)=>({
    type:actionTypes.FETCH_ALL_USERS_SUCCESS,
    users:data
})
export const fetchAllUsersFailed=()=>({
    type:actionTypes.FETCH_ALL_USERS_FAILDED
})
export const deleteAUser=(userId)=>{
    return async(dispatch,getState)=>{
        try{
            let res=await deleteUserService(userId) ;
            toast.success("Delete the user succeed!")
            if(res && res.errCode===0){
             dispatch(deleteUserSuccess())
             dispatch(fetchAllUsersStart())
            }else{
            toast.error("Delete the user error!")
             dispatch(deleteUserFailed())
            }
        }catch(e){
            toast.error("Delete the user error!")
            dispatch(deleteUserFailed())
            
            console.log(e)
        }
    }
 }

 export const deleteUserSuccess=()=>({
    type:actionTypes.DELETE_USER_SUCCESS
 })
 export const deleteUserFailed=()=>({
    type:actionTypes.DELETE_USER_FAILDED
 })
 export const editAUser=(data)=>{
    return async(dispatch,getState)=>{
        try{
            let res=await editUserService(data) ;
            toast.success("Update the user succeed!")
            if(res && res.errCode===0){
             dispatch(editUserSuccess())
             dispatch(fetchAllUsersStart())
            }else{
            toast.error("Update the user error!")
             dispatch(editUserFailed())
            }
        }catch(e){
            toast.error("Update the user error!")
            dispatch(editUserFailed())

            
            console.log(e)
        }
    }
 }
 export const editUserSuccess =()=>({
    type:actionTypes.EDIT_USER_SUCCESS
 })
 export const editUserFailed =()=>({
    type:actionTypes.EDIT_USER_FAILDED
 })