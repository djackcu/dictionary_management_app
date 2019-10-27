import {useEffect,useState} from 'react';
import * as dictionaryApi from '../../api/dictionaryApi';

const useApp = (initial) => {    
    const [dictionaries, setDictionaries] = useState(...[initial]);
    useEffect(() => {
    dictionaryApi.setDictionary(dictionaries);
    return () => {
        localStorage.clear();
        };
    },[]);
    return {dictionaries}
}

export default useApp
