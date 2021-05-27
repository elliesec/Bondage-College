class DirectedGraph {
	/**
	 * @param {number[]} vertices
	 * @param {TwoTuple[]} edges
	 */
	constructor(vertices, edges) {
		this.vertices = vertices;
		this.size = vertices.length;
		this.edges = edges;
		this.buildAdjacencyList();
	}

	/**
	 * Constructs and sets the adjacency list for this graph based on its edge definitions
	 * @returns {void} - Nothing
	 */
	buildAdjacencyList() {
		this.adjacencyList = {};
		for (const v of this.vertices) {
			this.adjacencyList[v] = [];
		}
		for (const [v1, v2] of this.edges) {
			if (!this.adjacencyList[v1].includes(v2)) {
				this.adjacencyList[v1].push(v2);
			}
		}
	}

	/**
	 * Calculates the strongly connected components of the graph using Tarjan's strongly connected components algorithm.
	 * See https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
	 * @returns {number[][]} - An array containing the strongly connected components of this graph, each represented as
	 * an array of vertex numbers
	 */
	getStronglyConnectedComponents() {
		let index = 0;
		const stack = [];
		const components = [];
		const vertexMap = {};
		for (const v of this.vertices) {
			vertexMap[v] = { vertex: v };
		}
		const allEdges = this.edges.map(([v1, v2]) => [vertexMap[v1], vertexMap[v2]]);

		const strongConnect = (v) => {
			v.index = index;
			v.lowLink = index;
			stack.push(v);
			v.onStack = true;
			index++;

			const successors = allEdges
				.filter(([v1, v2]) => v1 === v)
				.map(([v1, v2]) => v2);

			for (const w of successors) {
				if (w.index == null) {
					strongConnect(w);
					v.lowLink = Math.min(v.lowLink, w.lowLink);
				} else if (w.onStack) {
					v.lowLink = Math.min(v.lowLink, w.index);
				}
			}

			if (v.lowLink === v.index) {
				const scc = [];
				let w;
				do {
					w = stack.pop();
					w.onStack = false;
					scc.push(w.vertex);
				} while (w !== v);
				components.push(scc);
			}
		};

		for (const v of Object.values(vertexMap)) {
			if (v.index == null) {
				strongConnect(v);
			}
		}

		return components;
	}

	findCycles() {
		const stack = [];
		const blocked = [];
		const blockMap = [];
		for (let i = 0; i < this.size; i++) {
			blockMap.push([]);
		}

		const unblock = (v) => {
			blocked[v] = false;
			for (const w of blockMap[v]) {
				if (blocked[w]) unblock(w);
			}
		};

		const circuit = (v) => {
			let f = false;
			stack.push(v);
			blocked[v] = true;
		};
	}

	createVertexArray() {
		const vertices = [];
		for (let i = 0; i < this.size; i++) {
			vertices.push({ key: i });
		}
		return vertices;
	}
}

function GraphTest() {
	let graph = new DirectedGraph(
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		[
			[1, 2], [1, 3], [2, 4], [2, 5], [3, 2], [4, 5], [5, 3], [6, 3], [6, 1], [6, 7], [7, 8], [7, 9], [8, 10],
			[9, 10], [10, 6], [10, 11], [11, 11],
		],
	);
	console.log(JSON.stringify(graph.getStronglyConnectedComponents()));
}
