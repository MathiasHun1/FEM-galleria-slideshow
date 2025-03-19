import { useRef } from 'react';
import viewSVG from '/assets/shared/icon-view-image.svg';

const SlideShowElement = ({ cardData }) => {
  const { name, year, description, source, artist, images } = cardData;

  const dialogRef = useRef(null);

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
      <section className="slideshow-content__image-section">
        <picture className="slideshow-content__hero-picture">
          <source
            srcset={images.hero.small.slice(1)}
            media={`(max-width: 35rem)`}
          />
          <source
            srcset={images.hero.large.slice(1)}
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
            <p className="text-subhead-1 text-black-opq">{artist.name}</p>
            <picture className="content__artist-image--mobile">
              <img src={artist.image.slice(1)} alt="" />
            </picture>
          </div>
          <picture className="content__artist-image--desktop">
            <img src={artist.image.slice(1)} alt="" />
          </picture>
        </div>
      </section>

      <section className="content__text-section">
        <p className="big-text text-display ">{year}</p>
        <p className="description-text text-body text-gray">{description}</p>
      </section>

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
