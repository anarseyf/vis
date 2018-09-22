export class Node {
    x: number;
    y: number;
    name: string;
    edges: Edge[];
    constructor(x: number, y: number, name = "Node") {
        this.x = x;
        this.y = y;
        this.name = name;
        this.edges = [];
    }
    addEdge(edge: Edge) {
        if (edge.node1 == this || edge.node2 == this) {
            this.edges.push(edge);
        }
        else {
            console.warn(`Cannot add ${edge} to ${this}`);
        }
    }
    hasNeighbor(node: Node) {
        for (const edge of this.edges) {
            if (edge.node1 == node || edge.node2 == node) {
                return true;
            }
        }
        return false;
    }
    toString() {
        return `${this.name} (x:${this.x}, y:${this.y}, neighbors: ${this.edges.length})`;
    }
}

export class Edge {
    node1: Node;
    node2: Node;

    constructor(node1: Node, node2: Node) {
        if (!node1 || !node2) {
            throw(`Invalid Edge constructor arguments`);
        }
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
            throw(`Ignoring unrecognized node: ${edge.toString()}`);
        }
        if (!edge.node1 || !edge.node2 || edge.node1 == edge.node2) {
            console.warn(`Ignoring invalid edge: ${edge.toString()}.`);
            return;
        }
        if (edge.node1.hasNeighbor(edge.node2)) {
            console.warn(`Ignoring already-existing edge: ${edge}`);
            return;
        }

        this.edges.push(edge);
        edge.node1.addEdge(edge);
        edge.node2.addEdge(edge);

        console.log(`Added: ${edge.toString()}`)
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