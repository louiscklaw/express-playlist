const express = require('express');
const multer = require('multer');

// Initialize app and configure storage for Multer middleware
const app = express();
const upload = multer({ dest: 'uploads/' }); // specify destination folder for uploaded files

app.use(express.static('.'));

// Define route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  console.log(req.body);

  console.log(`File ${req.file.originalname} uploaded successfully!`);
  res.send(`File ${req.file.originalname} uploaded successfully!`);
});

// Start server on port 3003
app.listen(3003, () => {
  console.log('Server listening on http://localhost:3003...');
});
