import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './ticketsSlice'

export const store = configureStore({
  reducer: rootReducer,
})
