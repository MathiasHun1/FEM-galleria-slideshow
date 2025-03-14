import { v4 as uuidv4 } from 'uuid';

const createIds = (cardsArray) => {
  const cardsWithId = cardsArray.map((card) => {
    const updated = {
      ...card,
      id: uuidv4(),
    };
    return updated;
  });

  return cardsWithId;
};

export default { createIds };
