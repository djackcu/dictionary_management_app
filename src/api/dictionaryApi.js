export function setDictionary(dictionaries) {
  localStorage.setItem("dictionaries",dictionaries.join(','));
}

export function getDictionaries() {
  return localStorage.getItem("dictionaries").split(",");
}
