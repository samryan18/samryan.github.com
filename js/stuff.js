// code 
// Based on example d3 code from bl.ocks :)
console.log("Hello.")

// Globals
var numNodes = 200,
    w = 1280, 
    h = 800;

// Create 200 nodes
var nodes = 
  d3.range(numNodes).map(function() { 
    return {
      radius: Math.random() * 12 + 4 // Generate random size
    }; 
  }), 
  // Give them colors according to category20 scheme 
  color = d3.scale.category20(); // API Ref: https://github.com/d3/d3-scale/blob/master/README.md#schemeCategory20

var force = d3.layout.force()
    .gravity(0.05)
    .charge(function(d, i) { 
      return i ? 0 : -2000; // amount of force
    })
    .nodes(nodes) 
    .size([w, h]);

var root = nodes[0];
root.radius = 0;
root.fixed = true;


var svg = d3.select("#body").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

force.start();


svg.selectAll("circle")
    .data(nodes.slice(1))
  .enter().append("svg:circle")
    .attr("r", function(d) { return d.radius - 2; })
    .style("fill", function(d, i) { return color(i); });

force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i = 0,
      n = nodes.length;

  while (++i < n) {
    // For each node check each other node
    q.visit(collide(nodes[i]));
  }

  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

svg.on("mousemove", function() {
  // Set mouse to be root node so that we can 
  // move it around 
  var p1 = d3.svg.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide( node ) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;

  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      // Calc gravity
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) /* Prevent nodes from being on top of eachother */ {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2
        || x2 < nx1
        || y1 > ny2
        || y2 < ny1;
  };
}

