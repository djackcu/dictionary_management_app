import { camelCase } from '../utils/handleNameDB';

export function setDictionary(dictionaries) {
  const nameDictionaries = dictionaries.map(dict=>dict.name).join(',');
  localStorage.setItem("dictionaries",nameDictionaries);
}

export function getDictionaries() {
  return localStorage.getItem("dictionaries").split(",");
}

//for dictionary manager and original client fetch from database 
export function setRow(dictionaryName,domain,range){
  const domainDB = camelCase(dictionaryName + ' '+domain);
  localStorage.setItem(domainDB,range)
}

//for original dataset 
export function getRow(dictionaryName, domain){
  const domainDB = camelCase(dictionaryName + ' '+domain);
  return localStorage.getItem(domainDB);
}

//for original dataset 
export function deleteRow(dictionaryName, domain){
  const domainDB = camelCase(dictionaryName + ' '+domain);
  return localStorage.removeItem(domainDB)
}