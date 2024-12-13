const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Step 2: GET API with query and path params
app.get('/api/info/:id', (req, res) => {
  const id = req.params.id;  // Path param
  const name = req.query.name;  // Query param

  res.json({
    message: 'Info received',
    pathParam: id,
    queryParam: name,
  });
});

// Step 3: POST API to accept JSON data and return an array
app.post('/api/data', (req, res) => {
  const inputData = req.body; // Get the JSON data from the request body

  const responseData = [inputData];
  // const responseData = 
  // [
  //   { id: 1, name: 'Item 1' },
  //   { id: 2, name: 'Item 2' },
  //   { id: 3, name: 'Item 3' },
  //   inputData,  // Include received data in the array
  // ];

  res.json(responseData); // Send back the array as JSON response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
