const saveToLocalStorage = (key, item) => {
  let items = JSON.parse(localStorage.getItem(key)) || [];
  if (!items) {
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    const newItems = [...items, item];
    localStorage.setItem(key, JSON.stringify(newItems));
  }
};

export { saveToLocalStorage };
