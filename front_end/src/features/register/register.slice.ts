import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  setLoading,
  setError,
  resetForm,
} = registerSlice.actions;

export default registerSlice.reducer;
