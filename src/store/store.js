import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { reducer } from '../store/reducers/reducer'

const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: { reducer },
})

export const setupStore = () => {
  return configureStore({
    reducer: { rootReducer },
  })
}
