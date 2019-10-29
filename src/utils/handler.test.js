import { Graph } from './handler';

it('testing data structure', () => {
    const graph = new Graph()

    graph.addVertex('StoneGrey')
    graph.addVertex('Anthracite')
    graph.addVertex('Dark Grey')
    graph.addVertex('Blue')
    graph.addVertex('Caribean Sea')
    graph.addVertex('Turquoise')
    graph.addEdge('Dark Grey','StoneGrey')
    //graph.addEdge('StoneGrey','Dark Grey')
    graph.addEdge('Anthracite','Dark Grey')
    graph.addEdge('Blue','Anthracite')
    graph.addEdge('Turquoise','Caribean Sea')

    console.log(graph)
    console.log(graph.detectCycle())
    graph.dfs()
});