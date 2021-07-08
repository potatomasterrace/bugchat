import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice(
    {
         name: 'app',
         initialState:{
             conversations: [
                'Dr. Rubberduck',
                'Iron man',
             ],
             currentConversationIndex:0,
             loading:true,
         },
         reducers: {
            switchToConversation(state,{payload:{index}}) {
                return {...state,currentConversationIndex:index}
            },
            finishLoading(state,resp){
                return {...state,...resp,loading:false}
            }
         }
    }
)

export default appSlice;