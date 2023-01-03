import { itemActions } from './item-slice';

// Get the list data from local storage (Browser)
export const getData = () => {
    return (dispatch) => {
        const items = localStorage.getItem('msl_items');

        if(items){
            dispatch(itemActions.setData(JSON.parse(items)));
        }
    };
};

// Save the list data to local storage (Browser)
export const saveData = data => {
    return () => {
        const items = JSON.stringify(data);
        localStorage.setItem('msl_items', items);
    };
};