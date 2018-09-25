import { Injectable } from '@angular/core';
import { Graph, Node, Edge } from './graph';

@Injectable({
    providedIn: 'root'
})
export class DijkstraService {

    constructor() { }

    * shortestPath(graph: Graph, source: Node, target: Node) {

        let q = new PriorityQueue();
        let dist: Map<Node, number> = new Map();
        let prev: Map<Node, Node> = new Map();

        let nodes = graph.nodes;
        nodes.forEach(node => {
            dist.set(node, node == source ? 0 : Infinity);
            prev.set(node, null);
        });

        q.addWithPriority(source, dist.get(source));

        while (!q.isEmpty()) {// && q.smallestDistance < Infinity) {
            let u = q.remove();
            for (let v of u.neighbors()) {
                let edge = u.edges.get(v);
                let distance = dist.get(u) + edge.distance;
                if (distance < dist.get(v)) {
                    dist.set(v, distance);
                    prev.set(v, u);
                    q.addWithPriority(v, distance);
                }
            }
            console.log(`${q}`);
            yield;
        }

        console.log(`DONE: ${q}`);

        let result: Node[] = [];
        if (dist.get(target) < Infinity) {
            let node = target;
            while (node != null) {
                result.push(node);
                node = prev.get(node);
            }
        }

        return result;
    }
}

export class QueueNode {
    node: Node;
    priority: number;
    constructor(node: Node, priority: number) {
        this.node = node;
        this.priority = priority;
    }
    toString() {
        return `${this.node.name} (${this.priority})`;
    }
}

export class PriorityQueue {
    private queue: QueueNode[];

    constructor() {
        this.queue = [];
    }

    addWithPriority(node: Node, priority: number) {

        this.removeIfPresent(node);

        let index = 0;
        let q = this.queue;
        while (index < q.length) {
            let qnode = q[index];
            if (qnode.priority >= priority) {
                break;
            }
            index++;
        }
        let qnode = new QueueNode(node, priority);
        this.queue = [...q.slice(0, index), qnode, ...q.slice(index, q.length)];

        // console.log(`Added: ${ node }`);
    }

    private removeIfPresent(node: Node) {
        let q = this.queue;
        let index = q.map(qn => qn.node).indexOf(node);
        if (index != -1) {
            this.queue = [...q.slice(0, index), ...q.slice(index + 1, q.length)];
            // console.log(`Removed: ${ node }`);
        }
    }

    remove() : Node {
        let qn = this.queue.shift();
        return qn.node;
    }

    get smallestDistance() : number {
        return (this.queue.length ? this.queue[0].priority : Infinity);
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    toString() {
        let queueStr = this.queue.join("; ");
        return `Queue (size: ${ this.queue.length }):\n\t${ queueStr }`;
    }
}
