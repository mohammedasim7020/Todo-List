import { configureStore } from '@reduxjs/toolkit'

const INITIAL_STATE ={
    count:0
}

export const store = configureStore({
    reducer:(state , action)=>{
        const {type, payload} = action;
        switch(type){
            case'increment' :
            return{
                count : payload.count + 1 
            }
            case 'decrement':
                return{
                    count : payload.count - 1
                }
        }
        return INITIAL_STATE
    }
})