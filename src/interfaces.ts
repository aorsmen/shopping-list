export interface itemInterface{
    id: string;
    text: string;
    qty: number;
    checked: boolean;
};

export interface stateInterface{
    items: itemInterface[]
};

export interface contextInterface{
    items: itemInterface[],
    addItem: (text: string) => void,
    removeItem: (id: string) => void,
    changeQty: (id: string, action: 'INCREMENT' | 'DECREMENT') => void,
    change: (id: string) => void,
    reset: () => void
};