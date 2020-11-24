
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import { imageRequest } from './api/api';
import { Gallery } from './components/gallery/Gallery';
import { Modal } from './components/modal/modal';
import { Header } from './components/header/header';
import GalleryFavorites from './components/gallery/GalleryFavorites';
import { Loader } from './components/loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [currentImg, setCurrentImg] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    imageRequest(setImages, page, 12);
  }, [page]);

  const changePage = (changeType) => {
    if (changeType === 'decrease' && page - 1 >= 1) {
      setPage(prevState => prevState - 1);
    }

    if (changeType === 'increase') {
      setPage(prevState => prevState + 1);
    }
  };

  const handleSearch = (searchParam) => {
    setImages(images.filter(image => image.author.includes(searchParam)));
  };

  return (
    <div className="App">
      <Header
        handleChange={changePage}
        handleSearch={handleSearch}
        images={images}
      />
      <main className="main">
        <Route path="/" exact>
          {images
            ? (
              <>
                <Gallery
                  images={images}
                  selectedImg={selectedImg}
                  setCurrentImg={setCurrentImg}
                  setSelectedImg={setSelectedImg}
                />
                {
                  currentImg && (
                    <Modal
                      currentImg={currentImg}
                      setCurrentImg={setCurrentImg}
                    />
                  )
                }
              </>
            )
            : <Loader />
          }
        </Route>
        <Route path="/favorites">
          <GalleryFavorites
            images={selectedImg}
            selectedImg={selectedImg}
            setCurrentImg={setCurrentImg}
            setSelectedImg={setSelectedImg}
          />
        </Route>
      </main>
    </div>
  );
};
