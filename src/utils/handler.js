export class Dictionary{
    constructor(name='dictionary',description = 'Default description') {
        this._data = new Map();
        this._name = name;
        this._description = description;

        }
    get size(){
        return this._dictionary.size;
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    get data(){
        return this._data;
    }

    validateDictionary(){
        
    }

    validateDuplicates(){
        return false;
    }

    validateForks(){
        return false;
    }

    validateCycles(){
        return false;
    }
    
    validateChains(){
        return false;
    }
    
}
