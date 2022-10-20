import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColorState } from './color.models';
import { generateId, generateRandomColor } from '../../utils';

export const colorStore = 'color';

const initialState: ColorState = {
    colors: [],
    lastId: null
};

const colorSlice = createSlice({
    name: colorStore,
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const id = generateId();
            state.colors.push({id, color: action.payload});
            state.lastId = id;
        },
        edit: (state, action: PayloadAction<{ id: string, color: string }>) => {
            const candidate = state.colors.find(c => c.id === action.payload.id);
            if (candidate) {
                candidate.color = action.payload.color;
            }
        },
        addRandom: (state) => {
            const id = generateId();
            const color = generateRandomColor();
            state.colors.push({id, color});
            state.lastId = id;
        },
        remove: (state, action: PayloadAction<string>) => {
            state.colors = state.colors.filter(color => color.id !== action.payload);
        },
        markAsCheckedId: (state, action: PayloadAction<string>) => {
            if (state.lastId === action.payload) {
                state.lastId = null;
            }
        }
    }
});

export const {
    reducer: colorReducer,
    actions: {
        add: addColor,
        remove: removeColor,
        addRandom: addRandomColor,
        edit: editColor,
        markAsCheckedId: markAsCheckedIdColor
    }
} = colorSlice;

