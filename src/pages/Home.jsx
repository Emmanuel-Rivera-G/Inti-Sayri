import React from 'react';
import Sliderbar from '../components/Sliderbar';
import Header from '../components/Header';

const Home = () => {

    const handleEmergencyClick = () => {
        alert('¡Alerta enviada al CA Municipal!');
    };

    return (
        <div>
            <Header userName="Marlon" />
            <Sliderbar />
            
            <main className='relative h-[100vh] pt-[40px] flex flex-col items-center justify-center z-0 '>
                <span className='text-[13px] text-gray-500 absolute top-[45px] '>Preciona  <span className='font-bold'>dos tres</span> el boton de apagado para enviar una alerta</span>

                <div className='flex flex-col items-center'>
                    <button
                        onClick={handleEmergencyClick}
                        className='bg-red-500 text-white font-bold text-5xl p-10 rounded-full shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105 h-[150px] w-[150px] flex justify-center items-center'
                    >
                        SOS
                    </button>
                    <p className='text-gray-700 mt-4 text-lg'>
                        ¿Estás en una emergencia?
                    </p>
                    <p className='text-gray-500 text-sm'>
                        Presiona el botón para enviar una alerta al CA Municipal
                    </p>
                </div>

                <div className='grid grid-cols-2 gap-6 mt-10 w-full px-10'>
                    
                    <button className='bg-yellow-400 p-3 rounded-lg shadow-md text-white font-semibold hover:bg-yellow-500 transition flex flex-col items-center '>
                        <span>Policía Nacional del Perú</span>
                        <div className='flex items-center mt-2'>
                            <i className='fa-solid fa-phone mr-2'></i> 105
                        </div>
                    </button>

                    <button className='bg-orange-500 p-4 rounded-lg shadow-md text-white font-semibold hover:bg-orange-600 transition flex flex-col items-center justify-center'>
                        <span>Bomberos</span>
                        <div className='flex items-center mt-2'>
                            <i className='fa-solid fa-phone mr-2'></i> 116
                        </div>
                    </button>

                    <button className='bg-pink-600 p-4 rounded-lg shadow-md text-white font-semibold hover:bg-pink-700 transition flex flex-col items-center'>
                        <span>Emergencia Policía Carreteras</span>
                        <div className='flex items-center mt-2'>
                            <i className='fa-solid fa-phone mr-2'></i> 110
                        </div>
                    </button>

                    <button className='bg-blue-500 p-4 rounded-lg shadow-md text-white font-semibold hover:bg-blue-600 transition flex flex-col items-center justify-center'>
                        <span>Defensa Civil</span>
                        <div className='flex items-center mt-2'>
                            <i className='fa-solid fa-phone mr-2'></i> 115
                        </div>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Home;
