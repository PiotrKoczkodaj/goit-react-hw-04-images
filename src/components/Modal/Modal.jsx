import styles from './Modal.module.css';

export const Modal = ({modalClose,imageSrcToModal,tagsImagetoModal}) => {
    
    return (
         <div onClick={modalClose} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={imageSrcToModal} alt={tagsImagetoModal} />
        </div>
      </div>
    )
}