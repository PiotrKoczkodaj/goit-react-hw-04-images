import styles from './Button.module.css';

export const Button = ({pagination}) => {
    
    return (
         <button className={styles.Button} onClick={pagination}>
        Load More
      </button>
    )
}