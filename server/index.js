import cors from 'cors';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', clinic: 'Raj Dental Clinic & Implant Centre' });
});

app.post('/api/book-appointment', (req, res) => {
  const { name, phone, concern } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({
      message: 'Name and phone are required to request an appointment.',
    });
  }

  return res.status(201).json({
    message: 'Appointment request received. Our team will call you shortly.',
    data: { name, phone, concern: concern || 'General consultation' },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
