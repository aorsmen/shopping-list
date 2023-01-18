import { FormEvent, useRef, useContext } from 'react';
import ItemContext from '../../store/item-context';
import Button from "../UI/Button";
import SvgIcon from '../UI/SvgIcon';
import styles from './AddItem.module.css';


const AddItem = () => {
    const { addItem } = useContext(ItemContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const formSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        let text;

        // Extra input check
        if(inputRef.current){
            text = inputRef.current.value.trim();

            // Input value check
            if(text.length === 0){
                return;
            }

            // Add new item to the list
            addItem(text);

            // Reset the input
            inputRef.current.value = '';
        }
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