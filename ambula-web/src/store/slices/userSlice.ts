import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  mobileNumber: string;
  otp: string;
  profileDetails: {
    name: string;
    email: string;
  };
}

const initialState: UserState = {
  mobileNumber: '',
  otp: '',
  profileDetails: {
    name: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setProfileDetails: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.profileDetails = action.payload;
    },
  },
});

export const { setMobileNumber, setOtp, setProfileDetails } = userSlice.actions;

export default userSlice.reducer;
