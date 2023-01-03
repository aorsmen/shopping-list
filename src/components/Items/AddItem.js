import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../UI/Button';
import SvgIcon from '../UI/SvgIcon';
import styles from './AddItem.module.css';
import { itemActions } from '../../store/item-slice';

const AddItem = props => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    // Form submit handler
    const formSubmitHandler = (event) => {
        event.preventDefault();

        const newItem = inputRef.current.value.trim();

        // Empty value check
        if(newItem.length === 0){
            return;
        }

        // Add new item to data store
        dispatch(itemActions.add(newItem));

        // Reset the input
        inputRef.current.value = '';
    };

    return (
        <div className={styles['add-item']}>
            <form onSubmit={formSubmitHandler}>
                <input ref={inputRef} type="text" placeholder="Add an item" />
                <Button type="submit">
                    <SvgIcon path='M15.25 10L16.75 10 16.75 15.25 22 15.25 22 16.75 16.75 16.75 16.75 22 15.25 22 15.25 16.75 10 16.75 10 15.25 15.25 15.25z' />
                </Button>
            </form>
        </div>
    );
};

export default AddItem;