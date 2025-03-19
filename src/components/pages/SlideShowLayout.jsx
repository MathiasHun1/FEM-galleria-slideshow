import { Outlet, Link, useNavigate } from 'react-router';
import leftIcon from '/assets/shared/icon-back-button.svg';
import rightIcon from '/assets/shared/icon-next-button.svg';
import { useEffect } from 'react';

const SlideShowLayout = ({ data, setCardId, cardData, setImageLoaded }) => {
  /*--- temporary solution for page refresh on a CDN deployment ---*/
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/home');
    }
  }, []);

  if (!data) {
    return null;
  }
  /*--------------------------------------------------------------*/

  const currentIndex = data.indexOf(cardData);
  const prevId =
    currentIndex === 0 ? data[data.length - 1].id : data[currentIndex - 1].id;
  const nextId =
    currentIndex === data.length - 1 ? data[0].id : data[currentIndex + 1].id;

  const stepLeft = () => {
    if (currentIndex === 0) {
      return;
    } else {
      setCardId(prevId);
    }
  };

  const stepRight = () => {
    if (currentIndex === data.length - 1) {
      return;
    } else {
      setImageLoaded(false);
      setCardId(nextId);
    }
  };

  const calculateIndicatorValue = () => {
    const elementPosition = currentIndex + 1;
    const all = data.length;
    const fillRatio = (elementPosition / all) * 100;

    return fillRatio;
  };

  const indicatorStyle = {
    width: `${calculateIndicatorValue()}%`,
  };

  return (
    <div className="slideshow-container">
      <Outlet />

      <footer className="footer">
        <div className="footer__progress-indicator-body">
          <div className="progress-indicator-fill" style={indicatorStyle}></div>
        </div>
        <div className="footer__content wrapper">
          <div className="footer-meta">
            <p className="text-heading-3">{cardData.name}</p>
            <p className="text-subhead-2 text-black-opq">
              {cardData.artist.name}
            </p>
          </div>

          <nav className="footer__slider-nav">
            <Link
              to={`/slideshow/${nextId}`}
              className={`${currentIndex === 0 ? 'inactive' : ''}`}
              onClick={stepLeft}
            >
              <img src={leftIcon} alt="" />
            </Link>
            <Link
              to={`/slideshow/${nextId}`}
              className={`${
                currentIndex === data.length - 1 ? 'inactive' : ''
              }`}
              onClick={stepRight}
            >
              <img src={rightIcon} alt="" />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SlideShowLayout;
