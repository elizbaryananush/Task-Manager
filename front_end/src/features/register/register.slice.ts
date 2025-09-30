import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  step: 1,
  userData: null,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { setStep, setUserData } = registerSlice.actions
export default registerSlice.reducer

