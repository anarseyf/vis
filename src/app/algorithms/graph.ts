export class Node {
    x: number;
    y: number;
    name: string;
    constructor(x: number, y: number, name = "Node") {
        this.x = x; this.y = y; this.name = name;
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
        let dx2 = Math.pow(this.node1.x - this.node2.x, 2),
            dy2 = Math.pow(this.node1.y - this.node2.y, 2);
        return Math.sqrt(dx2 + dy2);
    }

    toString() {
        return `Edge (${this.node1} - ${this.node2}, dist: ${this.distance})`;
    }
}

export class Graph {
    nodes: Node[];
    edges: Edge[];

    constructor(nodes: Node[], edges: Edge[]) {
        this.nodes = nodes;
        this.edges = edges;
    }

    toString() {
        return `Graph:\n${this.nodes}\n${this.edges}`;
    }
}