import { Link, redirect } from 'react-router';
import { motion } from 'motion/react';

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

      <motion.button
        animate={
          !slideshowActive
            ? {
                scale: [1, 1, 1.1, 1],
              }
            : { scale: [1] }
        }
        transition={
          !slideshowActive
            ? {
                duration: 5,
                times: [0, 0.8, 0.9, 1],
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : { duration: 0 }
        }
        className="header__button uppercase text-link-1 text-gray"
        onClick={() => {
          slideshowActive
            ? setSlideshowActive(false)
            : setSlideshowActive(true);
        }}
      >
        {!slideshowActive ? 'Start' : 'Stop'} Slideshow
      </motion.button>
    </header>
  );
};

export default Header;
