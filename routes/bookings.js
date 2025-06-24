
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/api/bookings', async (req, res) => {
  try {
    const {
      name, phone, location, extraAddress,
      service, datetime, description, bookingCode
    } = req.body;

    if (!name || !phone || !location || !service || !datetime || !bookingCode) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBooking = await prisma.booking.create({
      data: {
        name,
        phone,
        location,
        extraAddress,
        service,
        datetime: new Date(datetime),
        description,
        bookingCode
      }
    });

    res.status(201).json({ message: 'Booking saved', bookingCode: newBooking.bookingCode });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
