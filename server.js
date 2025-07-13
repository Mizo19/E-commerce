const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve React static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// API routes handled by json-server
const apiRouter = jsonServer.router(path.join(__dirname, 'src/db/db.json'));
app.use('/api', apiRouter);

// All other routes serve React's index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
