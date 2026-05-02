import { configureStore } from '@reduxjs/toolkit';
import hoveredMenuReducer from './navigation.slice';
import { cartReducer } from '../../features/cart';
import { loginReducer } from '../../features/auth';
import { wishlistReducer } from '../../features/wishlist';
import { filterReducer } from '../../features/filter';
import { productReducer } from '../../features/product';
import { storeReducer } from '../../features/location';
import { reviewReducer } from '../../features/review';
import { orderReducer } from '../../features/order';
import { profileReducer } from '../../features/profile';

export const store = configureStore({
  reducer: {
    hoveredMenu: hoveredMenuReducer,
    filterDrawer: filterReducer,
    productDrawer: productReducer,
    wishlistDrawer: wishlistReducer,
    cartDrawer: cartReducer,
    loginDialog: loginReducer,
    storeDialog: storeReducer,
    reviewDialog: reviewReducer,
    orderDialog: orderReducer,
    profileDialog: profileReducer
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];