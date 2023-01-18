import { useContext } from 'react';
import ItemContext from '../../store/item-context';
import ItemActions from './ItemActions';
import styles from './SingleItem.module.css';
import { itemInterface } from '../../interfaces';

const SingleItem: React.FC<{data: itemInterface}> = (props) => {
    const { change } = useContext(ItemContext);
    const { id, text, qty, checked } = props.data;
    const quantity = `x ${qty}`;

    const changeItemHandler = () => {
        change(id);
    };

    return (
        <li className={styles.item}>
            <div className={styles['item-inner']}>
                <input type="checkbox" id={`chk_${id}`} onChange={changeItemHandler} defaultChecked={checked} />
                <label htmlFor={`chk_${id}`}>{text}</label>
            </div>
            <b className={styles['item-qty']}>{quantity}</b>
            <ItemActions checked={checked} id={id} />
        </li> 
    );
};

export default SingleItem;