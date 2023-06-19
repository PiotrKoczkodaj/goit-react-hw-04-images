import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ modalClose, imageSrcToModal, tagsImagetoModal }) => {
  return (
    <div onClick={modalClose} className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={imageSrcToModal} alt={tagsImagetoModal} />
      </div>
    </div>
  );
};
Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  imageSrcToModal: PropTypes.string.isRequired,
  tagsImagetoModal: PropTypes.string.isRequired,
};
