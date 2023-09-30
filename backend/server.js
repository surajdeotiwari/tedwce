const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost/REACT_BACKEND', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.post('/api/submit-form', upload.single('paymentScreenshot'), (req, res) => {
  // Handle form submission and save data to MongoDB here
  console.log(req.body); // Form data
  console.log(req.file); // Uploaded file

  // Return a response to the frontend
  res.json({ message: 'Form data saved successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});