import { Routes, Route, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import services from './services/cardsService';
import utils from './utils';

import Header from './components/Header';
import Home from './components/pages/Home';
import SlideShow from './components/pages/SlideShow';
import SlideShowLayout from './components/pages/SlideShowLayout';

function App() {
  const [data, setData] = useState(null);
  // const url = useLocation();
  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    services.getAllCards().then((result) => {
      if (result) {
        const cards = utils.createIds(result);
        setData(cards);
      }
    });
  }, []);

  useEffect(() => {
    console.log(cardId);
  }, [cardId]);

  return (
    <div className="app text-body container">
      <Header />
      <hr className="divider" />
      <main className="home wrapper">
        <Routes>
          <Route
            path="/"
            element={<Home data={data} setCardId={setCardId} />}
          />
          <Route path="slideshow" element={<SlideShowLayout />}>
            <Route path={`${cardId}`} element={<div>{cardId}</div>} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
