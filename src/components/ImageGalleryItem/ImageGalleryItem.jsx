import styles from './ImageGalleryItem.module.css';

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
    )
}