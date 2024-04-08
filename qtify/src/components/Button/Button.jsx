import styles from "./Button.module.css";

const Button = ({text}) => {
    return (
        <button className={styles.button} type="submit">{text}</button>
    )
}

export default Button;