import React from 'react';
import { FaPhoneAlt, FaVideo, FaEllipsisV } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io'; // Icono de flecha hacia atrás

const ChatHeader = ({ selectedChat, goBack }) => {
    return (
        <div className="bg-azulAcento mt-[40px] text-white flex items-center justify-between p-3 shadow-md">
            <div className="flex items-center">
                {/* Botón de Volver con icono de React */}
                <button
                    onClick={goBack}
                    className="text-white bg-transparent border-2 border-white rounded-full p-2 hover:bg-white hover:text-[#075E54] transition duration-300 ease-in-out mr-2"
                >
                    <IoMdArrowBack size={15} />
                </button>
                <h3 className="text-md font-semibold ml-2">{selectedChat.user}</h3>
            </div>

            <div className="flex items-center space-x-3">
                {/* Icono de llamada */}
                <button className="text-white p-2 rounded-full hover:bg-[#128C7E] hover:text-white transition duration-300 ease-in-out">
                    <FaPhoneAlt size={18} />
                </button>
                {/* Icono de video */}
                <button className="text-white p-2 rounded-full hover:bg-[#128C7E] hover:text-white transition duration-300 ease-in-out">
                    <FaVideo size={18} />
                </button>
                {/* Icono de opciones */}
                <button className="text-white p-2 rounded-full hover:bg-[#128C7E] hover:text-white transition duration-300 ease-in-out">
                    <FaEllipsisV size={18} />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;
