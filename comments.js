// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load comments module
const comments = require('./comments');

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Add comment
app.post('/comments', (req, res) => {
  comments.addComment(req.body.comment);
  res.status(201).send('Comment added');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});