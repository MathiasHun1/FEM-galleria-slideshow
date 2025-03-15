import { Link } from 'react-router';

const Home = ({ data, setCardId }) => {
  return (
    <div className="masonry-cont wrapper">
      {!data && <div>Loading ...</div>}

      {data &&
        data.map((elem) => (
          <div key={elem.name} className="card">
            <img src={elem.images.gallery} alt="" />
            <div className="card__text">
              <div className="card__inner-wrapper">
                <Link
                  className="card__link"
                  to={`/slideshow/${elem.id}`}
                  onClick={() => setCardId(elem.id)}
                ></Link>
                <h2 className="card__title text-white text-heading-2">
                  {elem.name}
                </h2>
                <p className="card__artist text-white-opq text-subhead-2">
                  {elem.artist.name}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
