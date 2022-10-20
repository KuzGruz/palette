import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { colorReducer, colorStore } from './color/color.slice';

const rootReducer = combineReducers({
    [colorStore]: colorReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


