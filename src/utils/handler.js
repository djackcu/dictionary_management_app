export class Dictionary{
    constructor(data = {name:'dictionary',description :'Default description', dataList:new Map()}) {
        this.dataList = data.dataList;
        this.name = data.name;
        this.description = data.description;
        }
    addRow(range, domain){
        if(!this.dataList.has(range)) this._addVertex(range);
            this._addVertex(domain);
            this._addEdge(range,domain);
            return this;
    }
    addValidatedRow(range, domain){
        try {
            if(this.dataList.has(range) && this.dataList.get(range).size === 0) throw new Error('This range is domain');
            if(this.dataList.has(domain)) throw new Error('This domain exist');
            if(!this.dataList.has(range)) this._addVertex(range);
            this._addVertex(domain);
            this._addEdge(range,domain);
            return this;
        } catch (error) {
            return this;
        }
    }
    deleteRow(range,domain){
        this._deleteEdge(range,domain)
        if(!this._getRange(domain) && this.dataList.get(domain).size===0)this._deleteVertex(domain)
        if(!this._getRange(range) && this.dataList.get(range).size===0)this._deleteVertex(range)
        return this;
    }

    updateRow(range,domain){
        const oldRange = this._getRange(domain)
        this.deleteRow(oldRange,domain)
        try {
            this.addRow(range,domain)
        } catch (error) {
            this.addRow(oldRange,domain)
        }
        
        return this;
    }

    _addVertex(vertex){
        if (!this.dataList.has(vertex)) {
            this.dataList.set(vertex, new Set())// Delete any duplication
        };
    }

    _addEdge(vertex1,vertex2){
        this.dataList.get(vertex1).add(vertex2);
    }

    _deleteVertex(vertex){
        /* for (const list of this.dataList.values()) {
            list.delete(vertex)
        } */
        this.dataList.delete(vertex)
    }

    _deleteEdge(vertex1,vertex2){
        this.dataList.get(vertex1).delete(vertex2);
        
    }

    _getRange(domain){
        for (let [key,value] of this.dataList) {
            if(value.has(domain)) return (key);
            }
        return false;
    }

    getList(){
        const visited = {};
        const dictionaryList = [];
        for (let node of this.dataList.keys()) {
        this._getListUtil(node, visited, dictionaryList)
        }
        return dictionaryList;
    }
        
    _getListUtil(vertex, visited, dictionaryList){
        if (!visited[vertex]){  
        visited[vertex] = true
        const neighbors = this.dataList.get(vertex);
        for (let neighbor of neighbors.keys()) {
            dictionaryList.push({range:vertex, domain:neighbor})
            this._getListUtil(neighbor, visited, dictionaryList)
        }
        }
    }

    detectConsistency(){
        const tracker = {
            visited: {},
            recStack:{},
            childVisited: {},
        }
        const response = {
            isFork:false,
            isChain:false,
            isCycle:false,
            fork:[],
            chain:[],
            cycle:[]
        }
        for (let node of this.dataList.keys()) {
        if (this._detectConsistencyUtil(node,tracker,response)) 
            return response;
        }
        return response;
    }

    _detectConsistencyUtil(vertex,tracker,response){
        if(!tracker.visited[vertex]){
        tracker.visited[vertex] = true;
        tracker.recStack[vertex] = true;
        const nodeNeighbors = this.dataList.get(vertex);
        for(let currentNode of nodeNeighbors.keys()){
            //console.log('parent', vertex, 'Child',currentNode,'chain',response.chain,'fork',response.fork);
            if(tracker.childVisited[currentNode]) {
                response.isFork = true;
                response.fork.push(currentNode);
            };
            tracker.childVisited[currentNode] = true;
            if(this.dataList.get(currentNode).size > 0) {
                response.isChain= true;
                response.chain.push(currentNode);
            }
            if(!tracker.visited[currentNode] && this._detectConsistencyUtil(currentNode,tracker,response)){
                response.isCycle = true;
                response.cycle.push(currentNode);
                return true;
            } else if (tracker.recStack[currentNode]){
                response.isCycle = true;
                response.cycle.push(currentNode);
                return true;
            }
        }
        }
        tracker.recStack[vertex] = false;
        return false;
    }

    getValidatedList(){
        const newList = this.getList();
        const response = this.detectConsistency();
            newList.forEach((row) => {
                if(response.isCycle && response.cycle.includes(row.range)) return row.marker='cycle';
                if(response.isChain && (response.chain.includes(row.range) || response.chain.includes(row.domain))) return row.marker='chain';
                if(response.isFork && response.fork.includes(row.domain)) return row.marker='fork';
                return row.marker ='ok'
            })
        return newList;
    }
    isValid(){
        const response =  this.detectConsistency();
        return (!response.isFork && !response.isChain && !response.isCycle)
    }
}
