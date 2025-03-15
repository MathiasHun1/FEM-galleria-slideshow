import { Outlet, Link } from 'react-router';
import leftIcon from '/assets/shared/icon-back-button.svg';
import rightIcon from '/assets/shared/icon-next-button.svg';

const SlideShowLayout = ({ data, setCardId, cardData }) => {
  const currentIndex = data.indexOf(cardData);
  const prevId =
    currentIndex === 0 ? data[data.length - 1].id : data[currentIndex - 1].id;
  const nextId =
    currentIndex === data.length - 1 ? data[0].id : data[currentIndex + 1].id;

  return (
    <div className="slideshow-container">
      <Outlet />

      <footer>
        <div className="progress-indicator"></div>
        <div className="footer__content wrapper">
          <div className="footer-meta">
            <p>sdfsdf</p>
            <p>sdfsdf</p>
          </div>
          <nav className="slider-nav">
            <Link to={`/slideshow/${nextId}`} onClick={() => setCardId(prevId)}>
              <img src={leftIcon} alt="" />
            </Link>
            <Link to={`/slideshow/${nextId}`} onClick={() => setCardId(nextId)}>
              <img src={rightIcon} alt="" />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SlideShowLayout;
