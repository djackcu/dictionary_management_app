export class Dictionary{
    constructor(name='dictionary',description = 'Default description') {
        this._adjList = new Map();
        this._name = name;
        this._description = description;
        }
    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    addRow(range, domain){
        try {
            if(this._adjList.has(range) && this._adjList.get(range).size === 0) throw new Error('This range is domain');
            if(this._adjList.has(domain)) throw new Error('This domain exist');
            if(!this._adjList.has(range)) this._addVertex(range);
            this._addVertex(domain);
            this._addEdge(range,domain);
        } catch (error) {
            
        }

    }

    _addVertex(vertex) {
        if (!this._adjList.has(vertex)) {
            this._adjList.set(vertex, new Set())// Delete any duplication
        };
    }

    _addEdge(vertex1,vertex2) {
        this._adjList.get(vertex1).add(vertex2);
    }

    deleteRow(domain,range){

    }

    _deleteVertex = (vertex) => {
        this._adjList.delete(vertex)
    }

    _deleteEdge = (vertex1,vertex2) => {
        this._adjList.get(vertex1).delete(vertex2);
    }

    getList() {
        const visited = {};
        const dictionaryList = [];
        for (let node of this._adjList.keys()) {
        this._getListUtil(node, visited, dictionaryList)
        }
        return dictionaryList;
    }
        
    _getListUtil(vertex, visited, dictionaryList) {
        if (!visited[vertex]){  
        visited[vertex] = true
        const neighbors = this._adjList.get(vertex);
        for (let neighbor of neighbors.keys()) {
            dictionaryList.push({range:vertex, domain:neighbor})
            this._getListUtil(neighbor, visited, dictionaryList)
        
        }
        }
    }

    detectConsistency() {
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
        for (let node of this._adjList.keys()) {
        if (this._detectConsistencyUtil(node,tracker,response)) 
            return response;
        }
        return response
    }

    _detectConsistencyUtil(vertex,tracker,response) {
        if(!tracker.visited[vertex]){
        tracker.visited[vertex] = true;
        tracker.recStack[vertex] = true;
        const nodeNeighbors = this._adjList.get(vertex);
        for(let currentNode of nodeNeighbors.keys()){
            //console.log('parent', vertex, 'Child',currentNode,'chain',response.chain,'fork',response.fork);
            if(tracker.childVisited[currentNode]) {
                response.isFork = true;
                response.fork.push(currentNode);
            };
            tracker.childVisited[currentNode] = true;
            if(this._adjList.get(currentNode).size > 0) {
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
