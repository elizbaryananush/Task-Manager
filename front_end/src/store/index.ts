// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../store/features/register/register.slice'

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }) 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
