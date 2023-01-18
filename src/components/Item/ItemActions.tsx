import { useContext } from "react";
import ItemContext from "../../store/item-context";
import SvgIcon from '../UI/SvgIcon';
import styles from './ItemActions.module.css';

const SVG_ICONS = {
    delete: 'M19.712 11.227l1.061 1.061-3.712 3.712 3.712 3.712-1.061 1.061-3.712-3.712-3.712 3.712-1.061-1.061 3.712-3.712-3.712-3.712 1.061-1.061 3.712 3.712z',
    minus: 'M16.75 15.375L22 15.375 22 17.625 16.75 17.625 15.25 17.625 10 17.625 10 15.375 15.25 15.375z',
    plus: 'M15.25 10L16.75 10 16.75 15.25 22 15.25 22 16.75 16.75 16.75 16.75 22 15.25 22 15.25 16.75 10 16.75 10 15.25 15.25 15.25z'
};

const ItemActions: React.FC<{id: string, checked: boolean}> = (props) => {
    const { changeQty, removeItem } = useContext(ItemContext);

    // Remove the item
    const removeHandler = () => {
        removeItem(props.id);
    };

    // Increase the item's quantity
    const incrementHandler = () => {
        changeQty(props.id, 'INCREMENT');
    };

    // Decrease the item's quantity
    const decrementHandler = () => {
        changeQty(props.id, 'DECREMENT');
    };

    // If checked, render like this
    if(props.checked){
        return (
            <div className={styles['item-actions']}>
                <button type="button" className={styles['btn-delete']} onClick={removeHandler}>
                    <SvgIcon path={SVG_ICONS.delete} />
                </button>
            </div>
        );
    }

    return (
        <div className={styles['item-actions']}>
            <button type="button" className={styles['btn-remove']} onClick={decrementHandler}>
                <SvgIcon path={SVG_ICONS.minus} />
            </button>
            <button type="button" className={styles['btn-add']} onClick={incrementHandler}>
                <SvgIcon path={SVG_ICONS.plus} />
            </button>
        </div>
    );
};

export default ItemActions;