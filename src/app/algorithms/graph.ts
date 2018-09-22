export class Node {
    x: number;
    y: number;
    name: string;
    edges: Set<Edge>;
    constructor(x: number, y: number, name = "Node") {
        this.x = x;
        this.y = y;
        this.name = name;
        this.edges = new Set();
    }
    addEdge(edge: Edge) {
        if (edge.node1 == this || edge.node2 == this) {
            this.edges.add(edge);
        }
        else {
            console.warn(`Cannot add ${edge} to ${this}`);
        }
    }
    toString() {
        return `${this.name} (${this.x}, ${this.y})`;
    }
}

export class Edge {
    node1: Node;
    node2: Node;

    constructor(node1: Node, node2: Node) {
        this.node1 = node1;
        this.node2 = node2;
    }

    get distance() {
        const dx2 = Math.pow(this.node1.x - this.node2.x, 2),
            dy2 = Math.pow(this.node1.y - this.node2.y, 2),
            distance = Math.sqrt(dx2 + dy2);
        return Math.round(distance * 100) / 100;
    }

    toString() {
        return `Edge (${this.node1.name} - ${this.node2.name}, dist: ${this.distance})`;
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
            throw(`Cannot add ${edge.toString()} to graph`);
        }
        if (!edge.node1 || !edge.node2 || edge.node1 == edge.node2) {
            throw(`Invalid edge: ${edge.toString()}`)
        }

        this.edges.push(edge);
        edge.node1.addEdge(edge);
        edge.node2.addEdge(edge);
    }

    toString() {
        const nodesStr = Array.from(this.nodes)
            .map(n => n.toString())
            .join("\n\t");
        const edgesStr = this.edges
            .map(e => e.toString())
            .join("\n\t");

        return `Graph:\n\t${nodesStr}\n\t${edgesStr}`;
    }
}