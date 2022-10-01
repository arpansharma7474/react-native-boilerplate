import { createSlice } from '@reduxjs/toolkit';

const persistSlice = createSlice({
  name: 'persistSlice',
  initialState: {
    userId: 'default',
  },
  reducers: {},
});

export default persistSlice;
