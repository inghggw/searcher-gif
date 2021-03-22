export const getGifs = async(category) => {
  const apiKey = 'SpzXIX4nHQua6KPUXMLG5D8A7SJTNzF3';
  const limit = 10;
  const q = encodeURI(category);
  const api = 'https://api.giphy.com/v1/gifs/search';
  const path = `${api}?limit=${limit}&q=${q}&api_key=${apiKey}`;

  const res = await fetch(path);
  const { data } = await res.json();

  const gifs = data.map(img => {
    return {
      key: img.id,
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
}