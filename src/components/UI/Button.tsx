import styles from './Button.module.css';

const Button: React.FC<{type: 'submit' | 'reset' | 'button', onClick?: () => void, children: React.ReactNode}> = (props) => {
    return (
        <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
    );
};

export default Button;