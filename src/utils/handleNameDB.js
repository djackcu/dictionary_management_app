export function camelCase(str) { 
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) 
        { 
            return index === 0 ? word.toLowerCase() : word.toUpperCase(); 
        }).replace(/\s+/g, ''); 
}

export function deCamelCase(str, separator){
	separator = typeof separator === 'undefined' ? '_' : separator;

	return str
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();
}