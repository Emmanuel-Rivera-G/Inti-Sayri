import React from 'react';

const Sliderbar = () => {
    return (
        <div className='h-[100vh] w-[270px] bg-[#08343F] rounded-r-[10px] z-50'>
            <div className='h-[10vh] flex justify-center items-center text-[#F9E3D6] text-[30px] font-[800] tracking-[5px] py-2 sticky top-0 bg-[#08343F] rounded-tr-[10px]'>
                <span>LOGO</span>
            </div>
            <div className='h-[90vh] pl-7 pt-6 overflow-y-auto'>
                <div>
                    <span className='text-gray-400 text-[15px] mb-3 block'>
                        NAVEGACIÓN
                    </span>
                    <nav className='text-[#F9E3D6] text-[18px]'>
                        <ul>
                            <a href="#dashboard">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-tachometer-alt"></i><span>Dashboard</span>
                                </li>
                            </a>
                            <a href="#mesas">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-chair"></i><span>Gestión de Mesas</span>
                                </li>
                            </a>
                            <a href="#menu">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-utensils"></i><span>Menú</span>
                                </li>
                            </a>
                            <a href="#pedidos">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-concierge-bell"></i><span>Pedidos</span>
                                </li>
                            </a>
                            <a href="#pagos">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-cash-register"></i><span>Pagos</span>
                                </li>
                            </a>
                            <a href="#empleados">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-users"></i><span>Empleados</span>
                                </li>
                            </a>
                            <a href="#categorias">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-list"></i><span>Categorías</span>
                                </li>
                            </a>
                            <a href="#usuarios">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-user-friends"></i><span>Usuarios</span>
                                </li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sliderbar;
