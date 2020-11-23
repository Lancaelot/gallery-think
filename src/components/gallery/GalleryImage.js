import React from 'react';
import PropTypes from 'prop-types';
import { defaultImgSource } from '../../api/api';

export const GalleryImage = (props) => {
  const { id, setCurrentImg, images } = props;
  const altImg = `Image ID ${id}`;

  return (
    /* eslint-disable */
    <img
      className="gallery__image"
      alt={altImg}
      src={defaultImgSource(id)}
      onClick={() => {
        const currImg = images.find(currImage => currImage.id === id);

        setCurrentImg(currImg);
      }}
    />
    /* eslint-enable */
  );
};

GalleryImage.propTypes = {
  id: PropTypes.string.isRequired,
  setCurrentImg: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
  })).isRequired,
};
