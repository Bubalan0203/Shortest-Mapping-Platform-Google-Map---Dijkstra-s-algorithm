class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }

  addNode(value) {
    this.nodes.add(value);
    if (!(value in this.edges)) {
      this.edges[value] = [];
    }
  }

  addEdge(fromNode, toNode, distance) {
    this.edges[fromNode].push([toNode, distance]);
    this.edges[toNode].push([fromNode, distance]);
  }

  dijkstra(start, end) {
    const distances = {};
    for (const node of this.nodes) {
      distances[node] = Infinity;
    }
    distances[start] = 0;
  
    const previousNodes = {};
  
    const priorityQueue = [[0, start]];
  
    while (priorityQueue.length > 0) {
      const [currentDistance, currentNode] = priorityQueue.shift();
  
      if (currentDistance > distances[currentNode]) {
        continue;
      }
  
      // Check if this.edges[currentNode] exists and is an array
      if (Array.isArray(this.edges[currentNode])) {
        for (const [neighbor, weight] of this.edges[currentNode]) {
          const distance = currentDistance + weight;
  
          if (distance < distances[neighbor]) {
            distances[neighbor] = distance;
            previousNodes[neighbor] = currentNode;
            priorityQueue.push([distance, neighbor]);
            priorityQueue.sort((a, b) => a[0] - b[0]);
          }
        }
      }
    }
  
    const path = [];
    let current = end;
    while (current !== start) {
      path.unshift(current);
      current = previousNodes[current];
    }
    path.unshift(start);
  
    return [path, distances[end]];
  }
}
  

// Define the graph and add edges using JSON data
const graph = new Graph();

// Example JSON data
const jsonData = [
  { "source": "ENTERENCE-1", "destination": "ENTERENCE-2", "distance": 500 },
  { "source": "ENTERENCE-1", "destination": "BIKE PARKING", "distance": 100 },
  { "source": "ENTERENCE-1", "destination": "CAR PARKING", "distance": 200 },
  { "source": "ENTERENCE-1", "destination": "AUDITORIUM", "distance": 500 },
  { "source": "ENTERENCE-1", "destination": "LAB BLOCK", "distance": 350 },
  { "source": "ENTERENCE-1", "destination": "MAIN BLOCK", "distance": 450 },
  { "source": "ENTERENCE-1", "destination": "IT BLOCK", "distance": 650 },
  { "source": "ENTERENCE-1", "destination": "LIBRARY BLOCK", "distance": 650 },
  { "source": "ENTERENCE-1", "destination": "MSC BLOCK", "distance": 750 },
  { "source": "ENTERENCE-1", "destination": "TEMPLE", "distance": 900 },
  { "source": "ENTERENCE-1", "destination": "MAIN GROUND", "distance": 1050 },
  { "source": "ENTERENCE-1", "destination": "CANTEEN", "distance": 1300 },
  { "source": "ENTERENCE-1", "destination": "FOOD STREET", "distance": 1400 },
  { "source": "ENTERENCE-1", "destination": "STUDENT STORE", "distance": 1650 },
  { "source": "ENTERENCE-1", "destination": "HOSTEL OFFICE", "distance": 1700 },
  { "source": "ENTERENCE-1", "destination": "GIRLS HOSTEL", "distance": 1850 },
  { "source": "ENTERENCE-1", "destination": "BOYS HOSTEL", "distance": 2050 },
  { "source": "ENTERENCE-2", "destination": "ENTERENCE-1", "distance": 500 },
  { "source": "ENTERENCE-2", "destination": "BIKE PARKING", "distance": 600 },
  { "source": "ENTERENCE-2", "destination": "CAR PARKING", "distance": 700 },
  { "source": "ENTERENCE-2", "destination": "AUDITORIUM", "distance": 1000 },
  { "source": "ENTERENCE-2", "destination": "LAB BLOCK", "distance": 850 },
  { "source": "ENTERENCE-2", "destination": "MAIN BLOCK", "distance": 950 },
  { "source": "ENTERENCE-2", "destination": "IT BLOCK", "distance": 1150 },
  { "source": "ENTERENCE-2", "destination": "LIBRARY BLOCK", "distance": 1150 },
  { "source": "ENTERENCE-2", "destination": "MSC BLOCK", "distance": 1250 },
  { "source": "ENTERENCE-2", "destination": "TEMPLE", "distance": 1400 },
  { "source": "ENTERENCE-2", "destination": "MAIN GROUND", "distance": 1550 },
  { "source": "ENTERENCE-2", "destination": "CANTEEN", "distance": 1800 },
  { "source": "ENTERENCE-2", "destination": "FOOD STREET", "distance": 1900 },
  { "source": "ENTERENCE-2", "destination": "STUDENT STORE", "distance": 2150 },
  { "source": "ENTERENCE-2", "destination": "HOSTEL OFFICE", "distance": 2250 },
  { "source": "ENTERENCE-2", "destination": "GIRLS HOSTEL", "distance": 2350 },
  { "source": "ENTERENCE-2", "destination": "BOYS HOSTEL", "distance": 2550 },
  { "source": "BIKE PARKING", "destination": "ENTERENCE-1", "distance": 100 },
  { "source": "BIKE PARKING", "destination": "ENTERENCE-2", "distance": 600 },
  { "source": "BIKE PARKING", "destination": "CAR PARKING", "distance": 300 },
  { "source": "BIKE PARKING", "destination": "AUDITORIUM", "distance": 700 },
  { "source": "BIKE PARKING", "destination": "LAB BLOCK", "distance": 450 },
  { "source": "BIKE PARKING", "destination": "MAIN BLOCK", "distance": 550 },
  { "source": "BIKE PARKING", "destination": "IT BLOCK", "distance": 750 },
  { "source": "BIKE PARKING", "destination": "LIBRARY BLOCK", "distance": 750 },
  { "source": "BIKE PARKING", "destination": "MSC BLOCK", "distance": 850 },
  { "source": "BIKE PARKING", "destination": "TEMPLE", "distance": 1000 },
  { "source": "BIKE PARKING", "destination": "MAIN GROUND", "distance": 1150 },
  { "source": "BIKE PARKING", "destination": "CANTEEN", "distance": 1400 },
  { "source": "BIKE PARKING", "destination": "FOOD STREET", "distance": 1500 },
  { "source": "BIKE PARKING", "destination": "STUDENT STORE", "distance": 1750 },
  { "source": "BIKE PARKING", "destination": "HOSTEL OFFICE", "distance": 1850 },
  { "source": "BIKE PARKING", "destination": "GIRLS HOSTEL", "distance": 1950 },
  { "source": "BIKE PARKING", "destination": "BOYS HOSTEL", "distance": 2150 },
  { "source": "CAR PARKING", "destination": "ENTERENCE-1", "distance": 200 },
  { "source": "CAR PARKING", "destination": "ENTERENCE-2", "distance": 700 },
  { "source": "CAR PARKING", "destination": "BIKE PARKING", "distance": 300 },
  { "source": "CAR PARKING", "destination": "AUDITORIUM", "distance": 300 },
  { "source": "CAR PARKING", "destination": "LAB BLOCK", "distance": 550 },
  { "source": "CAR PARKING", "destination": "MAIN BLOCK", "distance": 350 },
  { "source": "CAR PARKING", "destination": "IT BLOCK", "distance": 450 },
  { "source": "CAR PARKING", "destination": "LIBRARY BLOCK", "distance": 450 },
  { "source": "CAR PARKING", "destination": "MSC BLOCK", "distance": 550 },
  { "source": "CAR PARKING", "destination": "TEMPLE", "distance": 700 },
  { "source": "CAR PARKING", "destination": "MAIN GROUND", "distance": 850 },
  { "source": "CAR PARKING", "destination": "CANTEEN", "distance": 1100 },
  { "source": "CAR PARKING", "destination": "FOOD STREET", "distance": 1200 },
  { "source": "CAR PARKING", "destination": "STUDENT STORE", "distance": 1450 },
  { "source": "CAR PARKING", "destination": "HOSTEL OFFICE", "distance": 1550 },
  { "source": "CAR PARKING", "destination": "GIRLS HOSTEL", "distance": 1650 },
  { "source": "CAR PARKING", "destination": "BOYS HOSTEL", "distance": 1850 },
  { "source": "AUDITORIUM", "destination": "ENTERENCE-1", "distance": 500 },
  { "source": "AUDITORIUM", "destination": "ENTERENCE-2", "distance": 1000 },
  { "source": "AUDITORIUM", "destination": "BIKE PARKING", "distance": 700 },
  { "source": "AUDITORIUM", "destination": "CAR PARKING", "distance": 300 },
  { "source": "AUDITORIUM", "destination": "LAB BLOCK", "distance": 250 },
  { "source": "AUDITORIUM", "destination": "MAIN BLOCK", "distance": 50 },
  { "source": "AUDITORIUM", "destination": "IT BLOCK", "distance": 150 },
  { "source": "AUDITORIUM", "destination": "LIBRARY BLOCK", "distance": 150 },
  { "source": "AUDITORIUM", "destination": "MSC BLOCK", "distance": 250 },
  { "source": "AUDITORIUM", "destination": "TEMPLE", "distance": 400 },
  { "source": "AUDITORIUM", "destination": "MAIN GROUND", "distance": 550 },
  { "source": "AUDITORIUM", "destination": "CANTEEN", "distance": 900 },
  { "source": "AUDITORIUM", "destination": "FOOD STREET", "distance": 1000 },
  { "source": "AUDITORIUM", "destination": "STUDENT STORE", "distance": 1250 },
  { "source": "AUDITORIUM", "destination": "HOSTEL OFFICE", "distance": 1350 },
  { "source": "AUDITORIUM", "destination": "GIRLS HOSTEL", "distance": 1450 },
  { "source": "AUDITORIUM", "destination": "BOYS HOSTEL", "distance": 1650 },
  { "source": "LAB BLOCK", "destination": "ENTERENCE-1", "distance": 350 },
  { "source": "LAB BLOCK", "destination": "ENTERENCE-2", "distance": 850 },
  { "source": "LAB BLOCK", "destination": "BIKE PARKING", "distance": 450 },
  { "source": "LAB BLOCK", "destination": "CAR PARKING", "distance": 550 },
  { "source": "LAB BLOCK", "destination": "AUDITORIUM", "distance": 250 },
  { "source": "LAB BLOCK", "destination": "MAIN BLOCK", "distance": 200 },
  { "source": "LAB BLOCK", "destination": "IT BLOCK", "distance": 400 },
  { "source": "LAB BLOCK", "destination": "LIBRARY BLOCK", "distance": 400 },
  { "source": "LAB BLOCK", "destination": "MSC BLOCK", "distance": 500 },
  { "source": "LAB BLOCK", "destination": "TEMPLE", "distance": 650 },
  { "source": "LAB BLOCK", "destination": "MAIN GROUND", "distance": 800 },
  { "source": "LAB BLOCK", "destination": "CANTEEN", "distance": 1150 },
  { "source": "LAB BLOCK", "destination": "FOOD STREET", "distance": 1250 },
  { "source": "LAB BLOCK", "destination": "STUDENT STORE", "distance": 1500 },
  { "source": "LAB BLOCK", "destination": "HOSTEL OFFICE", "distance": 1600 },
  { "source": "LAB BLOCK", "destination": "GIRLS HOSTEL", "distance": 1700 },
  { "source": "LAB BLOCK", "destination": "BOYS HOSTEL", "distance": 1900 },
  { "source": "MAIN BLOCK", "destination": "ENTERENCE-1", "distance": 450 },
  { "source": "MAIN BLOCK", "destination": "ENTERENCE-2", "distance": 950 },
  { "source": "MAIN BLOCK", "destination": "BIKE PARKING", "distance": 550 },
  { "source": "MAIN BLOCK", "destination": "CAR PARKING", "distance": 350 },
  { "source": "MAIN BLOCK", "destination": "AUDITORIUM", "distance": 50 },
  { "source": "MAIN BLOCK", "destination": "LAB BLOCK", "distance": 200 },
  { "source": "MAIN BLOCK", "destination": "IT BLOCK", "distance": 200 },
  { "source": "MAIN BLOCK", "destination": "LIBRARY BLOCK", "distance": 200 },
  { "source": "MAIN BLOCK", "destination": "MSC BLOCK", "distance": 300 },
  { "source": "MAIN BLOCK", "destination": "TEMPLE", "distance": 450 },
  { "source": "MAIN BLOCK", "destination": "MAIN GROUND", "distance": 600 },
  { "source": "MAIN BLOCK", "destination": "CANTEEN", "distance": 950 },
  { "source": "MAIN BLOCK", "destination": "FOOD STREET", "distance": 1050 },
  { "source": "MAIN BLOCK", "destination": "STUDENT STORE", "distance": 1300 },
  { "source": "MAIN BLOCK", "destination": "HOSTEL OFFICE", "distance": 1400 },
  { "source": "MAIN BLOCK", "destination": "GIRLS HOSTEL", "distance": 1500 },
  { "source": "MAIN BLOCK", "destination": "BOYS HOSTEL", "distance": 1700 },
  { "source": "IT BLOCK", "destination": "ENTERENCE-1", "distance": 650 },
  { "source": "IT BLOCK", "destination": "ENTERENCE-2", "distance": 1150 },
  { "source": "IT BLOCK", "destination": "BIKE PARKING", "distance": 750 },
  { "source": "IT BLOCK", "destination": "CAR PARKING", "distance": 450 },
  { "source": "IT BLOCK", "destination": "AUDITORIUM", "distance": 150 },
  { "source": "IT BLOCK", "destination": "LAB BLOCK", "distance": 400 },
  { "source": "IT BLOCK", "destination": "MAIN BLOCK", "distance": 200 },
  { "source": "IT BLOCK", "destination": "LIBRARY BLOCK", "distance": 0 },
  { "source": "IT BLOCK", "destination": "MSC BLOCK", "distance": 100 },
  { "source": "IT BLOCK", "destination": "TEMPLE", "distance": 250 },
  { "source": "IT BLOCK", "destination": "MAIN GROUND", "distance": 400 },
  { "source": "IT BLOCK", "destination": "CANTEEN", "distance": 750 },
  { "source": "IT BLOCK", "destination": "FOOD STREET", "distance": 850 },
  { "source": "IT BLOCK", "destination": "STUDENT STORE", "distance": 1100 },
  { "source": "IT BLOCK", "destination": "HOSTEL OFFICE", "distance": 1200 },
  { "source": "IT BLOCK", "destination": "GIRLS HOSTEL", "distance": 1300 },
  { "source": "IT BLOCK", "destination": "BOYS HOSTEL", "distance": 1500 },
  { "source": "LIBRARY BLOCK", "destination": "ENTERENCE-1", "distance": 650 },
  { "source": "LIBRARY BLOCK", "destination": "ENTERENCE-2", "distance": 1150 },
  { "source": "LIBRARY BLOCK", "destination": "BIKE PARKING", "distance": 750 },
  { "source": "LIBRARY BLOCK", "destination": "CAR PARKING", "distance": 450 },
  { "source": "LIBRARY BLOCK", "destination": "AUDITORIUM", "distance": 150 },
  { "source": "LIBRARY BLOCK", "destination": "LAB BLOCK", "distance": 400 },
  { "source": "LIBRARY BLOCK", "destination": "MAIN BLOCK", "distance": 200 },
  { "source": "LIBRARY BLOCK", "destination": "IT BLOCK", "distance": 0 },
  { "source": "LIBRARY BLOCK", "destination": "MSC BLOCK", "distance": 100 },
  { "source": "LIBRARY BLOCK", "destination": "TEMPLE", "distance": 250 },
  { "source": "LIBRARY BLOCK", "destination": "MAIN GROUND", "distance": 400 },
  { "source": "LIBRARY BLOCK", "destination": "CANTEEN", "distance": 750 },
  { "source": "LIBRARY BLOCK", "destination": "FOOD STREET", "distance": 850 },
  { "source": "LIBRARY BLOCK", "destination": "STUDENT STORE", "distance": 1100 },
  { "source": "LIBRARY BLOCK", "destination": "HOSTEL OFFICE", "distance": 1200 },
  { "source": "LIBRARY BLOCK", "destination": "GIRLS HOSTEL", "distance": 1300 },
  { "source": "LIBRARY BLOCK", "destination": "BOYS HOSTEL", "distance": 1500 },
  { "source": "MSC BLOCK", "destination": "ENTERENCE-1", "distance": 750 },
  { "source": "MSC BLOCK", "destination": "ENTERENCE-2", "distance": 1250 },
  { "source": "MSC BLOCK", "destination": "BIKE PARKING", "distance": 850 },
  { "source": "MSC BLOCK", "destination": "CAR PARKING", "distance": 550 },
  { "source": "MSC BLOCK", "destination": "AUDITORIUM", "distance": 250 },
  { "source": "MSC BLOCK", "destination": "LAB BLOCK", "distance": 500 },
  { "source": "MSC BLOCK", "destination": "MAIN BLOCK", "distance": 300 },
  { "source": "MSC BLOCK", "destination": "IT BLOCK", "distance": 100 },
  { "source": "MSC BLOCK", "destination": "LIBRARY BLOCK", "distance": 100 },
  { "source": "MSC BLOCK", "destination": "TEMPLE", "distance": 150 },
  { "source": "MSC BLOCK", "destination": "MAIN GROUND", "distance": 300 },
  { "source": "MSC BLOCK", "destination": "CANTEEN", "distance": 650 },
  { "source": "MSC BLOCK", "destination": "FOOD STREET", "distance": 750 },
  { "source": "MSC BLOCK", "destination": "STUDENT STORE", "distance": 1000 },
  { "source": "MSC BLOCK", "destination": "HOSTEL OFFICE", "distance": 1100 },
  { "source": "MSC BLOCK", "destination": "GIRLS HOSTEL", "distance": 1200 },
  { "source": "MSC BLOCK", "destination": "BOYS HOSTEL", "distance": 1400 },
  { "source": "TEMPLE", "destination": "ENTERENCE-1", "distance": 900 },
  { "source": "TEMPLE", "destination": "ENTERENCE-2", "distance": 1400 },
  { "source": "TEMPLE", "destination": "BIKE PARKING", "distance": 1000 },
  { "source": "TEMPLE", "destination": "CAR PARKING", "distance": 700 },
  { "source": "TEMPLE", "destination": "AUDITORIUM", "distance": 400 },
  { "source": "TEMPLE", "destination": "LAB BLOCK", "distance": 650 },
  { "source": "TEMPLE", "destination": "MAIN BLOCK", "distance": 450 },
  { "source": "TEMPLE", "destination": "IT BLOCK", "distance": 250 },
  { "source": "TEMPLE", "destination": "LIBRARY BLOCK", "distance": 250 },
  { "source": "TEMPLE", "destination": "MSC BLOCK", "distance": 150 },
  { "source": "TEMPLE", "destination": "MAIN GROUND", "distance": 300 },
  { "source": "TEMPLE", "destination": "CANTEEN", "distance": 650 },
  { "source": "TEMPLE", "destination": "FOOD STREET", "distance": 750 },
  { "source": "TEMPLE", "destination": "STUDENT STORE", "distance": 1000 },
  { "source": "TEMPLE", "destination": "HOSTEL OFFICE", "distance": 1100 },
  { "source": "TEMPLE", "destination": "GIRLS HOSTEL", "distance": 1200 },
  { "source": "TEMPLE", "destination": "BOYS HOSTEL", "distance": 1400 },
  { "source": "MAIN GROUND", "destination": "ENTERENCE-1", "distance": 1050 },
  { "source": "MAIN GROUND", "destination": "ENTERENCE-2", "distance": 1550 },
  { "source": "MAIN GROUND", "destination": "BIKE PARKING", "distance": 1150 },
  { "source": "MAIN GROUND", "destination": "CAR PARKING", "distance": 850 },
  { "source": "MAIN GROUND", "destination": "AUDITORIUM", "distance": 550 },
  { "source": "MAIN GROUND", "destination": "LAB BLOCK", "distance": 800 },
  { "source": "MAIN GROUND", "destination": "MAIN BLOCK", "distance": 600 },
  { "source": "MAIN GROUND", "destination": "IT BLOCK", "distance": 400 },
  { "source": "MAIN GROUND", "destination": "LIBRARY BLOCK", "distance": 400 },
  { "source": "MAIN GROUND", "destination": "MSC BLOCK", "distance": 300 },
  { "source": "MAIN GROUND", "destination": "TEMPLE", "distance": 300 },
  { "source": "MAIN GROUND", "destination": "CANTEEN", "distance": 350 },
  { "source": "MAIN GROUND", "destination": "FOOD STREET", "distance": 450 },
  { "source": "MAIN GROUND", "destination": "STUDENT STORE", "distance": 700 },
  { "source": "MAIN GROUND", "destination": "HOSTEL OFFICE", "distance": 800 },
  { "source": "MAIN GROUND", "destination": "GIRLS HOSTEL", "distance": 900 },
  { "source": "MAIN GROUND", "destination": "BOYS HOSTEL", "distance": 1100 },
  { "source": "CANTEEN", "destination": "ENTERENCE-1", "distance": 1300 },
  { "source": "CANTEEN", "destination": "ENTERENCE-2", "distance": 1800 },
  { "source": "CANTEEN", "destination": "BIKE PARKING", "distance": 1400 },
  { "source": "CANTEEN", "destination": "CAR PARKING", "distance": 1100 },
  { "source": "CANTEEN", "destination": "AUDITORIUM", "distance": 900 },
  { "source": "CANTEEN", "destination": "LAB BLOCK", "distance": 1150 },
  { "source": "CANTEEN", "destination": "MAIN BLOCK", "distance": 950 },
  { "source": "CANTEEN", "destination": "IT BLOCK", "distance": 750 },
  { "source": "CANTEEN", "destination": "LIBRARY BLOCK", "distance": 750 },
  { "source": "CANTEEN", "destination": "MSC BLOCK", "distance": 650 },
  { "source": "CANTEEN", "destination": "TEMPLE", "distance": 650 },
  { "source": "CANTEEN", "destination": "MAIN GROUND", "distance": 350 },
  { "source": "CANTEEN", "destination": "FOOD STREET", "distance": 100 },
  { "source": "CANTEEN", "destination": "STUDENT STORE", "distance": 350 },
  { "source": "CANTEEN", "destination": "HOSTEL OFFICE", "distance": 450 },
  { "source": "CANTEEN", "destination": "GIRLS HOSTEL", "distance": 550 },
  { "source": "CANTEEN", "destination": "BOYS HOSTEL", "distance": 750 },
  { "source": "FOOD STREET", "destination": "ENTERENCE-1", "distance": 1400 },
  { "source": "FOOD STREET", "destination": "ENTERENCE-2", "distance": 1900 },
  { "source": "FOOD STREET", "destination": "BIKE PARKING", "distance": 1500 },
  { "source": "FOOD STREET", "destination": "CAR PARKING", "distance": 1200 },
  { "source": "FOOD STREET", "destination": "AUDITORIUM", "distance": 1000 },
  { "source": "FOOD STREET", "destination": "LAB BLOCK", "distance": 1250 },
  { "source": "FOOD STREET", "destination": "MAIN BLOCK", "distance": 1050 },
  { "source": "FOOD STREET", "destination": "IT BLOCK", "distance": 850 },
  { "source": "FOOD STREET", "destination": "LIBRARY BLOCK", "distance": 850 },
  { "source": "FOOD STREET", "destination": "MSC BLOCK", "distance": 750 },
  { "source": "FOOD STREET", "destination": "TEMPLE", "distance": 750 },
  { "source": "FOOD STREET", "destination": "MAIN GROUND", "distance": 450 },
  { "source": "FOOD STREET", "destination": "CANTEEN", "distance": 100 },
  { "source": "FOOD STREET", "destination": "STUDENT STORE", "distance": 250 },
  { "source": "FOOD STREET", "destination": "HOSTEL OFFICE", "distance": 350 },
  { "source": "FOOD STREET", "destination": "GIRLS HOSTEL", "distance": 450 },
  { "source": "FOOD STREET", "destination": "BOYS HOSTEL", "distance": 650 },
  { "source": "STUDENT STORE", "destination": "ENTERENCE-1", "distance": 1650 },
  { "source": "STUDENT STORE", "destination": "ENTERENCE-2", "distance": 2150 },
  { "source": "STUDENT STORE", "destination": "BIKE PARKING", "distance": 1750 },
  { "source": "STUDENT STORE", "destination": "CAR PARKING", "distance": 1450 },
  { "source": "STUDENT STORE", "destination": "AUDITORIUM", "distance": 1250 },
  { "source": "STUDENT STORE", "destination": "LAB BLOCK", "distance": 1500 },
  { "source": "STUDENT STORE", "destination": "MAIN BLOCK", "distance": 1300 },
  { "source": "STUDENT STORE", "destination": "IT BLOCK", "distance": 1100 },
  { "source": "STUDENT STORE", "destination": "LIBRARY BLOCK", "distance": 1100 },
  { "source": "STUDENT STORE", "destination": "MSC BLOCK", "distance": 1000 },
  { "source": "STUDENT STORE", "destination": "TEMPLE", "distance": 1000 },
  { "source": "STUDENT STORE", "destination": "MAIN GROUND", "distance": 700 },
  { "source": "STUDENT STORE", "destination": "CANTEEN", "distance": 350 },
  { "source": "STUDENT STORE", "destination": "FOOD STREET", "distance": 250 },
  { "source": "STUDENT STORE", "destination": "HOSTEL OFFICE", "distance": 100 },
  { "source": "STUDENT STORE", "destination": "GIRLS HOSTEL", "distance": 200 },
  { "source": "STUDENT STORE", "destination": "BOYS HOSTEL", "distance": 400 },
  { "source": "GIRLS HOSTEL", "destination": "ENTERENCE-1", "distance": 1850 },
  { "source": "GIRLS HOSTEL", "destination": "ENTERENCE-2", "distance": 2350 },
  { "source": "GIRLS HOSTEL", "destination": "BIKE PARKING", "distance": 1950 },
  { "source": "GIRLS HOSTEL", "destination": "CAR PARKING", "distance": 1650 },
  { "source": "GIRLS HOSTEL", "destination": "AUDITORIUM", "distance": 1450 },
  { "source": "GIRLS HOSTEL", "destination": "LAB BLOCK", "distance": 1700 },
  { "source": "GIRLS HOSTEL", "destination": "MAIN BLOCK", "distance": 1500 },
  { "source": "GIRLS HOSTEL", "destination": "IT BLOCK", "distance": 1300 },
  { "source": "GIRLS HOSTEL", "destination": "LIBRARY BLOCK", "distance": 1300 },
  { "source": "GIRLS HOSTEL", "destination": "MSC BLOCK", "distance": 1200 },
  { "source": "GIRLS HOSTEL", "destination": "TEMPLE", "distance": 1200 },
  { "source": "GIRLS HOSTEL", "destination": "MAIN GROUND", "distance": 900 },
  { "source": "GIRLS HOSTEL", "destination": "CANTEEN", "distance": 550 },
  { "source": "GIRLS HOSTEL", "destination": "FOOD STREET", "distance": 450 },
  { "source": "GIRLS HOSTEL", "destination": "STUDENT STORE", "distance": 200 },
  { "source": "GIRLS HOSTEL", "destination": "HOSTEL OFFICE", "distance": 100 },
  { "source": "GIRLS HOSTEL", "destination": "BOYS HOSTEL", "distance": 200 },
  { "source": "BOYS HOSTEL", "destination": "ENTERENCE-1", "distance": 2050 },
  { "source": "BOYS HOSTEL", "destination": "ENTERENCE-2", "distance": 2550 },
  { "source": "BOYS HOSTEL", "destination": "BIKE PARKING", "distance": 2150 },
  { "source": "BOYS HOSTEL", "destination": "CAR PARKING", "distance": 1850 },
  { "source": "BOYS HOSTEL", "destination": "AUDITORIUM", "distance": 1650 },
  { "source": "BOYS HOSTEL", "destination": "LAB BLOCK", "distance": 1900 },
  { "source": "BOYS HOSTEL", "destination": "MAIN BLOCK", "distance": 1700 },
  { "source": "BOYS HOSTEL", "destination": "IT BLOCK", "distance": 1500 },
  { "source": "BOYS HOSTEL", "destination": "LIBRARY BLOCK", "distance": 1500 },
  { "source": "BOYS HOSTEL", "destination": "MSC BLOCK", "distance": 1400 },
  { "source": "BOYS HOSTEL", "destination": "TEMPLE", "distance": 1400 },
  { "source": "BOYS HOSTEL", "destination": "MAIN GROUND", "distance": 1100 },
  { "source": "BOYS HOSTEL", "destination": "CANTEEN", "distance": 750 },
  { "source": "BOYS HOSTEL", "destination": "FOOD STREET", "distance": 650 },
  { "source": "BOYS HOSTEL", "destination": "STUDENT STORE", "distance": 400 },
  { "source": "BOYS HOSTEL", "destination": "GIRLS HOSTEL", "distance": 200 },
  { "source": "BOYS HOSTEL", "destination": "HOSTEL OFFICE", "distance": 100 },
  { "source": "HOSTEL OFFICE", "destination": "ENTERENCE-1", "distance": 2050 },
  { "source": "HOSTEL OFFICE", "destination": "ENTERENCE-2", "distance": 2550 },
  { "source": "HOSTEL OFFICE", "destination": "BIKE PARKING", "distance": 2150 },
  { "source": "HOSTEL OFFICE", "destination": "CAR PARKING", "distance": 1850 },
  { "source": "HOSTEL OFFICE", "destination": "AUDITORIUM", "distance": 1650 },
  { "source": "HOSTEL OFFICE", "destination": "LAB BLOCK", "distance": 1900 },
  { "source": "HOSTEL OFFICE", "destination": "MAIN BLOCK", "distance": 1700 },
  { "source": "HOSTEL OFFICE", "destination": "IT BLOCK", "distance": 1500 },
  { "source": "HOSTEL OFFICE", "destination": "LIBRARY BLOCK", "distance": 1500 },
  { "source": "HOSTEL OFFICE", "destination": "MSC BLOCK", "distance": 1400 },
  { "source": "HOSTEL OFFICE", "destination": "TEMPLE", "distance": 1400 },
  { "source": "HOSTEL OFFICE", "destination": "MAIN GROUND", "distance": 1100 },
  { "source": "HOSTEL OFFICE", "destination": "CANTEEN", "distance": 750 },
  { "source": "HOSTEL OFFICE", "destination": "FOOD STREET", "distance": 650 },
  { "source": "HOSTEL OFFICE", "destination": "STUDENT STORE", "distance": 400 },
  { "source": "HOSTEL OFFICE", "destination": "GIRLS HOSTEL", "distance": 200 },
  { "source": "HOSTEL OFFICE", "destination": "BOYS HOSTEL", "distance": 100 }
];

for (const item of jsonData) {
  graph.addNode(item.source);
  graph.addNode(item.destination);
  graph.addEdge(item.source, item.destination, item.distance);
}

var source=-1;
var destination=-1;

const setPoint = (val) =>{
  if(source!==-1)
    destination = val;
  else
    source = val;
}

function main() {
  const [shortestPath, shortestDistance] = graph.dijkstra(source, destination);
  const shortestPathText = `Shortest path from ${source} to ${destination}: ${shortestPath.join(' ➤ ')}`;
  const totalDistanceText = `Total distance: ${shortestDistance} Meters`;

  // Update the footer elements with the calculated values
  document.getElementById('shortest-path-footer').innerHTML = shortestPathText;
  document.getElementById('total-distance-footer').innerHTML = totalDistanceText;

  // Optionally, you can also hide the "FIND SHORTEST PATH" button after calculation if needed
  document.getElementById('find-path-button').style.display = 'none';
}




