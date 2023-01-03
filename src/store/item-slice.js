import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        items: []
    },
    reducers: {
        // Set the list data from local storage
        setData(state, action){
            state.items = action.payload;
        },
        // Add new item
        add(state, action){
            state.items.push({
                id: Math.random().toString(),
                text: action.payload,
                qty: 1,
                checked: false
            });
        },
        // Remove an item
        remove(state, action){
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        // Increase item quantity
        increment(state, action){
            const currentItem = state.items.find(item => item.id === action.payload);
            currentItem.qty++;
        },
        // Decrease item quantity
        decrement(state, action){
            const currentItem = state.items.find(item => item.id === action.payload);

            if(currentItem.qty === 1){
                state.items = state.items.filter(item => item.id !== action.payload);
            }else{
                currentItem.qty--;
            }
        },
        // Check or uncheck an item
        change(state, action){
            const currentItem = state.items.find(item => item.id === action.payload.id);
            currentItem.checked = action.payload.checked;
        },
        // Reset entire list
        reset(state){
            state.items = [];
        }
    }
});

export const itemActions = itemSlice.actions;

export default itemSlice;