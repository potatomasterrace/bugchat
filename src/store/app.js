import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice(
    {
        name: 'app',
        initialState: {
            friends: [],
            currentDuckIndex: 0,
            loading: true,
        },
        reducers: {
            switchToConversation(state, { payload: { index } }) {
                return { ...state, currentDuckIndex: index }
            },
            finishLoading(state, {payload:{resp}}) {
                return { ...state, ...resp, loading: false }
            }
        }
    }
)

export default appSlice;