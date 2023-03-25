import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  timeOn: number;
  text: string;
  isSuccess: boolean;
  isOn: boolean;
};

export const initialState: InitialState = {
  timeOn: 0,
  text: "",
  isSuccess: false,
  isOn: false,
};

const toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setTriggerToast(state, action: PayloadAction<any>) {
      state.timeOn = action.payload.timeOn;
      state.text = action.payload.text;
      state.isSuccess = action.payload.isSuccess;
      state.isOn = action.payload.isOn;
    },
  },
});

export const { setTriggerToast } = toast.actions;

export default toast.reducer;
