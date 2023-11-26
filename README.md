# Shortest-Mapping-Platform-Google-Map---Dijkstra-s-algorithm

The  Shortest-Mapping-Platform project aims to create a web-based platform for finding the shortest path within the CIT College campus using Google Maps. The implementation utilizes HTML and CSS for frontend design, JavaScript for Dijkstra's algorithm, and JSON files as a database for representing the campus map and relevant data.

**Tech Stack Used**
1. **Frontend (HTML/CSS):**
   - The user interface is developed using HTML and CSS to provide an interactive and visually appealing experience.
   - It includes a map interface powered by Google Maps, displaying the CIT College campus.

2. **Dijkstra's Algorithm (JavaScript):**
   - JavaScript is employed to implement Dijkstra's algorithm for finding the shortest path between two points on the campus map.
   - The algorithm considers the campus map as a graph with nodes and edges, calculating the optimal route based on the weighted edges.

3. **Database (JSON files):**
   - JSON files are used as a lightweight database to store information about the campus map, including node locations, paths, and any other relevant data.
   - This data is dynamically loaded into the algorithm for pathfinding.

4. **Integration:**
   - The frontend, Dijkstra's algorithm, and JSON database are integrated to create a seamless user experience.
   - Users can input their starting and ending points, triggering the algorithm to calculate and display the shortest path on the map.

**User Flow:**
1. **Input Points:**
   - Users select  their desired starting and ending points within the CIT College campus.

2. **Path Calculation:**
   - Dijkstra's algorithm processes the input and calculates the shortest path based on the campus map's graph representation.

3. **Map Display:**
   - The calculated shortest path is highlighted on the Google Maps interface embedded in the webpage, providing a visual representation of the route.

**Benefits:**
   - Provides an efficient tool for navigating the CIT College campus.
   - Users can quickly find the shortest path between any two locations, optimizing travel time within the campus.

**Future Enhancements:**
   - Implementation of additional algorithms for more route-finding options.
   - Integration with real-time data for dynamic path adjustments.
   - User authentication and personalized features.

**Conclusion:**
   - The Shortest Mapping Platform enhances navigation within the CIT College campus, offering a user-friendly interface and efficient pathfinding using Dijkstra's algorithm. The use of HTML, CSS, JavaScript, and JSON files creates a robust and scalable solution for campus mapping.
