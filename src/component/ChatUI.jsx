import React, { useState } from 'react';

const ChatUI = () => {
    const [messages, setMessages] = useState([]);
    const [messages1, setMessages1] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isChatboxOpen, setIsChatboxOpen] = useState(true);
    const userID ='1'

    const handleSend = () => {
        if (userID== '1') {
            const userMessage = { text: userInput, sender: 'user' };
            setMessages([...messages, userMessage]); // Add user message to the messages array
            // setUserInput('');
            // Simulate bot response after a short delay
            // setTimeout(() => {
            //     const botResponse = { text: 'This is a response from the chatbot.', sender: 'bot' };
            //     setMessages([...messages, botResponse]); // Add bot response to the messages array
            // }, 500);
        }
        else{
            const userMessage = { text: userInput, sender: 'bot' };
            setMessages([...messages, userMessage]);
        }
    };

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    return (
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
            <button onClick={toggleChatbox} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Chat with Admin Bot
            </button>
            <div className={`fixed bottom-16 right-4 w-96 ${isChatboxOpen ? '' : 'hidden'}`}>
                <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                    <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">Admin Bot</p>
                        <button onClick={toggleChatbox} className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-4 h-80 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <p className={`bg-${message.sender === 'user' ? 'blue-500' : 'gray-200'} text-${message.sender === 'user' ? 'black' : 'gray-700'} rounded-lg py-2 px-4 inline-block`}>{message.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t flex">
                        <input
                            type="text"
                            placeholder="Type a message"
                            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatUI;
