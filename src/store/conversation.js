import { createSlice } from '@reduxjs/toolkit'

const conversationSlice = createSlice(
    {
         name: 'conversation',
         initialState:{
             currentConversationIdx: -1,
             content: [
             ],
             loading:true,
             intervalCounter:0,
         },
         reducers: {
            finishLoading(state,{payload:{resp}}){
                return {...state,content:resp,intervalCounter:state.intervalCounter+1,loading:false}
            },
            updateConversationIdx(state,{payload:{currentConversationIdx}}){
                return {...state,content:[],currentConversationIdx}
            }
         }
    }
)

export default conversationSlice