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
    nodeCount: number = 40;
    width: number = 600;
    height: number = 400;
    circleRadius: number = 6;
    delay: number = 100;

    constructor(private dijkstraService : DijkstraService) {
        this.reset();
    }

    reset() {
        this.resetSVG();

        let margin = this.circleRadius * 4;
        let nodes = new Array(this.nodeCount)
            .fill(0)
            .map((v, i) => {
                return new Node(this.randomNumber(this.width - margin) + margin/2,
                    this.randomNumber(this.height - margin) + margin/2,
                    `${i}`);
            })
            .sort((a, b) => a.x - b.x);
        this.graph = new Graph(nodes);

        this.addRandomEdges();
        this.drawGraph(this.graph);

        let [ source, target ] = this.getRandomStartEndNodes();
        source.special = target.special = true;

        let doneCallback = ((path: Node[]) => {
            this.visitPath(path, this.graph);
        });
        this.runDijkstra(this.graph, source, target, doneCallback);
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
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
    }

    getRandomStartEndNodes() {
        let nodes = [...this.graph.nodes];
        let source = nodes[0];
        let target = nodes[nodes.length - 1];
        return [source, target];
    }

    runDijkstra(graph: Graph, source: Node, target: Node, doneCallback: ((_: Node[]) => void)) {

        let iterator = this.dijkstraService.shortestPath(graph, source, target);

        let callback = function (result) {
            if (result.done) {

                // TODO - promises!

                let path = result.value;
                console.log(`Done: Path ${ source } -> ${ target }:\n\t${ path.join("\n\t") }`);
                doneCallback(path);
            }
        }.bind(this);

        this.executeAfterDelay(0, iterator, callback);
    }

    executeAfterDelay(delay, iterator, callback) {
        setTimeout(function () {
            let result = iterator.next();
            callback(result);
            if (!result.done) {
                this.executeAfterDelay(delay, iterator, callback);
            }
        }.bind(this), delay);
    }

    visitPath(path: Node[], graph: Graph) {

        this.drawGraph(graph);

        let iterator = function*() {
            for (let i = 0; i < path.length - 1; i++) {
                let from = path[i], to = path[i + 1];
                graph.visit(from, to);
                yield;
            }
        }();

        let callback = function (result) {
            this.drawGraph(graph);
        }.bind(this);

        this.executeAfterDelay(500, iterator, callback);
    }

    resetSVG() {
        d3.select("#svg").html("");
    }

    drawGraph(graph: Graph) {
        this.drawEdges(graph);
        this.drawNodes(graph);
    }

    drawNodes(graph: Graph) {
        let radius = this.circleRadius;
        let nodes = Array.from(graph.nodes);
        let svg = d3.select("#svg");

        let circles = svg.selectAll("circle")
            .data(nodes);

        circles
            .attr("stroke-width", function (d: Node) {
                return d.special ? 2 : 1;
            })
            .attr("fill", function (d: Node) {
                return d.special ? "red" : (d.visited ? 'darkgray' : 'lightgray');
            });

        circles.enter()
            .append("circle")
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            })
            .attr("r", this.circleRadius)
            .attr("stroke", "gray");

        circles.exit().remove();

        // circlesEnter
        //     .append("text")
        //     .attr("x", function (d) {
        //         return d.x + radius;
        //     })
        //     .attr("y", function (d) {
        //         return d.y + radius;
        //     })
        //     .text(function (d: Node) {
        //         return d.name;
        //     });
    }

    drawEdges(graph: Graph) {
        let edges = graph.edges;
        let svg = d3.select("#svg");

        let lines = svg.selectAll("line")
            .data(edges);

        lines
            .attr("stroke", function(d: Edge) {
                return d.visited ? 'darkgray' : 'lightgray';
            })
            .attr("stroke-width", function(d: Edge) {
                return d.visited ? 3 : 1;
            });

        lines.enter()
            .append("line")
            .attr("x1", function (edge: Edge) { return edge.node1.x; })
            .attr("x2", function (edge: Edge) { return edge.node2.x; })
            .attr("y1", function (edge: Edge) { return edge.node1.y; })
            .attr("y2", function (edge: Edge) { return edge.node2.y; });

        lines.exit().remove();
    }
}
