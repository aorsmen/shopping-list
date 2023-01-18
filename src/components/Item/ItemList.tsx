import { useContext } from 'react';
import ItemContext from '../../store/item-context';
import SingleItem from './SingleItem';
import SvgIcon from '../UI/SvgIcon';
import styles from './ItemList.module.css';

const ItemList = () => {
    const { reset, items } = useContext(ItemContext);

    const resetHandler = () => {
        reset();
    };

    // If there is no list item, render this
    if(items.length === 0){
        return (
            <div className={`${styles['item-list']} ${styles['no-item']}`}>There is no item yet.</div>
        );
    }

    return (
        <div className={styles['item-list']}>
            <div className={styles['item-list-header']}>
                <h2>Items</h2>
                <button onClick={resetHandler} type="button" title="Remove All">
                    <SvgIcon path="M17.207 9c0.527 0 0.962 0.436 0.962 0.962v0.853h3.468c0.2 0 0.363 0.164 0.363 0.364s-0.163 0.363-0.363 0.363h-1.090v9.73c0 0.636-0.526 1.162-1.161 1.162h-6.772c-0.635 0-1.162-0.526-1.162-1.162v-9.73h-1.089c-0.2 0-0.363-0.164-0.363-0.363s0.163-0.364 0.363-0.364h3.45v-0.853c0-0.526 0.435-0.962 0.962-0.962zM19.803 11.542h-7.623v9.73c0 0.236 0.2 0.436 0.435 0.436h6.754c0.236 0 0.435-0.2 0.435-0.436v-9.73zM15.991 13.175c0.2 0 0.363 0.164 0.363 0.364v6.535c0 0.2-0.163 0.363-0.363 0.363s-0.363-0.163-0.363-0.363v-6.534c0-0.2 0.163-0.364 0.363-0.364zM13.994 13.175c0.2 0 0.363 0.164 0.363 0.364v6.535c0 0.2-0.163 0.363-0.363 0.363s-0.363-0.163-0.363-0.363v-6.534c0-0.2 0.163-0.364 0.363-0.364zM17.988 13.175c0.2 0 0.363 0.164 0.363 0.364v6.535c0 0.2-0.163 0.363-0.363 0.363s-0.363-0.163-0.363-0.363v-6.534c0-0.2 0.163-0.364 0.363-0.364zM17.208 9.726h-2.433c-0.127 0-0.236 0.11-0.236 0.236v0.853h2.904v-0.853c0-0.127-0.109-0.236-0.236-0.236z" />
                </button>
            </div>
            <ul>
                {items.map(item => {
                    return <SingleItem key={item.id} data={item} />;
                })}
            </ul>
        </div>
    );
};

export default ItemList;