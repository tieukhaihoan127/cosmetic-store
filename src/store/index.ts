import { configureStore } from '@reduxjs/toolkit'
import hoveredMenuReducer from './slices/hoveredMenuSlice'
import filterMenuReducer from './slices/clickFilterButtonSlice'
import filterFloatingMenuReducer from './slices/clickFilterFloatingButton'
import clickAddItemMobile from './slices/clickAddItemMobile'
import clickWishlistReducer from './slices/clickWishlistSlice'

export const store = configureStore({
  reducer: {
    hoveredMenu: hoveredMenuReducer,
    filterDrawer: filterMenuReducer,
    filterFloatingDrawer: filterFloatingMenuReducer,
    mobileAddProductButton: clickAddItemMobile,
    wishlistDrawer: clickWishlistReducer
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];