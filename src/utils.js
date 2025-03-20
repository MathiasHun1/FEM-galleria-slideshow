import { v4 as uuidv4 } from 'uuid';

export const createIds = (cardsArray) => {
  const cardsWithId = cardsArray.map((card) => {
    const updated = {
      ...card,
      id: uuidv4(),
    };
    return updated;
  });

  return cardsWithId;
};

export const cacheImages = async (sourceArray) => {
  const promises = sourceArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => reject();
    });
  });

  return Promise.all(promises);
};
