const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use('/api/chat', chatRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/chatdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('sendMessage', async (message) => {
    const savedMessage = await new ChatMessage(message).save();
    io.emit('receiveMessage', savedMessage);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
