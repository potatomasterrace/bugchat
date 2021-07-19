import { createSlice } from '@reduxjs/toolkit'

const conversationSlice = createSlice(
    {
         name: 'conversation',
         initialState:{
             currentConversationIdx: -1,
             content: [
             ],
             loading:true,
         },
         reducers: {
            finishLoading(state,{payload:{resp}}){
                return {...state,content:resp,loading:false}
            },
            updateConversationIdx(state,{payload:{currentConversationIdx}}){
                return {...state,content:[],currentConversationIdx}
            }
         }
    }
)

export default conversationSlice