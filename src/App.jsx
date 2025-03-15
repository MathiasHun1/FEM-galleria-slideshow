import { Routes, Route, Navigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import services from './services/cardsService';
import utils from './utils';

import Header from './components/Header';
import Home from './components/pages/Home';
import SlideShowLayout from './components/pages/SlideShowLayout';
import SlideShowElement from './components/pages/SlideShowElement';

function App() {
  const [data, setData] = useState(null);
  const [cardId, setCardId] = useState(null); // id of the active card

  const activeCard = data ? data.find((card) => card.id === cardId) : null;

  useEffect(() => {
    services.getAllCards().then((result) => {
      if (result) {
        const cards = utils.createIds(result);
        setData(cards);
      }
    });
  }, []);

  return (
    <div className="app text-body container">
      <Header />
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
