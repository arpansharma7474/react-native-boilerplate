import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICounter } from '../../models/reducers/count'

const initialState: ICounter = {
   count: 0
}

const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      incremented: (state, action: PayloadAction<number>) => {
         state.count += action.payload
      },
      decremented: (state, action: PayloadAction<number>) => {
         state.count -= 1
      }
   }
})

export default counterSlice
