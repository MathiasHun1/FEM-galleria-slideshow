import { Outlet, Link, useNavigate, useParams, Navigate } from 'react-router';
import leftIcon from '/assets/shared/icon-back-button.svg';
import rightIcon from '/assets/shared/icon-next-button.svg';
import { useEffect } from 'react';

const SlideShowLayout = ({ data, setImageLoaded, slideshowActive }) => {
  /*--- temporary solution for page refresh on a CDN deployment ---*/
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/home');
    }
  }, []);

  if (!data) {
    navigate('/home');
    return null;
  }
  /*--------------------------------------------------------------*/
  const params = useParams();

  const currentCard = data.find((card) => card.id === params.cardId);
  const currentIndex = data.indexOf(currentCard);
  const nextId =
    currentIndex === data.length - 1 ? data[0].id : data[currentIndex + 1].id;
  const prevId =
    currentIndex === 0 ? data[data.length - 1].id : data[currentIndex - 1].id;

  const handleStepRight = () => {
    setImageLoaded(false);
    console.log(nextId);

    setTimeout(() => {
      navigate(`/slideshow/${nextId}`);
    }, 300);
  };

  const handleStepLeft = () => {
    setImageLoaded(false);

    setTimeout(() => {
      navigate(`/slideshow/${prevId}`);
    }, 300);
  };

  const calculateIndicatorValue = () => {
    const elementPosition = currentIndex + 1;
    const all = data.length;
    const fillRatio = (elementPosition / all) * 100;

    return fillRatio;
  };

  const indicatorStyle = {
    width: `${calculateIndicatorValue()}%`,
    transition: 'width 300ms ease',
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
            <p className="text-heading-3">{currentCard.name}</p>
            <p className="text-subhead-2 text-black-opq">
              {currentCard.artist.name}
            </p>
          </div>

          <nav className="footer__slider-nav">
            <Link
              className={`${
                currentIndex === 0 || slideshowActive ? 'inactive' : ''
              }`}
              onClick={handleStepLeft}
            >
              <img src={leftIcon} alt="" />
            </Link>
            <Link
              className={`${
                currentIndex === data.length - 1 || slideshowActive
                  ? 'inactive'
                  : ''
              }`}
              onClick={handleStepRight}
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
