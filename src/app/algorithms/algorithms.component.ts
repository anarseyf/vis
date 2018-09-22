import {AfterContentInit, Component, OnInit} from '@angular/core';
import * as d3 from "d3";

@Component({
    selector: 'app-algorithms',
    templateUrl: './algorithms.component.html',
    styleUrls: ['./algorithms.component.css']
})

export class AlgorithmsComponent implements OnInit, AfterContentInit {

    data: object[];
    count: number = 10;
    width: number = 600;
    height: number = 400;

    constructor() {

        this.data = new Array(this.count)
            .fill(0)
            .map(() => {
                return {
                    x: this.randomCoordinate(this.width),
                    y: this.randomCoordinate(this.height) }
            });

        console.log(this.data);
    }

    randomCoordinate(max: number) {
        return Math.random() * max;
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log(this.data);

        let selection = d3.select("#svg")
            .selectAll("circle")
            .data(this.data);

        selection.enter()
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

}
