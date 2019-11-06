import { camelCase } from '../utils/handleNameDB';

export function setDictionary(dictionaries) {
  const nameDictionaries = dictionaries.map(dict=>dict.name).join(',');
  localStorage.setItem("dictionaries",nameDictionaries);
}

export function getDictionaries() {
  return localStorage.getItem("dictionaries").split(",");
}

//for dictionary manager and original client fetch from database 
export function setRow(dictionary,domain,range){
  const domainDB = camelCase(dictionary.name + ' '+domain);
  console.log(domainDB);
  localStorage.setItem(domainDB,range)
}

//for original dataset 
export function getRow(dictionary, domain){
  const domainDB = camelCase(dictionary.name + ' '+domain);
  console.log(domainDB);
  return localStorage.getItem(domainDB);
}