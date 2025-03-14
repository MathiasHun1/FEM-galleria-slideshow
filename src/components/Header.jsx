import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="primary-header wrapper">
      <Link to="/home" className="header__logo-wrapper">
        <img src="/assets/shared/logo.svg" alt="galleria logo" />
      </Link>

      <button className="header__button uppercase text-link-1 text-gray">
        Start Slideshow
      </button>
    </header>
  );
};

export default Header;
