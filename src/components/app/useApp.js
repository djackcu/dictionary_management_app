import {useEffect,useState} from 'react';
import * as dictionaryApi from '../../api/dictionaryApi';

const useApp = () => {    
    const [dictionaries, setDictionaries] = useState([]);

    useEffect(() => {
    dictionaryApi.initialStore();
    dictionaryApi.setDictionary('color');
    const dictionariesValues =  dictionaryApi.getDictionaries();
    setDictionaries([...dictionariesValues]);
    return () => {
        localStorage.clear();
        };
    },[]);
    return {dictionaries}
}

export default useApp
