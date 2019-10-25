export function initialStore() {
  localStorage.setItem("dictionaries", "")
}

export function setDictionary(name) {
  let dictionariesValues = [...localStorage.getItem("dictionaries").split(","),name];
  dictionariesValues = dictionariesValues[0] ===''?dictionariesValues.slice(1).join():dictionariesValues.join();
  localStorage.setItem("dictionaries",dictionariesValues);
}

export function getDictionaries() {
  return localStorage.getItem("dictionaries").split(",");
}
