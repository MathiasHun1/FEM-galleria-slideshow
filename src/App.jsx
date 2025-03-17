import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router';
import { useState, useEffect, useRef } from 'react';
import services from './services/cardsService';
import utils from './utils';

import Header from './components/Header';
import Home from './components/pages/Home';
import SlideShowLayout from './components/pages/SlideShowLayout';
import SlideShowElement from './components/pages/SlideShowElement';

function App() {
  const [data, setData] = useState(null);
  const [cardId, setCardId] = useState(null); // id of the active card
  const [slideshowActive, setSlideshowActive] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const activeCard = data ? data.find((card) => card.id === cardId) : null;

  useEffect(() => {
    services.getAllCards().then((result) => {
      if (result) {
        const cards = utils.createIds(result);
        setData(cards);
      }
    });
  }, []);

  const startSlideshow = () => {
    setSlideshowActive(true);

    if (location.pathname === '/home') {
      if (!cardId) {
        setCardId(data[0].id);
        navigate(`/slideshow/${data[0].id}`);
      } else {
        navigate(`/slideshow/${cardId}`);
      }
    }

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCardId((prevId) => {
          const prevIndex = data.findIndex((card) => card.id === prevId);
          if (prevIndex === data.length - 1) {
            return data[0].id;
          }

          return data[prevIndex + 1].id;
        });
      }, 5000);
    }
  };

  const stopSlideShow = () => {
    setSlideshowActive(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="app text-body container">
      <Header
        onStartSlideshow={startSlideshow}
        onStopSlideshow={stopSlideShow}
        slideshowActive={slideshowActive}
      />
      <hr className="divider" />
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={<Home data={data} setCardId={setCardId} />}
          />
          <Route
            path="slideshow"
            element={
              <SlideShowLayout
                data={data}
                setCardId={setCardId}
                cardData={activeCard}
              />
            }
          >
            <Route
              path=":cardId"
              element={<SlideShowElement cardData={activeCard} />}
            />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
