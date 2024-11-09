import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate(); // Usamos el hook useNavigate

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
        setError('Por favor ingrese ambos campos.');
        return;
        }

        console.log('Iniciando sesión con', email, password);

        // Si el login es exitoso, redirige al usuario a la página de inicio
        navigate("/home");

        setEmail('');
        setPassword('');
        setError('');
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <div className="h-screen flex justify-center items-center bg-azulBlanco">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-azulOscuro">Iniciar sesión</h2>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-azulMedio">Correo Electrónico</label>
                <input
                type="email"
                id="email"
                className="w-full p-2 mt-2 border border-azulMedio rounded-md"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4 relative">
                <label htmlFor="password" className="block text-sm font-medium text-azulMedio">Contraseña</label>
                <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-2 mt-2 border border-azulMedio rounded-md"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <span 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 cursor-pointer text-azulMedio"
                >
                {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
            </div>

            <button
                type="submit"
                className="w-full py-2 mt-4 bg-azulMedio text-white rounded-md hover:bg-azulAcento focus:outline-none"
            >
                Iniciar sesión
            </button>
            </form>

            <div className="mt-4 text-center text-sm">
            <span className="text-azulOscuro">¿No tienes una cuenta? </span>
            <button 
                className="text-azulMedio hover:underline"
                onClick={handleRegisterClick}
            >
                Regístrate aquí
            </button>
            </div>
        </div>
        </div>
    );
};

export default Login;
