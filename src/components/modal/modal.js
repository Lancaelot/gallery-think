import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { bigImgSource } from '../../api/api';

export const Modal = ({ setCurrentImg, currentImg }) => {
  const { id } = currentImg;
  const handleClick = (event) => {
    if (event.target.classList.contains('backdrop')) {
      setCurrentImg(null);
    }
  };

  return (
    /* eslint-disable */
    <div
      className="backdrop"
      onClick={handleClick}
    >
      <img
	    src={bigImgSource(id)}
	    alt="enlarged pic"
	  />
    </div>
    /* eslint-enable */
  );
};

Modal.propTypes = {
  setCurrentImg: PropTypes.func.isRequired,
  currentImg: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
