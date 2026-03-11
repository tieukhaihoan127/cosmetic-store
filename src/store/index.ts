import { configureStore } from '@reduxjs/toolkit'
import hoveredMenuReducer from './slices/hoveredMenuSlice'
import filterMenuReducer from './slices/clickFilterButtonSlice'
import filterFloatingMenuReducer from './slices/clickFilterFloatingButton'

export const store = configureStore({
  reducer: {
    hoveredMenu: hoveredMenuReducer,
    filterDrawer: filterMenuReducer,
    filterFloatingDrawer: filterFloatingMenuReducer
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];