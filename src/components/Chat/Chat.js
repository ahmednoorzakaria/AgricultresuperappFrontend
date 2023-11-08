import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import your custom CSS for styling

function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you?", sender: 'bot' },
  ]);

  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  console.log(userInput)

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      // Add user message
      setMessages([...messages, { text: userInput, sender: 'user' }]);

      // Send user message to the AI and get a response
      try {
        const response = await sendUserMessage(userInput);

        // Add bot response
        setMessages([...messages, { text: response, sender: 'bot' }]);
      } catch (error) {
        console.error("Error sending message to AI:, error");
      }

      // Clear user input
      setUserInput('');
    }
  };

  const sendUserMessage = async (message) => {
    // Replace 'My API Key' with your actual OpenAI API key

    // Define the API endpoint and request parameters
    const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };
    const data = JSON.stringify({
      prompt: `Answer the following question: ${message}`,
      max_tokens: 100,
    });

    // Make the API request
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: data,
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result)
    return result.choices[0].text.trim();
  };

  return (
    <div className="chat-bot-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
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
