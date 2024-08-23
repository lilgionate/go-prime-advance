const ChatMessage = require('../models/chatMessage');

exports.getMessages = async (req, res) => {
  const messages = await ChatMessage.find().sort({ timestamp: -1 }).limit(50);
  res.json(messages);
};

exports.createMessage = async (req, res) => {
  const newMessage = new ChatMessage(req.body);
  await newMessage.save();
  res.status(201).json(newMessage);
};
