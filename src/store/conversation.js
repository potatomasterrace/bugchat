import { createSlice } from '@reduxjs/toolkit'

const conversationSlice = createSlice(
    {
         name: 'conversation',
         initialState:{
             content: [],
             loading:true,
         },
         reducers: {
            send_message(state,{payload:{index}}) {
                return {...state,currentConversationIndex:index}
            },
            finishLoading(state,resp){
                return {...state,...resp,loading:false}
            },
         }
    }
)

export default conversationSlice