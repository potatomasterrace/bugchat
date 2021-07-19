import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice(
    {
        name: 'app',
        initialState: {
            friends: [],
            currentDuckIndex: -1,
            loading: true,
            intervalCounter:0,
        },
        reducers: {
            switchToConversation(state, { payload: { index } }) {
                return { ...state, currentDuckIndex: index }
            },
            finishLoading(state, {payload:{resp}}) {
                return { ...state, ...resp, loading: false,intervalCounter:state.intervalCounter}
            }
        }
    }
)

export default appSlice;