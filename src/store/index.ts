import { configureStore } from '@reduxjs/toolkit'
import hoveredMenuReducer from './slices/hoveredMenuSlice'

export const store = configureStore({
  reducer: {
    hoveredMenu: hoveredMenuReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];