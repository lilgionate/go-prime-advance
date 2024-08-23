const express = require('express');
const router = express.Router();
const { getMessages, createMessage } = require('../controllers/chatController');

// Use the destructured functions directly
router.get('/messages', getMessages);
router.post('/messages', createMessage);

module.exports = router;
