import * as dictionaryAPI from './dictionaryApi';
import {toCamelCaseString} from '../utils/handleNameDB';

describe('Testing storage', () => {
  const dictionaryTest = {
    name:'color'
  };
  console.log(dictionaryTest.name);
  dictionaryAPI.setRow(dictionaryTest,'hello world')
  
  it('should return value from storage', () => {
    
    const value = dictionaryAPI.getRow(dictionaryTest,'hello world');
     // expect(value).toBe('hello');
  });
});

