export class Graph{
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

    addVertex(vertex) {
        if (!this._adjList.has(vertex)) {
            this._adjList.set(vertex, new Set())
        };
    }
    addEdge(vertex1,vertex2) {
        this._adjList.get(vertex1).add(vertex2);
    }
    dfs() {
        const visited = {}
        for (let node of this._adjList.keys()) {
        this._dfsUtil(node, visited)
        }
    }
        
    _dfsUtil(vertex, visited) {
        if (!visited[vertex]){  
        visited[vertex] = true
        const neighbors = this._adjList.get(vertex);
        for (let neighbor of neighbors.keys()) {
            console.log(vertex, neighbor)
            this._dfsUtil(neighbor, visited)
        
        }
        }
    }

    detectCycle() {
        const visited = {};
        const recStack = {};
        const chain = [];
        
        for (let node of this._adjList.keys()) {
        if (this._detectCycleUtil(node, visited , recStack,chain)) 
            return 'there is a cycle'
        }
        return 'no cycle!'
    }

    _detectCycleUtil(vertex, visited, recStack,chain) {
        if(!visited[vertex]){
        visited[vertex] = true;
        recStack[vertex] = true;
        const nodeNeighbors = this._adjList.get(vertex);
        for(let currentNode of nodeNeighbors.keys()){
            console.log('parent', vertex, 'Child',currentNode,'chain',chain);
            if(this._adjList.get(currentNode).size > 0) chain.push(currentNode);
            if(!visited[currentNode] && this._detectCycleUtil(currentNode,visited, recStack,chain)){
            return true;
            } else if (recStack[currentNode]){
            return true;
            }
        }
        }
        recStack[vertex] = false;
        return false;
    }
}
