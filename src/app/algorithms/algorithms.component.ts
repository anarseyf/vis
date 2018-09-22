import {AfterContentInit, Component, OnInit} from '@angular/core';
import * as d3 from "d3";
import { Node, Edge, Graph } from "./graph";
import { DijkstraService } from "./dijkstra.service";

@Component({
    selector: 'app-algorithms',
    templateUrl: './algorithms.component.html',
    styleUrls: ['./algorithms.component.css']
})

export class AlgorithmsComponent implements OnInit, AfterContentInit {

    graph: Graph;
    nodeCount: number = 50;
    width: number = 600;
    height: number = 400;
    circleRadius: number = 6;

    constructor(private dijkstraService : DijkstraService) {
        this.reset();
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.drawGraph();
    }

    randomNumber(max: number) {
        return Math.round(Math.random() * max);
    }

    addRandomEdges() {
        const maxEdges = this.nodeCount * 10;
        const edgeCount = this.randomNumber(maxEdges);

        let max = this.graph.nodes.size - 1;
        for (let i = 0; i < edgeCount; i++) {
            let i1 = this.randomNumber(max),
                i2 = this.randomNumber(max);
            let nodes = Array.from(this.graph.nodes);
            let edge = new Edge(nodes[i1], nodes[i2]);
            this.graph.addEdge(edge);
        }

        this.drawGraph();
        console.log(`${this.graph}`);
    }

    visitRandomNodes() {

        let nodes = Array.from(this.graph.nodes);
        let count = nodes.length * 2;
        for (let i = 0; i < count; i++) {
            let from = nodes[this.randomNumber(nodes.length - 1)];
            let neighbors = Array.from(from.neighbors());
            let to = neighbors[this.randomNumber(neighbors.length - 1)];
            let success = this.graph.visit(from, to);
        }

        this.drawGraph();
        console.log(`${this.graph}`);
    }

    getRandomShortestPath() {
        let nodes = [...this.graph.nodes];
        let source = nodes[0];
        let target = nodes[nodes.length - 1];
        source.special = target.special = true;
        let path = this.dijkstraService.shortestPath(this.graph, source, target);
        console.log(`Path ${ source } -> ${ target }:\n\t${ path.join("\n\t") }`);
        this.visitPath(path);
    }

    visitPath(path: Node[]) {
        for (let i = 0; i < path.length - 1; i++) {
            let from = path[i], to = path[i + 1];
            this.graph.visit(from, to);
        }
    }

    reset() {
        this.resetSVG();

        let margin = this.circleRadius * 4;
        let nodes = new Array(this.nodeCount)
            .fill(0)
            .map((v, i) => {
                return new Node(this.randomNumber(this.width - margin) + margin/2,
                                this.randomNumber(this.height - margin) + margin/2,
                                `Node ${i}`);
            })
            .sort((a, b) => a.x - b.x);
        this.graph = new Graph(nodes);

        this.addRandomEdges();
        // this.visitRandomNodes();
        this.getRandomShortestPath();

        this.drawGraph();
    }

    resetSVG() {
        d3.select("#svg").html("");
    }

    drawGraph() {
        this.drawEdges();
        this.drawNodes();
    }

    drawNodes() {
        let nodes = Array.from(this.graph.nodes);
        let svg = d3.select("#svg");

        let circles = svg.selectAll("circle")
            .data(nodes);

        circles.enter()
            .append("circle")
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            })
            .attr("r", this.circleRadius)
            .attr("stroke", "gray")
            .attr("stroke-width", function (d: Node) {
                return d.special ? 2 : 1;
            })
            .attr("fill", function (d: Node) {
                return d.special ? "red" : (d.visited ? 'darkgray' : 'lightgray');
            });

        circles.exit().remove();
    }

    drawEdges() {
        let edges = this.graph.edges;
        let svg = d3.select("#svg");

        let lines = svg.selectAll("line")
            .data(edges);

        lines.enter()
            .append("line")
            .attr("x1", function (edge: Edge) { return edge.node1.x; })
            .attr("x2", function (edge: Edge) { return edge.node2.x; })
            .attr("y1", function (edge: Edge) { return edge.node1.y; })
            .attr("y2", function (edge: Edge) { return edge.node2.y; })
            .attr("stroke", function(d: Edge) {
                return d.visited ? 'darkgray' : 'lightgray';
            })
            .attr("stroke-width", function(d: Edge) {
                return d.visited ? 3 : 1;
            });

        lines.exit().remove();
    }
}
