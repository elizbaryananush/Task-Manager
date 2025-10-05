import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { registerInitialState } from '../../../types/state/register/rootRegister.type'
import { FirstStepState } from '../../../types/state/register/registerFirstStep.type'
import { SecondStepState } from '../../../types/state/register/registerSecondStep.type'

const initialState: registerInitialState = {
  step: 2,
  userData: {
    firstStepData: {
      state: {
        name: '',
        username: '',
        password: '',
      },
      massage: '',
      status: null,
    },
    secondStepData: {
      state: {
        email: '',
      },
      massage: '',
      status: null,
    },
    thirdStepData: {
      state: {
        verificationCode: null,
      },
      massage: '',
      status: null,
    },
  },
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
    updateFirstStepField: (
      state,
      action: PayloadAction<{ field: keyof FirstStepState; value: string }>
    ) => {
      state.userData.firstStepData.state[action.payload.field] =
        action.payload.value
    },
    updateSecondStepField: (
      state,
      action: PayloadAction<{ field: keyof SecondStepState; value: string }>
    ) => {
      state.userData.secondStepData.state[action.payload.field] =
        action.payload.value
    },
  },
})

export const {
  setStep,
  setUserData,
  updateFirstStepField,
  updateSecondStepField,
} = registerSlice.actions
export default registerSlice.reducer
