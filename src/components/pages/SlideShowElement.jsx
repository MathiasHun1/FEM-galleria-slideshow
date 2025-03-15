import { Link } from 'react-router';

const SlideShowElement = ({ cardData }) => {
  const { name, year, description, source, artist, images } = cardData;

  return (
    <div className="content-wrapper wrapper">
      <section className="content__image-section">
        <div className="image-section__inner">
          <picture className="content__hero-image">
            <img src={images.hero.large.slice(1)} alt="" />
          </picture>

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
    </div>
  );
};

export default SlideShowElement;
