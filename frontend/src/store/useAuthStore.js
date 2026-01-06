import {create} from "zustand"

export const useAuthStore=create((set,get)=>({
    authUser:{name:"Aniket",_id:123,age:55},
    isLoading:false,
    isLoggedIn:false,


    login:()=>{
        console.log("we just Logged In");
        set({isLoggedIn:true});
    }
}))
