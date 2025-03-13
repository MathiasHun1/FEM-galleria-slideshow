const Header = () => {
  return (
    <header className="primary-header wrapper">
      <div className="header__logo-wrapper">
        <img src="/assets/shared/logo.svg" alt="galleria logo" />
      </div>

      <button className="header__button uppercase text-link-1 text-gray">
        Start Slideshow
      </button>
    </header>
  );
};

export default Header;
