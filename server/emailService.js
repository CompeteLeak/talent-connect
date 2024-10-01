const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const app = express();

// Configure Multer to handle file uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage: storage });

// Enable CORS and Parse JSON bodies (for form data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Handle POST request to send email
app.post('/api/send-email', upload.fields([
  { name: 'headshot', maxCount: 1 },  // Ensure the field names match the form data
  { name: 'reel', maxCount: 1 },
  { name: 'resume', maxCount: 1 }
]), (req, res) => {
  const { firstName, lastName, email, phone, experience, training, motivation, accomplishment } = req.body;

  // Logging request data for debugging
  console.log("Form Data:", req.body);
  console.log("Uploaded Files:", req.files);

  // Configure the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '', // Your Gmail address
      pass: '', // Your email password (use an App Password from Google)
    },
  });

  // Setup mail options including file attachments if they exist
  const mailOptions = {
    from: email,
    to: '', // Destination email
    subject: 'New Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Years of Experience: ${experience}
      Training: ${training}
      Motivation: ${motivation}
      Accomplishment: ${accomplishment}
    `,
    attachments: [
      ...(req.files.headshots ? [{ filename: 'headshot.jpg', content: req.files.headshots[0].buffer }] : []),
      ...(req.files.reel ? [{ filename: 'reel.mp4', content: req.files.reel[0].buffer }] : []),
      ...(req.files.resume ? [{ filename: 'resume.pdf', content: req.files.resume[0].buffer }] : []),
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent successfully');
  });
});

// Test routes to verify server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/test', (req, res) => {
  res.send('Test route working');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
