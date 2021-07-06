import React from 'react';
import PropTypes from 'prop-types';
import { GalleryImage } from './GalleryImage';
import './Gallery.scss';
import heart from '../../icons/heart.svg';
import download from '../../icons/download.svg';

export const Gallery = ({ images, setCurrentImg, setSelectedImg }) => {
  const handleClick = (id) => {
    const localImages = JSON.parse(localStorage.getItem('images'));
    const filteredImage = images.find(image => image.id === id);

    if (!localImages) {
      localStorage.setItem('images', JSON.stringify([filteredImage]));
      setSelectedImg(localImages);
    }

    if (localImages && localImages.every(image => image.id !== id)) {
      localStorage.setItem(
        'images', JSON.stringify([...localImages, filteredImage]),
      );
      setSelectedImg(localImages);
    }
  };

  return (
    <div className="gallery">
      {images.map(image => (
        <div className="gallery__item" key={image.id}>
          <GalleryImage
            {...image}
            setCurrentImg={setCurrentImg}
            images={images}
          />
          <div className="gallery__interactive">
            <div className="gallery__button">
              <a
                href={image.download_url}
                download="image"
              >
                <img
                  src={download}
                  alt="download icon"
                  className="gallery__icon"
                />
              </a>
            </div>
            <button
              type="button"
              onClick={() => handleClick(image.id)}
              className="gallery__button"
            >
              <img
                src={heart}
                alt="heart icon"
                className="gallery__icon"
              />
            </button>
          </div>
          <p>
            by&nbsp;
            {image.author}
          </p>
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
  })).isRequired,
  setCurrentImg: PropTypes.func.isRequired,
  setSelectedImg: PropTypes.func.isRequired,
};
