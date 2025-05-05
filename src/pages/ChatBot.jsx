import React, { useState } from 'react';
import styles from './ChatBot.module.css';

function ChatBot() {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi! How can I help you today?' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, { sender: 'user', text: input }]);
        const userInput = input;
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'bot', text: `You said: "${userInput}"` }]);
        }, 800);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className={styles.main}>
            <div className={styles.chatHeader}>ChatBot</div>
            <div className={styles.chatBody}>
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`${styles.message} ${msg.sender === 'user' ? styles.user : styles.bot}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className={styles.inputArea}>
                <input
                    type="text"
                    value={input}
                    placeholder="Type a message..."
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className={styles.input}
                />
                <button onClick={handleSend} className={styles.button}>Send</button>
            </div>
        </div>
    );
}

export default ChatBot;
