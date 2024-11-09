import React, { useState } from 'react';
import Sliderbar from '../components/Sliderbar';
import Header from '../components/Header';
import ChatUnico from '../components/ChatUnico';

const Chats = () => {
    const [chats] = useState([
        { id: 1, user: 'Hackathon - Team Bytes', lastMessage: '¡Todo bien! Revisando tareas.', time: '11:40 p.m.' },
        { id: 2, user: 'Marielena', lastMessage: 'Pensé que no estabas', time: '10:18 p.m.' },
        { id: 3, user: 'Emmanuel Rivera', lastMessage: 'Okey, esta bien.', time: '9:58 p.m.' },
        { id: 4, user: '+51 912 231 123', lastMessage: 'Ya me avisas cómo se resuelve.', time: '9:55 p.m.' }
    ]);

    const [selectedChat, setSelectedChat] = useState(null);

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
    };

    const handleGoBack = () => {
        setSelectedChat(null);
    };

    if (selectedChat) {
        return <ChatUnico selectedChat={selectedChat} goBack={handleGoBack} />;
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <Header userName="Marlon" />

            {/* Lista de chats */}
            <div className="flex-1 overflow-y-auto p-2 mt-[40px]">
                {chats.map((chat) => (
                    <div
                        key={chat.id}
                        className="flex items-center p-4 bg-white rounded-lg mb-2 shadow-sm cursor-pointer hover:bg-gray-100"
                        onClick={() => handleChatClick(chat)}
                    >
                        {/* Avatar temporal */}
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                            {chat.user.charAt(0)}
                        </div>

                        {/* Información del chat */}
                        <div className="flex-1 ml-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{chat.user}</h3>
                                <span className="text-sm text-gray-500">{chat.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">
                                {chat.lastMessage}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sliderbar */}
            <Sliderbar />
        </div>
    );
};

export default Chats;
