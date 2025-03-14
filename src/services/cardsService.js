const baseUrl = '/data/data.json';

const getAllCards = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Fetch failed: ', error);
  }
};

export default {
  getAllCards,
};
