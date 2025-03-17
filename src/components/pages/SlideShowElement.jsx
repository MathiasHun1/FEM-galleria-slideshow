import { useRef } from 'react';

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
    <div className="content-wrapper wrapper">
      <section className="content__image-section">
        <div className="image-section__inner">
          <div className="content__hero-image-wrapper">
            <picture className="content__hero-image-wrapper">
              <img src={images.hero.large.slice(1)} alt="" />
            </picture>
            <button onClick={showModal}></button>
          </div>

          <div className="content__heading-cont">
            <h1 className="text-heading-1">{name}</h1>
            <p className="text-subhead-1 text-black-opq">{artist.name}</p>
          </div>

          <picture className="content__artist-image">
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
