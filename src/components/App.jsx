import { fetchData } from './Api';
import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {

const [arrayOfImages, setArrayOfImages] = useState([]);
const [page, setPage] = useState(1);
const [quantityElements, setQuantityElements] = useState(12);
const [isLoading, setIsLoading] = useState(false);
const [inputValuee, setInputValuee] = useState('');
const [open, setOpen] = useState(false);
const [imageSrcToModal, setImageSrcToModal] = useState('');;
const [tagsImageToModal, setTagsImageToModal] = useState('');
 
 const handleSubmit = e => {
    e.preventDefault();
   const inputValue = e.target[1].value;
   setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
    fetchData(inputValue, page, quantityElements).then(resp => {
      if (inputValue === '') {
        return null;
      }
      setArrayOfImages([...resp.data.hits])
    });
  };
  
  const settingInputValue = e => {
    setInputValuee(e.target.value)
  
  };

 const modalOpen = e => {
    setImageSrcToModal(e.target.src);
    setTagsImageToModal(e.target.alt)
    setOpen(true)
 };
 const handlePagination = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
    let inputValue = inputValuee;
   setQuantityElements(quantityElements + 12);


   setQuantityElements(quantityElements);
   fetchData(inputValue, page, quantityElements).then(resp => {
     setArrayOfImages([...resp.data.hits])
   })
    // this.setState(prevState => {
    //   quantityElements = prevState.quantityElements;
    //   fetchData(inputValue, page, quantityElements).then(resp => {
    //     this.setState({ arrayOfImages: [...resp.data.hits] });
    //   });
    // });
 };
  
  const modalClose = () => {
    setOpen(false)
  };
  return (
    <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
    <Searchbar
          submit={handleSubmit}
          inputValue={settingInputValue}
        />
      <ImageGallery>
        <ImageGalleryItem arrayOfImages={ arrayOfImages} modalOpen={modalOpen} />
      </ImageGallery>
      {arrayOfImages.length === 0 ? null : (
          <Button pagination={handlePagination} />
      )}
      <Loader isLoading={isLoading} />
       {!open ? null : (
        <Modal
          imageSrcToModal={ imageSrcToModal} tagsImagetoModal={tagsImageToModal} modalClose={modalClose} />
        )}
    </div>
  );
};
