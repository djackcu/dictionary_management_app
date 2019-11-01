export function setDictionary(dictionaries) {
  const nameDictionaries = dictionaries.map(dict=>dict.name).join(',');
  localStorage.setItem("dictionaries",nameDictionaries);
}

export function getDictionaries() {
  return localStorage.getItem("dictionaries").split(",");
}
