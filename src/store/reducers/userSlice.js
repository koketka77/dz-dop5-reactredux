import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: []
}
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAllUser: (state, action) => {
            state.user = action.payload
        },
        setUser: (state, action) => {
            state.user.push(action.payload)
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        clearList: (state) => {
            state.user.splice(0, state.length);
        }
    }
})
export const { setUser, clearList, setAllUser } = UserSlice.actions
export default UserSlice.reducer;
