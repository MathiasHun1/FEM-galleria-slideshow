import { useState, useEffect, useRef } from 'react';
import services from './services/cardsService';
import { createIds } from './utils';
import { useNavigate } from 'react-router';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  console.log('APP RENDERS');
  const [data, setData] = useState(null);
  const [slideshowActive, setSlideshowActive] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    services.getAllCards().then((result) => {
      if (result) {
        const cards = createIds(result);
        setData(cards);
      }
    });
  }, []);

  useEffect(() => {
    slideshowActive ? startAutoSlide() : stopAutoSlide();
  }, [slideshowActive]);

  const startAutoSlide = () => {
    navigate(`/slideshow/${data[0].id}`);
    let basePosition = 1;

    intervalRef.current = setInterval(() => {
      basePosition = basePosition === data.length - 1 ? 0 : basePosition + 1;
      setImageLoaded(false);
      // delay navigation to have time for exit-animation
      setTimeout(() => {
        navigate(`/slideshow/${data[basePosition].id}`);
      }, 500);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setImageLoaded(false);
    setTimeout(() => {
      navigate(`/home`);
    }, 500);
  };

  return (
    <div className="app text-body container">
      <Header
        slideshowActive={slideshowActive}
        setSlideshowActive={setSlideshowActive}
      />

      <hr className="divider" />

      <Main
        data={data}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
        slideshowActive={slideshowActive}
      />
    </div>
  );
}

export default App;
