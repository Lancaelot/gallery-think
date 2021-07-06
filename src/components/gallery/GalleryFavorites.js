import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './Gallery';
import travolta from '../../images/travolta.gif';
import clear from '../../icons/clear.svg';

const GalleryFavorites = ({ setSelectedImg, selectedImg, setCurrentImg }) => {
  const localImages = JSON.parse(localStorage.getItem('images'));
  const handleClear = () => {
    localStorage.setItem('images', null);
    setSelectedImg(null);
  };

  useEffect(() => {
    if (!localImages) {
      setSelectedImg(null);
    }

    setSelectedImg(localImages);
  }, []);

  return (
    <div>
      {!selectedImg
        ? (
          <div className="gallery__favorite">
            <h2>First like some photos</h2>
            <img src={travolta} alt="travolta searching gif" />
          </div>
        )
        : (
          /* eslint-disable */
          <>
            <div
              className="gallery__favorite-clear"
              onClick={
                () => handleClear()
              }
            >
              Clear selected
              <img
                src={clear}
                alt="clear favorites"
                className="gallery__icon-clear"
              />
            </div>
            <Gallery
              setSelectedImg={setSelectedImg}
              images={selectedImg}
              setCurrentImg={setCurrentImg}
            />
          </>
          /* eslint-enable */
        )
      }
    </div>
  );
};

GalleryFavorites.propTypes = {
  setSelectedImg: PropTypes.func.isRequired,
  selectedImg: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    download_url: PropTypes.string,
  })),
  setCurrentImg: PropTypes.func.isRequired,
};
GalleryFavorites.defaultProps = {
  selectedImg: null,
};

export default GalleryFavorites;
