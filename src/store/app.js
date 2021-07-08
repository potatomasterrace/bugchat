import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice(
    {
        name: 'app',
        initialState: {
            friends: [
                {
                    name: 'Dr. Rubberduck',
                    image: '/ducky.jpg',
                },
                {
                    name: 'Donald Duck',
                    image: '/og_duck.png',
                },
            ],
            currentDuckIndex: 0,
            loading: false,
        },
        reducers: {
            switchToConversation(state, { payload: { index } }) {
                return { ...state, currentDuckIndex: index }
            },
            finishLoading(state, resp) {
                return { ...state, ...resp, loading: false }
            }
        }
    }
)

export default appSlice;