const express = require('express');
const server = express();
const routes = require('./routes/routes');
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.use('/api', routes); // Prefix all routes with '/api'

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  






