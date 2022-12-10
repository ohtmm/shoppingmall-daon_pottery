const getLocalStorage = () => {
  const items = JSON.parse(`${localStorage.getItem('cart')}`);
  return items;
};

export default getLocalStorage;
