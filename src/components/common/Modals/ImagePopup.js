import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ImagePopup = ({images,setIsOpen,photoIndex,setPhotoIndex}) => {
  return (
    <React.Fragment>
        <Lightbox
          open={true}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map(src => ({ src }))}
          on={{
            view: ({ index }) => setPhotoIndex(index)
          }}
        />
    </React.Fragment>
  );
};

export default ImagePopup;