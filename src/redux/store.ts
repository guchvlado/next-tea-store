import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./reducers/filterSlice";
import { teaSlice } from "./reducers/teaSlice";

export const store = configureStore({
    reducer: {
        tea: teaSlice.reducer,
        filter: filterSlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch