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

module.exports = "\n.button {\n    display: inline-block;\n    padding: 10px;\n    margin: 10px;\n    font-size: 1.2em;\n    cursor: pointer;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n}\n.button:hover {\n    color: dodgerblue;\n}\nsvg {\n    border: 1px solid lightgray;\n}\ncircle {\n    stroke: gray;\n    stroke-width: 2px;\n}"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.html":
/*!******************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span class=\"button\" (click)=\"reset()\">reset</span>\n</div>\n\n<svg id=\"svg\"\n    [attr.width]=\"width\"\n    [attr.height]=\"height\">\n\n</svg>\n"

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
/* harmony import */ var _dijkstra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dijkstra.service */ "./src/app/algorithms/dijkstra.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};




var AlgorithmsComponent = /** @class */ (function () {
    function AlgorithmsComponent(dijkstraService) {
        this.dijkstraService = dijkstraService;
        this.nodeCount = 40;
        this.width = 600;
        this.height = 400;
        this.circleRadius = 6;
        this.delay = 100;
        this.reset();
    }
    AlgorithmsComponent.prototype.reset = function () {
        var _this = this;
        this.resetSVG();
        var margin = this.circleRadius * 4;
        var nodes = new Array(this.nodeCount)
            .fill(0)
            .map(function (v, i) {
            return new _graph__WEBPACK_IMPORTED_MODULE_2__["Node"](_this.randomNumber(_this.width - margin) + margin / 2, _this.randomNumber(_this.height - margin) + margin / 2, "" + i);
        })
            .sort(function (a, b) { return a.x - b.x; });
        this.graph = new _graph__WEBPACK_IMPORTED_MODULE_2__["Graph"](nodes);
        this.addRandomEdges();
        this.drawGraph(this.graph);
        var _a = __read(this.getRandomStartEndNodes(), 2), source = _a[0], target = _a[1];
        source.special = target.special = true;
        var doneCallback = (function (path) {
            _this.visitPath(path, _this.graph);
        });
        this.runDijkstra(this.graph, source, target, doneCallback);
    };
    AlgorithmsComponent.prototype.executeAfterDelay = function (delay, iterator, callback) {
        setTimeout(function () {
            var result = iterator.next();
            callback(result);
            if (!result.done) {
                this.executeAfterDelay(delay, iterator, callback);
            }
        }.bind(this), delay);
    };
    AlgorithmsComponent.prototype.ngOnInit = function () {
    };
    AlgorithmsComponent.prototype.ngAfterContentInit = function () {
    };
    AlgorithmsComponent.prototype.randomNumber = function (max) {
        return Math.round(Math.random() * max);
    };
    AlgorithmsComponent.prototype.addRandomEdges = function () {
        var maxEdges = this.nodeCount * 10;
        var edgeCount = this.randomNumber(maxEdges);
        var max = this.graph.nodes.size - 1;
        for (var i = 0; i < edgeCount; i++) {
            var i1 = this.randomNumber(max), i2 = this.randomNumber(max);
            var nodes = Array.from(this.graph.nodes);
            var edge = new _graph__WEBPACK_IMPORTED_MODULE_2__["Edge"](nodes[i1], nodes[i2]);
            this.graph.addEdge(edge);
        }
    };
    AlgorithmsComponent.prototype.getRandomStartEndNodes = function () {
        var nodes = __spread(this.graph.nodes);
        var source = nodes[0];
        var target = nodes[nodes.length - 1];
        return [source, target];
    };
    AlgorithmsComponent.prototype.runDijkstra = function (graph, source, target, doneCallback) {
        var iterator = this.dijkstraService.shortestPath(graph, source, target);
        var callback = function (result) {
            if (result.done) {
                // TODO - promises!
                var path = result.value;
                console.log("Done: Path " + source + " -> " + target + ":\n\t" + path.join("\n\t"));
                doneCallback(path);
            }
        }.bind(this);
        this.executeAfterDelay(0, iterator, callback);
    };
    AlgorithmsComponent.prototype.visitPath = function (path, graph) {
        this.drawGraph(graph);
        var iterator = function () {
            var i, from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < path.length - 1)) return [3 /*break*/, 4];
                        from = path[i], to = path[i + 1];
                        graph.visit(from, to);
                        return [4 /*yield*/];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }();
        var callback = function (result) {
            this.drawGraph(graph);
        }.bind(this);
        this.executeAfterDelay(500, iterator, callback);
    };
    AlgorithmsComponent.prototype.resetSVG = function () {
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#svg").html("");
    };
    AlgorithmsComponent.prototype.drawGraph = function (graph) {
        this.drawEdges(graph);
        this.drawNodes(graph);
    };
    AlgorithmsComponent.prototype.drawNodes = function (graph) {
        var radius = this.circleRadius;
        var nodes = Array.from(graph.nodes);
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#svg");
        var circles = svg.selectAll("circle")
            .data(nodes);
        circles
            .attr("stroke-width", function (d) {
            return d.special ? 2 : 1;
        })
            .attr("fill", function (d) {
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
    };
    AlgorithmsComponent.prototype.drawEdges = function (graph) {
        var edges = graph.edges;
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#svg");
        var lines = svg.selectAll("line")
            .data(edges);
        lines
            .attr("stroke", function (d) {
            return d.visited ? 'darkgray' : 'lightgray';
        })
            .attr("stroke-width", function (d) {
            return d.visited ? 3 : 1;
        });
        lines.enter()
            .append("line")
            .attr("x1", function (edge) { return edge.node1.x; })
            .attr("x2", function (edge) { return edge.node2.x; })
            .attr("y1", function (edge) { return edge.node1.y; })
            .attr("y2", function (edge) { return edge.node2.y; });
        lines.exit().remove();
    };
    AlgorithmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algorithms',
            template: __webpack_require__(/*! ./algorithms.component.html */ "./src/app/algorithms/algorithms.component.html"),
            styles: [__webpack_require__(/*! ./algorithms.component.css */ "./src/app/algorithms/algorithms.component.css")]
        }),
        __metadata("design:paramtypes", [_dijkstra_service__WEBPACK_IMPORTED_MODULE_3__["DijkstraService"]])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/dijkstra.service.ts":
/*!************************************************!*\
  !*** ./src/app/algorithms/dijkstra.service.ts ***!
  \************************************************/
/*! exports provided: DijkstraService, QueueNode, PriorityQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DijkstraService", function() { return DijkstraService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueNode", function() { return QueueNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityQueue", function() { return PriorityQueue; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};

var DijkstraService = /** @class */ (function () {
    function DijkstraService() {
    }
    DijkstraService.prototype.shortestPath = function (graph, source, target) {
        var e_1, _a, q, dist, prev, nodes, u, _b, _c, v, edge, distance, result, node;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    q = new PriorityQueue();
                    dist = new Map();
                    prev = new Map();
                    nodes = graph.nodes;
                    nodes.forEach(function (node) {
                        dist.set(node, node == source ? 0 : Infinity);
                        prev.set(node, null);
                    });
                    q.addWithPriority(source, dist.get(source));
                    _d.label = 1;
                case 1:
                    if (!!q.isEmpty()) return [3 /*break*/, 3];
                    u = q.remove();
                    try {
                        for (_b = __values(u.neighbors()), _c = _b.next(); !_c.done; _c = _b.next()) {
                            v = _c.value;
                            edge = u.edges.get(v);
                            distance = dist.get(u) + edge.distance;
                            if (distance < dist.get(v)) {
                                dist.set(v, distance);
                                prev.set(v, u);
                                q.addWithPriority(v, distance);
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
                    // console.log(`${q}`);
                    return [4 /*yield*/];
                case 2:
                    // console.log(`${q}`);
                    _d.sent();
                    return [3 /*break*/, 1];
                case 3:
                    console.log("FINAL QUEUE: " + q);
                    result = [];
                    if (dist.get(target) < Infinity) {
                        node = target;
                        while (node != null) {
                            result.push(node);
                            node = prev.get(node);
                        }
                    }
                    return [2 /*return*/, result];
            }
        });
    };
    DijkstraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DijkstraService);
    return DijkstraService;
}());

var QueueNode = /** @class */ (function () {
    function QueueNode(node, priority) {
        this.node = node;
        this.priority = priority;
    }
    QueueNode.prototype.toString = function () {
        return this.node.name + " (" + this.priority + ")";
    };
    return QueueNode;
}());

var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.queue = [];
    }
    PriorityQueue.prototype.addWithPriority = function (node, priority) {
        this.removeIfPresent(node);
        var index = 0;
        var q = this.queue;
        while (index < q.length) {
            var qnode_1 = q[index];
            if (qnode_1.priority >= priority) {
                break;
            }
            index++;
        }
        var qnode = new QueueNode(node, priority);
        this.queue = __spread(q.slice(0, index), [qnode], q.slice(index, q.length));
        // console.log(`Added: ${ node }`);
    };
    PriorityQueue.prototype.removeIfPresent = function (node) {
        var q = this.queue;
        var index = q.map(function (qn) { return qn.node; }).indexOf(node);
        if (index != -1) {
            this.queue = __spread(q.slice(0, index), q.slice(index + 1, q.length));
            // console.log(`Removed: ${ node }`);
        }
    };
    PriorityQueue.prototype.remove = function () {
        var qn = this.queue.shift();
        return qn.node;
    };
    Object.defineProperty(PriorityQueue.prototype, "smallestDistance", {
        get: function () {
            return (this.queue.length ? this.queue[0].priority : Infinity);
        },
        enumerable: true,
        configurable: true
    });
    PriorityQueue.prototype.isEmpty = function () {
        return this.queue.length == 0;
    };
    PriorityQueue.prototype.toString = function () {
        var queueStr = this.queue.join("; ");
        return "Queue (size: " + this.queue.length + "):\n\t" + queueStr;
    };
    return PriorityQueue;
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var Node = /** @class */ (function () {
    function Node(x, y, name) {
        if (name === void 0) { name = "Node"; }
        this.x = x;
        this.y = y;
        this.name = name;
        this.edges = new Map();
        this.visited = false;
        this.special = false;
    }
    Node.prototype.addEdge = function (edge) {
        var neighbor = (edge.node1 == this ? edge.node2 : edge.node1);
        this.edges.set(neighbor, edge);
    };
    Node.prototype.neighbors = function () {
        return new Set(this.edges.keys());
    };
    Node.prototype.hasNeighbor = function (node) {
        return this.edges.has(node);
    };
    Node.prototype.toString = function () {
        var neighborsStr = __spread(this.neighbors().values()).map(function (n) { return n.name; }).join(", ");
        return this.name + " (v: " + this.visited + ", n: " + neighborsStr + ")";
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
        this.visited = false;
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
        return "Edge (" + this.node1.name + " <-> " + this.node2.name + ", v: " + this.visited + ", d: " + this.distance + ")";
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
            throw ("Ignoring unrecognized node: " + edge);
        }
        if (!edge.node1 || !edge.node2 || edge.node1 == edge.node2) {
            console.warn("Ignoring invalid edge: " + edge + ".");
            return;
        }
        if (edge.node1.hasNeighbor(edge.node2)) {
            console.warn("Ignoring already-existing edge: " + edge);
            return;
        }
        this.edges.push(edge);
        edge.node1.addEdge(edge);
        edge.node2.addEdge(edge);
    };
    Graph.prototype.visit = function (from, to) {
        console.log("Visiting " + from + " -> " + to);
        var edge = from.edges.get(to);
        if (!edge) {
            console.warn("Nodes are not neighbors: " + from + ", " + to);
            return false;
        }
        from.visited = to.visited = edge.visited = true;
        return true;
    };
    Graph.prototype.toString = function () {
        var nodesStr = Array.from(this.nodes).join("\n\t");
        // const edgesStr = this.edges.join("\n\t");
        return "Graph:\n\t" + nodesStr;
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'vis';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigateByUrl("/algorithms");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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