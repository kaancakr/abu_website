import React, { useState, useEffect } from "react";
import "../globals.css";
import { FaRocket } from "react-icons/fa";
import "../globals.css";

const ChatBotSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const phrases = ["Merhaba!", "Görevin ne?", "Akademik takvim", "Teşekkürler!"];

  useEffect(() => {
    setMessages([
      { text: "ABU Chatbot'a hoşgeldin! Sana nasıl yardımcı olabilirim?", sender: "bot" },
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      text: inputText,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");

    const formData = new URLSearchParams();
    formData.append("input", inputText);
    formData.append("uname", "kaan");
    formData.append("sname", "cakir");
    formData.append("student_id", 123);
    formData.append("chat_id_unq", "1234");
    formData.append("chat_level", 1);
    formData.append("chat_lang", "t");
    formData.append(
      "msg_time",
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );

    try {
      const response = await fetch("http://127.0.0.1:8000/msg_input", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: formData.toString(),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("API Response:", responseData);

        const botMessages = [];

        if (responseData.msg_1) {
          botMessages.push({
            text: responseData.msg_1,
            sender: "bot",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
        }

        if (responseData.msg_2 && responseData.msg_link) {
          botMessages.push({
            text: `${responseData.msg_2}\n\n${responseData.msg_link}`,
            sender: "bot",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
        }

        if (!responseData.msg_1 && responseData.msg_wrong) {
          botMessages.push({
            text: responseData.msg_wrong,
            sender: "bot",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
        }

        setMessages((prevMessages) => [...prevMessages, ...botMessages]);
      } else {
        console.error("Failed to send message:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePhraseClick = (phrase) => {
    setInputText(phrase);
  };

  return (
    <div className="chatbot-section fixed-height">
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <span className="message_text">{message.text}</span>
              <span className="timestamp">{message.time}</span>
            </div>
          ))}
        </div>
        <div className="phrases-container">
          {phrases.map((phrase, index) => (
            <button
              key={index}
              className="phrase-button"
              onClick={() => handlePhraseClick(phrase)}
            >
              {phrase}
            </button>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            style={{ color: "black" }}
          />
          <button onClick={handleSendMessage}><FaRocket size={25} color="#141E61"/></button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotSection;