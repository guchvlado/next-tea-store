import { createSlice } from "@reduxjs/toolkit";

interface FilterSliceState {
    activeSearch: string;
    activeCategory: number;
    activeSortBy: string;
    activeOrder: string;
}

const initialState: FilterSliceState = {
    activeCategory: 0,
    activeOrder: 'inc',
    activeSearch: '',
    activeSortBy: 'title'
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveSearch: (state, action) => {
            state.activeSearch = action.payload
        },
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setActiveSortBy: (state, action) => {
            state.activeSortBy = action.payload
        },
        setActiveOrder: (state, action) => {
            state.activeOrder = action.payload
        },
    }
})

export const {
    setActiveCategory,
    setActiveOrder,
    setActiveSearch,
    setActiveSortBy
} = filterSlice.actions