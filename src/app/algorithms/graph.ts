export class Node {
    x: number;
    y: number;
    name: string;
    visited: boolean;
    edges: Map<Node, Edge>;

    constructor(x: number, y: number, name = "Node") {
        this.x = x;
        this.y = y;
        this.name = name;
        this.edges = new Map();
        this.visited = false;
    }
    addEdge(edge: Edge) {
        const neighbor = (edge.node1 == this ? edge.node2 : edge.node1);
        this.edges.set(neighbor, edge);
    }
    neighbors() : Set<Node> {
        return new Set(this.edges.keys());
    }
    hasNeighbor(node: Node) {
        return this.edges.has(node);
    }
    toString() {
        return `${this.name} (x:${this.x}, y:${this.y}, visited: ${this.visited}, neighbors: ${this.edges.size})`;
    }
}

export class Edge {
    node1: Node;
    node2: Node;
    visited: boolean;

    constructor(node1: Node, node2: Node) {
        if (!node1 || !node2) {
            throw(`Invalid Edge constructor arguments`);
        }
        this.node1 = node1;
        this.node2 = node2;
        this.visited = false;
    }

    get distance() {
        const dx2 = Math.pow(this.node1.x - this.node2.x, 2),
            dy2 = Math.pow(this.node1.y - this.node2.y, 2),
            distance = Math.sqrt(dx2 + dy2);
        return Math.round(distance * 100) / 100;
    }

    toString() {
        return `Edge (${this.node1.name} - ${this.node2.name}, visited: ${this.visited}, dist: ${this.distance})`;
    }
}

export class Graph {
    nodes: Set<Node>;
    edges: Edge[];
    name: string;

    constructor(nodes: Node[], edges: Edge[] = [], name = "Graph") {
        this.name = name;
        this.nodes = new Set(nodes);
        this.edges = [];
        edges.forEach(e => this.addEdge(e));
    }

    addEdge(edge: Edge) {
        if (!this.nodes.has(edge.node1) || !this.nodes.has(edge.node2)) {
            throw(`Ignoring unrecognized node: ${edge}`);
        }
        if (!edge.node1 || !edge.node2 || edge.node1 == edge.node2) {
            console.warn(`Ignoring invalid edge: ${edge}.`);
            return;
        }
        if (edge.node1.hasNeighbor(edge.node2)) {
            console.warn(`Ignoring already-existing edge: ${edge}`);
            return;
        }

        this.edges.push(edge);
        edge.node1.addEdge(edge);
        edge.node2.addEdge(edge);
    }

    visit(from: Node, to: Node) : boolean {

        console.log(`Visiting ${from} -> ${to}`);

        let edge = from.edges.get(to);
        if (!edge) {
            console.warn(`Nodes are not neighbors: ${from}, ${to}`);
            return false;
        }

        from.visited = to.visited = edge.visited = true;
        return true;
    }

    toString() {
        const nodesStr = Array.from(this.nodes).join("\n\t");
        const edgesStr = this.edges.join("\n\t");

        return `Graph:\n\t${nodesStr}\n\t${edgesStr}`;
    }
}