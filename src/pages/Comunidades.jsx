import React, { useState } from 'react';
import Sliderbar from '../components/Sliderbar';
import Header from '../components/Header';
import ChatUnico from '../components/ChatUnico';

const Comunidades = () => {
    const [chats, setChats] = useState([
        { id: 1, user: 'Vecinos - Bloque A', lastMessage: '¿Alguien vio algo sospechoso?', time: '10:05 a.m.' },
        { id: 2, user: 'Grupo de Seguridad - Sector 3', lastMessage: 'Revisé las cámaras, todo en orden.', time: '9:58 a.m.' },
        { id: 3, user: 'Juan (Vecino)', lastMessage: 'Vi algo raro cerca del parque.', time: '9:45 a.m.' },
        { id: 4, user: 'Familia Pérez', lastMessage: '¿Quién puede ir por la abuela?', time: '9:15 a.m.' },
        { id: 5, user: 'Luisa (Vecina)', lastMessage: '¿Revisaste el reporte de anoche?', time: '8:50 a.m.' },
        { id: 6, user: 'Carlos (Grupo de Vigilancia)', lastMessage: 'Todo tranquilo, pero sigue alerta.', time: '8:30 a.m.' },
        { id: 7, user: 'Vecinos - Calle 12', lastMessage: '¿Sabemos si hay patrullaje esta noche?', time: '8:15 a.m.' },
        { id: 8, user: 'María Fernanda (Vecina)', lastMessage: 'El vecino de la esquina está fuera de lugar.', time: '7:45 a.m.' },
        { id: 9, user: 'Equipo de Emergencia', lastMessage: 'Actualización sobre el incidente en la zona 5.', time: '7:30 a.m.' },
        { id: 10, user: 'Rodrigo (Jefe de Seguridad)', lastMessage: 'Confirmado, tenemos patrullaje adicional.', time: '7:15 a.m.' }
    ]);

    const [searchText, setSearchText] = useState('');
    const [selectedChat, setSelectedChat] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newChat, setNewChat] = useState({ user: '', time: '' });

    const handleChatClick = (chat) => setSelectedChat(chat);
    const handleGoBack = () => setSelectedChat(null);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewChat({ user: '', time: '' });
    };

    const handleAddChat = () => {
        if (newChat.user && newChat.time) {
            setChats([...chats, { ...newChat, lastMessage: '', id: chats.length + 1 }]);
            handleCloseModal();
        }
    };

    const filteredChats = chats.filter((chat) =>
        chat.user.toLowerCase().includes(searchText.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchText.toLowerCase())
    );

    if (selectedChat) {
        return <ChatUnico selectedChat={selectedChat} goBack={handleGoBack} />;
    }

    return (
        <div className="flex flex-col h-screen">
            <Header userName="Marlon" />

            <main className='mt-[40px] px-5 py-4 bg-azulBlanco'>
                <div className="flex justify-between items-center mx-2 mb-4">
                    <h2 className="text-3xl font-bold text-azulOscuro">Comunidades</h2>
                    <button
                        onClick={handleOpenModal}
                        className="bg-[#25D366] text-white text-sm py-2 px-4 rounded-lg hover:bg-[#1eae58]"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>

                {/* Buscador */}
                <div className="p-2">
                    <input
                        type="text"
                        placeholder="🔍 Buscar o iniciar un chat"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                    />
                </div>

                {/* Lista de chats */}
                <div className="flex-1 overflow-y-auto p-2">
                    {filteredChats.map((chat) => (
                        <div
                            key={chat.id}
                            className="flex items-center p-4 bg-white rounded-lg mb-2 shadow-md cursor-pointer hover:bg-[#f5f6f7]"
                            onClick={() => handleChatClick(chat)}
                        >
                            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xl">
                                {chat.user.charAt(0)}
                            </div>
                            <div className="flex-1 ml-4 border-b border-gray-200 pb-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-md font-semibold text-gray-800">{chat.user}</h3>
                                    <span className="text-xs text-gray-500">{chat.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal para añadir chat */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-semibold mb-4">Agregar Nuevo Chat</h3>
                        <input
                            type="text"
                            placeholder="Nombre del usuario"
                            value={newChat.user}
                            onChange={(e) => setNewChat({ ...newChat, user: e.target.value })}
                            className="w-full p-2 border rounded mb-3"
                        />
                        <input
                            type="text"
                            placeholder="Hora"
                            value={newChat.time}
                            onChange={(e) => setNewChat({ ...newChat, time: e.target.value })}
                            className="w-full p-2 border rounded mb-3"
                        />
                        <div className="flex justify-end">
                            <button onClick={handleCloseModal} className="mr-2 text-gray-500">Cancelar</button>
                            <button onClick={handleAddChat} className="bg-[#25D366] text-white p-2 rounded">Agregar</button>
                        </div>
                    </div>
                </div>
            )}

            <Sliderbar />
        </div>
    );
}

export default Comunidades;
