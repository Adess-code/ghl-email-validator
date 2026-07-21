const express = require('express');
const app = express();
app.use(express.json());

app.post('/validate-email', (req, res) => {
  const { email, contactId, validationType } = req.body;

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);

  // Check for disposable emails
  const disposableDomains = [
    'tempmail.com', '10minutemail.com', 'throwaway.email',
    'mailinator.com', 'yopmail.com', 'temp-mail.org'
  ];
  
  const domain
