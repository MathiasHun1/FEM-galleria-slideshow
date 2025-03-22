import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

const Home = ({ data }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      key={data}
      className="masonry-cont wrapper"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {!data && <div>Loading ...</div>}
      {data &&
        data.map((elem) => (
          <motion.div key={elem.name} className="card" variants={item}>
            <img src={elem.images.gallery} alt="" />
            <div className="card__text">
              <div className="card__inner-wrapper">
                <Link
                  className="card__link"
                  to={`/slideshow/${elem.id}`}
                ></Link>
                <h2 className="card__title text-white text-heading-2">
                  {elem.name}
                </h2>
                <p className="card__artist text-white-opq text-subhead-2">
                  {elem.artist.name}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default Home;
