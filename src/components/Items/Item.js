import { useDispatch } from 'react-redux';

import { itemActions } from '../../store/item-slice';
import ItemActions from './ItemActions';
import styles from './Item.module.css';

const Item = props => {
    const dispatch = useDispatch();
    
    // Item check/uncheck handler
    const changeItemHandler = event => {
        dispatch(itemActions.change({
            id: props.id,
            checked: event.target.checked
        }));
    };

    const quantity = `x ${props.qty}`;

    return (
        <li className={styles.item}>
            <div className={styles['item-inner']}>
                <input type="checkbox" id={`chk_${props.id}`} onChange={changeItemHandler} defaultChecked={props.checked} />
                <label htmlFor={`chk_${props.id}`}>{props.text}</label>
            </div>
            <b className={styles['item-qty']}>{quantity}</b>
            <ItemActions checked={props.checked} id={props.id} />
        </li>
    );
};

export default Item;