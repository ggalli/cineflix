import config from '../config';

const URL_CATEGORIES = `${config.BACKEND_URL}/categorias`;

const getAll = async () => {
  try {
    const response = await fetch(URL_CATEGORIES);
    return await response.json();
  } catch (error) {
    throw new Error('Não foi possível pegar os dados :(');
  }
}

const getAllWithVideos = async () => {
  try {
    const response = await fetch(`${URL_CATEGORIES}?_embed=videos`);
    return await response.json();
  } catch (error) {
    throw new Error('Não foi possível pegar os dados :(');
  }
}

export default {
  getAllWithVideos,
  getAll,
};