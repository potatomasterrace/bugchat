import { createSlice } from '@reduxjs/toolkit'

const conversationSlice = createSlice(
    {
         name: 'conversation',
         initialState:{
             content: [
                 [],
                 [],
             ],
             loading:true,
         },
         reducers: {
            finishLoading(state,{payload:{resp}}){
                return {...state,content:resp.content,loading:false}
            },
         }
    }
)

export default conversationSlice