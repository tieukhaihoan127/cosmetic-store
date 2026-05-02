import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductSliceProps {
    isOpen: boolean;
    method: string;
    value: string;
};

const initialState : ProductSliceProps = {
    isOpen: false,
    method: '',
    value: 'delivery'
};

const product = createSlice({
    name: 'productDrawer',
    initialState,
    reducers: {
        openDrawer: (state, action: PayloadAction<string>) => {
            state.isOpen = true
            state.method = action.payload
        },
        closeDrawer: (state) => {
            state.isOpen = false
            state.method = ''
        },
        changeDeliveryMethod : (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { openDrawer, closeDrawer, changeDeliveryMethod } = product.actions;
export default product.reducer;