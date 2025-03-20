import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { cacheImages } from '../utils.js';
import viewSVG from '/assets/shared/icon-view-image.svg';

const SlideShowElement = ({ data, imageLoaded, setImageLoaded }) => {
  const params = useParams();
  console.log(imageLoaded);

  const currentCard = data.find((card) => card.id === params.cardId);

  const { name, year, description, source, artist, images } = currentCard;
  const dialogRef = useRef(null);

  // preaload images for nice page render
  useEffect(() => {
    const imagesArr = [
      images.hero.small.slice(1),
      images.hero.large.slice(1),
      artist.image.slice(1),
    ];

    cacheImages(imagesArr)
      .then((r) => setImageLoaded(true))
      .catch((err) => console.error('Error loading images'));
  }, [currentCard]);

  const showModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="slideshow-content-wrapper wrapper">
      <AnimatePresence>
        {imageLoaded && (
          <motion.section
            className="slideshow-content__image-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <picture className="slideshow-content__hero-picture">
              <source
                srcSet={images.hero.small.slice(1)}
                media={`(max-width: 35rem)`}
              />
              <source
                srcSet={images.hero.large.slice(1)}
                media={`(min-width: 35rem)`}
              />
              <img src={images.hero.large.slice(1)} alt="" />
              <button className="view-image-button" onClick={showModal}>
                <img className="view-logo" src={viewSVG} alt="" />
                <span className="uppercase">View image</span>
              </button>
            </picture>
            <div className="slideshow-content__meta">
              <div className="content__heading-cont">
                <h1 className="text-heading-1">{name}</h1>
                <p className="text-subhead-1 text-gray">{artist.name}</p>
                <picture className="content__artist-image--mobile">
                  <img src={artist.image.slice(1)} alt="" />
                </picture>
              </div>
              <picture className="content__artist-image--desktop">
                <img src={artist.image.slice(1)} alt="" />
              </picture>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {imageLoaded && (
          <motion.section
            className="content__text-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="big-text text-display ">{year}</p>
            <p className="description-text text-body text-gray">
              {description}
            </p>
          </motion.section>
        )}
      </AnimatePresence>

      <dialog className="dialog" ref={dialogRef}>
        <img src={images.gallery.slice(1)} alt="" />
        <button
          className="text-link-1 text-white uppercase"
          onClick={closeModal}
        >
          Close
        </button>
      </dialog>
    </div>
  );
};

export default SlideShowElement;
