const express = require('express');
const path = require('path');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Routes
// app.get('/', (req, res) => {
//   // Handle GET request for the homepage
//   res.send('Welcome to the homepage');
// });
app.get('/', (req, res) => {
  res.render('index');
});

// Example of defining a route handler for POST request
app.post('/login', (req, res) => {
  // Handle POST request for user login
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// By following these steps, you'll have initialized an Express app, added necessary middleware for request and response parsing, defined routes to handle various functionalities, and started the server to listen for incoming requests. You can now build upon this foundation by implementing the desired functionalities in your application.




















// const express = require('express');
// const pg = require('pg');
// const ejs = require('ejs');
//
// // Initialize Express App: Create an instance of the Express application:
// const app = express();
//
// //Configure Middleware: Set up middleware to parse incoming requests and responses:
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// app.use(express.json()); // Parse JSON bodies
//
// //Connect to the Database: Establish a connection to your PostgreSQL database:
// const { Pool } = require('pg');
//
// const pool = new Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'your_database_name',
//   password: 'your_password',
//   port: 5432, // Default PostgreSQL port
// });
//
// // Test the database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database at:', res.rows[0].now);
//   }
// });
//
// //Define Routes: Set up routes for your application. For example, you can define routes for the homepage, authentication, club exploration, membership, and events:
// // Homepage route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Club Management System!');
// });
//
// // Authentication routes
// // Define routes for sign-up, login, logout, etc.
//
// // Club exploration routes
// // Define routes for displaying clubs, events, etc.
//
// // Membership routes
// // Define routes for applying for membership, approving memberships, etc.
//
// // Event routes
// // Define routes for creating events, enrolling in events, etc.
//
// //Start the Server: Listen for incoming requests on a specific port:
// const PORT = process.env.PORT || 3000; // Default port 3000
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
