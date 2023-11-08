import React, { useState } from 'react';
import './Chat.css'; // Import your custom CSS for styling

function ChatBot() {
  const [conversation, setConversation] = useState([
    { text: "Hello, how can I assist you?", sender: 'bot' },
  ]);

  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      // Add user question to the conversation
      setConversation([...conversation, { text: userInput, sender: 'user' }]);

      try {
        // Send user message to the Flask API
        const response = await sendUserMessageToFlask(userInput);

        // Add bot response to the conversation
        setConversation([...conversation, { text: response.response, sender: 'bot' }]);
      } catch (error) {
        console.error("Error sending message to Flask:", error);
      }

      // Clear user input
      setUserInput('');
    }
  };

  // Function to send user message to the Flask API
  const sendUserMessageToFlask = async (message) => {
    try {
      const response = await fetch('http://localhost:6100/get_bard_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(`Error sending message to Flask API: ${error.message}`);
    }
  };

  return (
    <div className="chat-bot-container">
      <div className="chat-messages">
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a question..."
          value={userInput}
          onChange={handleUserInput}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
