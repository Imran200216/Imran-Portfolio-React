import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your email transport (use environment variables for security)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'imranbabuji162002@gmail.com',  
      pass: 'cwiy yfwz kbaf hjqw', 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'imranbabuji162002@gmail.com', // Your email to receive messages
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message.', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Contact backend running on port ${PORT}`)); 