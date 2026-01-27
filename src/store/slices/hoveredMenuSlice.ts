import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface HoverdMenuState {
    hoveredCategory: string | null;
}

const initialState : HoverdMenuState = {
    hoveredCategory: null
};

const hoveredMenuSlice = createSlice({
    name: 'hoveredMenu',
    initialState,
    reducers: {
        setHoveredCategory: (state, action: PayloadAction<string | null>) => {
            state.hoveredCategory = action.payload;
        },
        clearHoveredCategory: (state) => {
            state.hoveredCategory = null;
        }
    }
});

export const { setHoveredCategory, clearHoveredCategory } = hoveredMenuSlice.actions;
export default hoveredMenuSlice.reducer;

