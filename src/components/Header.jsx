import { Link } from 'react-router';

const Header = ({ slideshowActive, setSlideshowActive }) => {
  console.log('HEADER RENDERS');

  return (
    <header className="primary-header wrapper">
      <Link
        to="/home"
        className="header__logo-wrapper"
        onClick={() => setSlideshowActive(false)}
      >
        <img src="/assets/shared/logo.svg" alt="galleria logo" />
      </Link>

      <button
        className="header__button uppercase text-link-1 text-gray"
        onClick={() => {
          slideshowActive
            ? setSlideshowActive(false)
            : setSlideshowActive(true);
        }}
      >
        {!slideshowActive ? 'Start' : 'Stop'} Slideshow
      </button>
    </header>
  );
};

export default Header;
