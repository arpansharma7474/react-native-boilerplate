import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICounter } from '../../models/reducers/count';

const initialState: ICounter = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state, action: PayloadAction<undefined>) => {
      if (state.count !== 0) {
        state.count -= 1;
      }
    },
    decremented: (state, action: PayloadAction<undefined>) => {
      state.count -= 1;
    },
  },
});

export default counterSlice;
