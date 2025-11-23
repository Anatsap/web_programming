import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: { selectedOption: '' },
  reducers: {
    setselectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setselectedOption } = formSlice.actions;
export default formSlice.reducer;