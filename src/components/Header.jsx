import { Link } from 'react-router';

const Header = ({ onStartSlideshow, onStopSlideshow, slideshowActive }) => {
  return (
    <header className="primary-header wrapper">
      <Link
        to="/home"
        className="header__logo-wrapper"
        onClick={onStopSlideshow}
      >
        <img src="/assets/shared/logo.svg" alt="galleria logo" />
      </Link>

      <button
        className="header__button uppercase text-link-1 text-gray"
        onClick={!slideshowActive ? onStartSlideshow : onStopSlideshow}
      >
        {!slideshowActive ? 'Start' : 'Stop'} Slideshow
      </button>
    </header>
  );
};

export default Header;
