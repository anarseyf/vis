(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.css":
/*!*****************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nsvg {\n    border: 1px solid lightgray;\n}\n\ncircle {\n    stroke: gray;\n    stroke-width: 2px;\n}"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.html":
/*!******************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<svg id=\"svg\"\n    [attr.width]=\"width\"\n    [attr.height]=\"height\">\n\n</svg>\n"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.ts":
/*!****************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.ts ***!
  \****************************************************/
/*! exports provided: AlgorithmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmsComponent", function() { return AlgorithmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph */ "./src/app/algorithms/graph.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlgorithmsComponent = /** @class */ (function () {
    function AlgorithmsComponent() {
        var _this = this;
        this.nodeCount = 20;
        this.width = 600;
        this.height = 400;
        var nodes = new Array(this.nodeCount)
            .fill(0)
            .map(function (v, i) {
            return new _graph__WEBPACK_IMPORTED_MODULE_2__["Node"](_this.randomNumber(_this.width), _this.randomNumber(_this.height), "Node " + i);
        })
            .sort(function (a, b) { return a.x - b.x; });
        var maxEdges = this.nodeCount * 2;
        var edgeCount = this.randomNumber(maxEdges);
        this.graph = new _graph__WEBPACK_IMPORTED_MODULE_2__["Graph"](nodes);
        this.addRandomEdges(edgeCount);
    }
    AlgorithmsComponent.prototype.ngOnInit = function () {
    };
    AlgorithmsComponent.prototype.ngAfterContentInit = function () {
        this.drawGraph();
    };
    AlgorithmsComponent.prototype.randomNumber = function (max) {
        return Math.round(Math.random() * max);
    };
    AlgorithmsComponent.prototype.addRandomEdges = function (remaining) {
        var max = this.graph.nodes.size - 1;
        var i1 = this.randomNumber(max), i2 = this.randomNumber(max);
        var nodes = Array.from(this.graph.nodes);
        var edge = new _graph__WEBPACK_IMPORTED_MODULE_2__["Edge"](nodes[i1], nodes[i2]);
        this.graph.addEdge(edge);
        this.drawGraph();
        if (remaining > 0) {
            setTimeout(this.addRandomEdges.bind(this, remaining - 1), 100);
        }
        else {
            console.log(this.graph.toString());
        }
    };
    AlgorithmsComponent.prototype.drawGraph = function () {
        this.drawEdges();
        this.drawNodes();
    };
    AlgorithmsComponent.prototype.drawNodes = function () {
        var nodes = Array.from(this.graph.nodes);
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#svg");
        var circles = svg.selectAll("circle")
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
    };
    AlgorithmsComponent.prototype.drawEdges = function () {
        var edges = this.graph.edges;
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#svg");
        var lines = svg.selectAll("line")
            .data(edges);
        lines.enter()
            .append("line")
            .attr("x1", function (edge) { return edge.node1.x; })
            .attr("x2", function (edge) { return edge.node2.x; })
            .attr("y1", function (edge) { return edge.node1.y; })
            .attr("y2", function (edge) { return edge.node2.y; })
            .attr("stroke", "gray");
        lines.exit().remove();
    };
    AlgorithmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algorithms',
            template: __webpack_require__(/*! ./algorithms.component.html */ "./src/app/algorithms/algorithms.component.html"),
            styles: [__webpack_require__(/*! ./algorithms.component.css */ "./src/app/algorithms/algorithms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/graph.ts":
/*!*************************************!*\
  !*** ./src/app/algorithms/graph.ts ***!
  \*************************************/
/*! exports provided: Node, Edge, Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return Edge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var Node = /** @class */ (function () {
    function Node(x, y, name) {
        if (name === void 0) { name = "Node"; }
        this.x = x;
        this.y = y;
        this.name = name;
        this.edges = [];
    }
    Node.prototype.addEdge = function (edge) {
        if (edge.node1 == this || edge.node2 == this) {
            this.edges.push(edge);
        }
        else {
            console.warn("Cannot add " + edge + " to " + this);
        }
    };
    Node.prototype.hasNeighbor = function (node) {
        var e_1, _a;
        try {
            for (var _b = __values(this.edges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edge = _c.value;
                if (edge.node1 == node || edge.node2 == node) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    Node.prototype.toString = function () {
        return this.name + " (x:" + this.x + ", y:" + this.y + ", neighbors: " + this.edges.length + ")";
    };
    return Node;
}());

var Edge = /** @class */ (function () {
    function Edge(node1, node2) {
        if (!node1 || !node2) {
            throw ("Invalid Edge constructor arguments");
        }
        this.node1 = node1;
        this.node2 = node2;
    }
    Object.defineProperty(Edge.prototype, "distance", {
        get: function () {
            var dx2 = Math.pow(this.node1.x - this.node2.x, 2), dy2 = Math.pow(this.node1.y - this.node2.y, 2), distance = Math.sqrt(dx2 + dy2);
            return Math.round(distance * 100) / 100;
        },
        enumerable: true,
        configurable: true
    });
    Edge.prototype.toString = function () {
        return "Edge (" + this.node1.name + " - " + this.node2.name + ", dist: " + this.distance + ")";
    };
    return Edge;
}());

var Graph = /** @class */ (function () {
    function Graph(nodes, edges, name) {
        if (edges === void 0) { edges = []; }
        if (name === void 0) { name = "Graph"; }
        var _this = this;
        this.name = name;
        this.nodes = new Set(nodes);
        this.edges = [];
        edges.forEach(function (e) { return _this.addEdge(e); });
    }
    Graph.prototype.addEdge = function (edge) {
        if (!this.nodes.has(edge.node1) || !this.nodes.has(edge.node2)) {
            throw ("Ignoring unrecognized node: " + edge.toString());
        }
        if (!edge.node1 || !edge.node2 || edge.node1 == edge.node2) {
            console.warn("Ignoring invalid edge: " + edge.toString() + ".");
            return;
        }
        if (edge.node1.hasNeighbor(edge.node2)) {
            console.warn("Ignoring already-existing edge: " + edge);
            return;
        }
        this.edges.push(edge);
        edge.node1.addEdge(edge);
        edge.node2.addEdge(edge);
        console.log("Added: " + edge.toString());
    };
    Graph.prototype.toString = function () {
        var nodesStr = Array.from(this.nodes)
            .map(function (n) { return n.toString(); })
            .join("\n\t");
        var edgesStr = this.edges
            .map(function (e) { return e.toString(); })
            .join("\n\t");
        return "Graph:\n\t" + nodesStr + "\n\t" + edgesStr;
    };
    return Graph;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>{{ title }}</h1>\n\n  <nav>\n    <a routerLink=\"/algorithms\">Algorithms</a>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vis';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/algorithms.component */ "./src/app/algorithms/algorithms.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: "algorithms",
        component: _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_3__["AlgorithmsComponent"]
    }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_3__["AlgorithmsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {})
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wy6cat/Projects/Web/vis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map