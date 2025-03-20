import { Routes, Route, Navigate } from 'react-router';
import { useState } from 'react';

import Home from './pages/Home';
import SlideShowLayout from './pages/SlideShowLayout';
import SlideShowElement from './SlideShowElement';

const Main = ({ data, imageLoaded, setImageLoaded, slideshowActive }) => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home data={data} />} />
        <Route
          path="slideshow"
          element={
            <SlideShowLayout
              data={data}
              setImageLoaded={setImageLoaded}
              slideshowActive={slideshowActive}
            />
          }
        >
          <Route
            path=":cardId"
            element={
              <SlideShowElement
                data={data}
                imageLoaded={imageLoaded}
                setImageLoaded={setImageLoaded}
              />
            }
          />
        </Route>
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </main>
  );
};

export default Main;
