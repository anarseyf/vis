import {AfterContentInit, Component, OnInit} from '@angular/core';
import * as d3 from "d3";
import { Node, Edge, Graph } from "./graph";

@Component({
    selector: 'app-algorithms',
    templateUrl: './algorithms.component.html',
    styleUrls: ['./algorithms.component.css']
})

export class AlgorithmsComponent implements OnInit, AfterContentInit {

    graph: Graph;
    nodeCount: number = 20;
    width: number = 600;
    height: number = 400;

    constructor() {

        let nodes = new Array(this.nodeCount)
            .fill(0)
            .map((v, i) => {
                return new Node(this.randomNumber(this.width),
                                this.randomNumber(this.height),
                                `Node ${i}`);
            })
            .sort((a, b) => a.x - b.x);

        const maxEdges = this.nodeCount * 2;
        const edgeCount = this.randomNumber(maxEdges);
        
        this.graph = new Graph(nodes);
        this.addRandomEdges(edgeCount);
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.drawGraph();
    }

    randomNumber(max: number) {
        return Math.round(Math.random() * max);
    }

    addRandomEdges(remaining: number) {

        let max = this.graph.nodes.size - 1;
        let i1 = this.randomNumber(max),
            i2 = this.randomNumber(max);
        let nodes = Array.from(this.graph.nodes);
        let edge = new Edge(nodes[i1], nodes[i2]);
        this.graph.addEdge(edge);

        this.drawGraph();

        if (remaining > 0) {
            setTimeout(this.addRandomEdges.bind(this, remaining - 1), 10);
        }
        else {
            console.log(this.graph.toString());
        }
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
            .attr("r", 6)
            .attr("stroke", "gray")
            .attr("stroke-width", 1)
            .attr("fill", "lightgray");

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
            .attr("stroke", "gray");

        lines.exit().remove();
    }
}
