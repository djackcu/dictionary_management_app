export class Dictionary{
    constructor(data = {name:'dictionary',description :'Default description', dataList:new Map()}) {
        this.dataList = data.dataList;
        this.name = data.name;
        this.description = data.description;
        this.isValidated = false;
        }
    addRow(range, domain){
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
        this._deleteVertex(domain);
        this._deleteEdge(range,domain)
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
        this.dataList.delete(vertex)
    }

    _deleteEdge(vertex1,vertex2){
        this.dataList.get(vertex1).delete(vertex2);
        if(this.dataList.get(vertex1).size===0) this._deleteVertex(vertex1)
    }

    _getRange(domain){
        for (let [key,value] of this.dataList) {
            if(value.has(domain)) return (key);
            }
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
            chain:[]
        }
        for (let node of this.dataList.keys()) {
        if (this._detectConsistencyUtil(node,tracker,response)) 
            return response;
        }
        return(!response.isFork && !response.isChain && !response.isCycle)?true:response;
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
                return true;
            } else if (tracker.recStack[currentNode]){
                response.isCycle = true;
                return true;
            }
        }
        }
        tracker.recStack[vertex] = false;
        return false;
    }
}
