import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Importamos los iconos de ojo

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para confirmar la contraseña

    // Función para manejar el envío del formulario
    const handleRegister = (e) => {
        e.preventDefault();

        // Validación simple
        if (!name || !email || !password || !confirmPassword) {
        setError('Por favor complete todos los campos.');
        return;
        }

        if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden.');
        return;
        }

        // Aquí iría tu lógica para registrar al usuario
        console.log('Registrando usuario con', name, email, password);

        // Reseteamos los campos y el error si el registro es exitoso
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <div className="h-screen flex justify-center items-center bg-azulBlanco">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-azulOscuro">Registrarse</h2>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <form onSubmit={handleRegister}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-azulMedio">Nombre Completo</label>
                <input
                type="text"
                id="name"
                className="w-full p-2 mt-2 border border-azulMedio rounded-md"
                placeholder="Ingresa tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-azulMedio">Correo Electrónico</label>
                <input
                type="email"
                id="email"
                className="w-full p-2 mt-2 border border-azulMedio rounded-md"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4 relative">
                <label htmlFor="password" className="block text-sm font-medium text-azulMedio">Contraseña</label>
                <input
                type={showPassword ? "text" : "password"} // Alterna entre texto y contraseña
                id="password"
                className="w-full p-2 mt-2 border border-azulMedio rounded-md"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <span 
                onClick={() => setShowPassword(!showPassword)} // Cambia el estado de showPassword
                className="absolute right-3 top-10 cursor-pointer text-azulMedio"
                >
                {showPassword ? <FiEyeOff /> : <FiEye />} {/* Muestra el ícono correspondiente */}
                </span>
            </div>

            <div className="mb-4 relative">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-azulMedio">Confirmar Contraseña</label>
                <input
                type={showConfirmPassword ? "text" : "password"} // Alterna entre texto y contraseña
                id="confirmPassword"
                className="w-full p-2 mt-2 border border-azulMedio rounded-md"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Cambia el estado de showConfirmPassword
                className="absolute right-3 top-10 cursor-pointer text-azulMedio"
                >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />} {/* Muestra el ícono correspondiente */}
                </span>
            </div>

            <button
                type="submit"
                className="w-full py-2 mt-4 bg-azulMedio text-white rounded-md hover:bg-azulAcento focus:outline-none"
            >
                Registrarse
            </button>
            </form>

            <div className="mt-4 text-center text-sm">
            <span className="text-azulOscuro">¿Ya tienes una cuenta? </span>
            <a href="/" className="text-azulMedio hover:underline">Inicia sesión aquí</a>
            </div>
        </div>
        </div>
    );
};

export default Register;
