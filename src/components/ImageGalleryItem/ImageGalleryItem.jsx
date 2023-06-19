import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ arrayOfImages, modalOpen }) => {
  return (
    <>
      {arrayOfImages.map(image => (
        <li onClick={modalOpen} key={image.id} className={styles.item}>
          <img
            className={styles.image}
            src={image.webformatURL}
            alt={image.tags}
          />
        </li>
      ))}
    </>
  );
};
ImageGalleryItem.propTypes = {
  arrayOfImages: PropTypes.array.isRequired,
  modalOpen: PropTypes.func.isRequired,
};
