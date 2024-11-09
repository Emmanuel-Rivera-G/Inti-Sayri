import React from 'react';

const Header = ({ userName }) => {
    return (
        <header className="w-full h-[40px] bg-azulOscuro text-azulBlanco py-3 px-4 flex items-center justify-between fixed">
            <div>
            </div>
            <div className="flex items-center gap-2">
                <i className="fas fa-user-circle text-[20px]"></i>
                <span className="text-[15px]">{userName}</span>
            </div>
        
        </header>
    );
};

export default Header;
