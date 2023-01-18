import React, { useReducer, useEffect } from 'react';
import ItemContext from "./item-context";
import { stateInterface } from '../interfaces';

const INITIAL_STATE: stateInterface = {
    items: []
};

// Variable for the first page load
let isInit = true;

const itemReducer = (state: stateInterface, action: {type: string, text?: string, id?: string}) => {
    // Setting data on first pade load
    if(action.type === 'SET' && action.text){
        const newData = JSON.parse(action.text);

        return {...state, items: newData};
    }

    // Adding new item to the list
    if(action.type === 'ADD'){
        let newItems = [...state.items];

        newItems.push({
            id: Math.random().toString(),
            text: action.text || '',
            qty: 1,
            checked: false
        });

        return {...state, items: newItems};
    }

    // Removing an item from the list
    if(action.type === 'REMOVE'){
        let newItems = state.items.filter(item => item.id !== action.id);

        return {...state, items: newItems};
    }

    if(action.type === 'INCREMENT'){
        const newItems = [...state.items];
        const inx = state.items.findIndex(item => item.id === action.id);
        newItems[inx].qty++;

        return {...state, items: newItems};
    }

    if(action.type === 'DECREMENT'){
        let newItems = [...state.items];
        const inx = state.items.findIndex(item => item.id === action.id);

        if(newItems[inx].qty === 1){
            newItems = state.items.filter(item => item.id !== action.id);
        }else{
            newItems[inx].qty--;
        }

        return {...state, items: newItems};
    }

    if(action.type === 'CHANGE'){
        const newItems = [...state.items];
        const inx = state.items.findIndex(item => item.id === action.id);
        newItems[inx].checked = !newItems[inx].checked;

        return {...state, items: newItems};
    }

    if(action.type === 'RESET'){
        return {...state, items: []};
    }

    return INITIAL_STATE;
}; 

const ItemProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const [itemState, dispatchItemState] = useReducer(itemReducer, INITIAL_STATE);

    useEffect(() => {
        if(!isInit){
            // Saving data to local storage in every state changes
            const stateItems = JSON.stringify(itemState.items);
            localStorage.setItem('msl_items', stateItems);
        }else{
            // Getting data from local storage when first page load
            const storedItems = localStorage.getItem('msl_items');

            if(storedItems){
                dispatchItemState({type: 'SET', text: storedItems});
            }
        }
        
        isInit = false;
    }, [itemState.items]);

    const addItem = (text: string) => {
        dispatchItemState({type: 'ADD', text: text});
    };

    const removeItem = (id: string) => {
        dispatchItemState({type: 'REMOVE', id: id});
    };

    const changeQuantity = (id: string, action: 'INCREMENT' | 'DECREMENT') => {
        dispatchItemState({type: action, id: id});
    };

    const changeCheck = (id: string) => {
        dispatchItemState({type: 'CHANGE', id: id});
    };

    const resetList = () => {
        dispatchItemState({type: 'RESET'});
    };

    const ctx = {
        items: itemState.items,
        addItem: addItem,
        removeItem: removeItem,
        changeQty: changeQuantity,
        change: changeCheck,
        reset: resetList
    };

    return (
        <ItemContext.Provider value={ctx}>{props.children}</ItemContext.Provider>
    );
};

export default ItemProvider;