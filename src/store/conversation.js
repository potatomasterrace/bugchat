import { createSlice } from '@reduxjs/toolkit'

const conversationSlice = createSlice(
    {
        name: 'conversation',
        initialState: {
            conversations: [],
            loading: true,
            dbVersion: 1,
        },
        reducers: {
            finishLoading(state, { payload: { resp } }) {
                return { ...state, ...resp, loading: false }
            }
        }
    }
)

export default conversationSlice