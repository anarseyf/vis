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
    nodeCount: number = 10;
    edgeCount: number = 0;
    width: number = 600;
    height: number = 400;

    constructor() {

        let nodes = new Array(this.nodeCount)
            .fill(0)
            .map((v, i) => {
                return new Node(this.randomNumber(this.width),
                                this.randomNumber(this.height),
                                `Node ${i}`);
            });

        const maxEdges = this.nodeCount * (this.nodeCount - 1) / 2;
        this.edgeCount = this.randomNumber(maxEdges);
        
        let edges = [
            new Edge(nodes[0], nodes[1]),
            new Edge(nodes[0], nodes[2]),
            new Edge(nodes[1], nodes[3]),
        ];

        this.graph = new Graph(nodes, edges);

        console.log(nodes);
    }

    randomNumber(max: number) {
        return Math.floor(Math.random() * max);
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log(this.graph);
        this.drawGraph();
    }

    drawGraph() {
        this.drawEdges();
        this.drawNodes();
    }

    drawNodes() {
        let nodes = this.graph.nodes;
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
            .attr("r", 4)
            .attr("stroke", "gray")
            .attr("stroke-width", 1)
            .attr("fill", "lightgray");
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

    }
}
