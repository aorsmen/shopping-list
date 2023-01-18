import React from 'react';
import { contextInterface } from '../interfaces';

const ItemContext = React.createContext<contextInterface>({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    changeQty: () => {},
    change: () => {},
    reset: () => {}
});

export default ItemContext;