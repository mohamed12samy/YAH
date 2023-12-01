import { createSlice } from "@reduxjs/toolkit";
export interface Calibration {
  // id: string;
  // name: string;
  // images: any;
  // price: any;
  // path: string;
}

interface Store {
  calibrationFormData: any;
}
const initialState: Store = {
  calibrationFormData: [],
};

export const mineSlice = createSlice({
  name: "mine",
  initialState,
  reducers: {
    addToCalibrationForm: (state, action) => {
      // const item = state.productData.find(
      //   (item: Item) => item.id === action.payload.id
      // );
      // if (item) {
      // } else {
      state.calibrationFormData.push(action.payload);
      // }
    },
    deleteFromCalibrationForm: (state, action) => {
      // state.productData = state.productData.filter(
      //   (item: any) => item.id !== action.payload.id
      // );
    },
    resetCalibrationForm: (state, action) => {
      state.calibrationFormData = null;
    },
  },
});

export const {
  addToCalibrationForm,
  deleteFromCalibrationForm,
  resetCalibrationForm,
} = mineSlice.actions;
export default mineSlice.reducer;
