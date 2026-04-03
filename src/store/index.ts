import { configureStore } from '@reduxjs/toolkit'
import hoveredMenuReducer from './slices/hoveredMenuSlice'
import filterMenuReducer from './slices/clickFilterButtonSlice'
import filterFloatingMenuReducer from './slices/clickFilterFloatingButton'
import clickAddItemMobile from './slices/clickAddItemMobile'
import clickWishlistReducer from './slices/clickWishlistSlice'
import clickCartReducer from './slices/clickCartSlice'
import clickLoginReducer from './slices/clickLoginSlice'

export const store = configureStore({
  reducer: {
    hoveredMenu: hoveredMenuReducer,
    filterDrawer: filterMenuReducer,
    filterFloatingDrawer: filterFloatingMenuReducer,
    mobileAddProductButton: clickAddItemMobile,
    wishlistDrawer: clickWishlistReducer,
    cartDrawer: clickCartReducer,
    loginDialog: clickLoginReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];