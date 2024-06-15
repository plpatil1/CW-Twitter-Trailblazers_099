const container_lll = d3.select("#visualization");
const svg = container_lll.append("svg")
    .attr("height", "100%")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("background-color", "yellow").attr("width", "100%");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    // insert a node
    insert(value, index = null) {
        const newNode = new Node(value);
        if (index === null || index < 0) {

            if (!this.head) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = newNode;
            }
        } else {

            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                let current = this.head;
                let prev = null;
                let currentIndex = 0;
                while (current !== null && currentIndex < index) {
                    prev = current;
                    current = current.next;
                    currentIndex++;
                }
                if (prev !== null) {
                    prev.next = newNode;
                    newNode.next = current;
                }
            }
        }
        this.visualize();
    }


    delete() {
        if (!this.head) {
            console.log("List is empty. Nothing to delete.");
            return;
        }
        this.head = this.head.next;
        this.visualize();
    }

    // delte at index
    deleteAtIndex(index) {
        if (!this.head) {
            console.log("List is empty. Nothing to delete.");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let prev = null;
            let currentIndex = 0;
            while (current !== null && currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            if (current !== null && prev !== null) {
                prev.next = current.next;
            }
        }
        this.visualize();
    }


    visualize() {
        svg.selectAll("*:not(defs)").remove(); // Clear all existing elements except defs

        const nodeRadius = 30;
        const nodeMargin = 50;
        let container_lllWidth = container_lll.node().clientWidth;
        let xPos = 50;
        let yPos = 200;


        let current = this.head;
        let totalWidth = 50;
        while (current !== null) {
            totalWidth += nodeRadius * 2 + nodeMargin;
            current = current.next;
        }
        totalWidth += nodeRadius * 2 + nodeMargin; // Space for the null pointer


        svg.attr("width", Math.max(container_lllWidth, totalWidth));


        svg.append("text")
            .attr("x", 30)
            .attr("y", 160)
            .attr("dy", 5)
            .attr("text-anchor", "middle")
            .text("head");

        svg.append("line")
            .attr("x1", 30)
            .attr("y1", 165)
            .attr("x2", 50)
            .attr("y2", 200)
            .attr("stroke", "black")
            .attr("marker-end", "url(#arrow)");

        current = this.head;
        xPos = 50;

        while (current !== null) {
            const nodeGroup = svg.append("g")
                .attr("class", "node")
                .attr("transform", `translate(${xPos}, ${yPos})`);

            nodeGroup.append("circle")
                .attr("r", nodeRadius)
                .attr("stroke", "black")
                .attr("fill", "white")
                .attr("stroke-width", 2); 

            nodeGroup.append("text")
                .attr("dy", 5)
                .attr("text-anchor", "middle")
                .text(current.data);

            if (current.next !== null) {
                svg.append("line")
                    .attr("class", "link")
                    .attr("x1", xPos + nodeRadius)
                    .attr("y1", yPos)
                    .attr("x2", xPos + nodeRadius + nodeMargin)
                    .attr("y2", yPos)
                    .attr("stroke", "black")
                    .attr("marker-end", "url(#arrow)");
            }

            current = current.next;
            xPos += nodeRadius * 2 + nodeMargin;
        }


        const nullNode = svg.append("g")
            .attr("class", "node")
            .attr("transform", `translate(${xPos}, ${yPos})`);

        nullNode.append("text")
            .attr("dy", 5)
            .attr("text-anchor", "middle")
            .text("null");


        if (this.head) {
            svg.append("line")
                .attr("class", "link")
                .attr("x1", xPos - nodeRadius - nodeMargin)
                .attr("y1", yPos)
                .attr("x2", xPos - nodeRadius - nodeMargin + nodeRadius * 2)
                .attr("y2", yPos)
                .attr("stroke", "black")
                .attr("marker-end", "url(#arrow)");
        }
    }
}


const linkedList = new LinkedList();


function insert() {
    const value = document.getElementById("value").value;
    const index = parseInt(document.getElementById("index").value);
    if (value !== "") {
        linkedList.insert(value, isNaN(index) ? null : index);
        document.getElementById("value").value = "";
        document.getElementById("index").value = "";
    }
}


function deleteNode() {
    const index = parseInt(document.getElementById("index").value);
    if (isNaN(index)) {
        linkedList.delete();
    } else {
        linkedList.deleteAtIndex(index);
    }
    document.getElementById("index").value = "";
}


linkedList.visualize();
