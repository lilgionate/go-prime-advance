import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import './ChatPopup.css';

const socket = io.connect('http://localhost:5000');

const ChatPopup = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/chat/messages')
      .then(response => setMessages(response.data));

    socket.on('receiveMessage', (newMessage) => {
      setMessages(prevMessages => [newMessage, ...prevMessages]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      const newMessage = { username: 'User', message };
      socket.emit('sendMessage', newMessage);
      setMessage('');
    }
  };

  return (
    <div className="chat-popup">
      <div className="chat-header">
        <h4>Chat Support</h4>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.username}: </strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPopup;
