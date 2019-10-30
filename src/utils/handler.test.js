import { Dictionary } from './handler';
it('testing ok', () => {
    const graph = new Dictionary()

    graph.addVertex('StoneGrey')
    graph.addVertex('Anthracite')
    graph.addVertex('Dark Grey')
    graph.addVertex('Grey Cloud')
    graph.addVertex('Caribean Sea')
    graph.addVertex('Turquoise')
    graph.addEdge('Dark Grey','StoneGrey')
    graph.addEdge('Dark Grey','Grey Cloud')
    graph.addEdge('Turquoise','Caribean Sea')

    console.log(graph.detectConsistency())
    console.log(graph.getList());
});

it('testing cycle', () => {
    const graph = new Dictionary()

    graph.addVertex('StoneGrey')
    graph.addVertex('Anthracite')
    graph.addVertex('Dark Grey')
    graph.addVertex('Blue')
    graph.addVertex('Caribean Sea')
    graph.addVertex('Turquoise')
    graph.addEdge('Dark Grey','StoneGrey')
    graph.addEdge('StoneGrey','Dark Grey')
    graph.addEdge('Anthracite','Dark Grey')
    graph.addEdge('Blue','Anthracite')
    graph.addEdge('Turquoise','Caribean Sea')

    console.log(graph.detectConsistency())
});

it('testing chain', () => {
    const graph = new Dictionary()

    graph.addVertex('StoneGrey')
    graph.addVertex('Anthracite')
    graph.addVertex('Dark Grey')
    graph.addVertex('Blue')
    graph.addVertex('Caribean Sea')
    graph.addVertex('Turquoise')
    graph.addEdge('Dark Grey','StoneGrey')
    graph.addEdge('Anthracite','Dark Grey')
    graph.addEdge('Blue','Anthracite')
    graph.addEdge('Turquoise','Caribean Sea')

    console.log(graph.detectConsistency())
});
it('testing fork', () => {
    const graph = new Dictionary()

    graph.addVertex('StoneGrey')
    graph.addVertex('Anthracite')
    graph.addVertex('Dark Grey')
    graph.addVertex('Blue')
    graph.addVertex('Caribean Sea')
    graph.addVertex('Turquoise')
    graph.addEdge('Dark Grey','StoneGrey')
    graph.addEdge('Anthracite','StoneGrey')
    graph.addEdge('Turquoise','Caribean Sea')

    console.log(graph.detectConsistency())
});


it('testing fork and chain', () => {
    const graph = new Dictionary()

    graph.addVertex('StoneGrey')
    graph.addVertex('Anthracite')
    graph.addVertex('Dark Grey')
    graph.addVertex('Blue')
    graph.addVertex('Caribean Sea')
    graph.addVertex('Turquoise')
    graph.addEdge('Dark Grey','StoneGrey')
    graph.addEdge('Anthracite','StoneGrey')
    graph.addEdge('Anthracite','Dark Grey')
    graph.addEdge('Turquoise','Caribean Sea')

    console.log(graph.detectConsistency())
});

it('testing fork and chain and cycle', () => {
    const graph = new Dictionary()

    graph.addVertex('StoneGrey')
    graph.addVertex('Anthracite')
    graph.addVertex('Dark Grey')
    graph.addVertex('Blue')
    graph.addVertex('Caribean Sea')
    graph.addVertex('Turquoise')
    graph.addEdge('Dark Grey','StoneGrey')
    graph.addEdge('Anthracite','StoneGrey')
    graph.addEdge('Anthracite','Dark Grey')
    graph.addEdge('StoneGrey','Turquoise')
    graph.addEdge('Turquoise','Anthracite')

    console.log(graph.detectConsistency())
});