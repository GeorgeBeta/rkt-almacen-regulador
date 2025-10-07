import React, { useState, useEffect } from 'react';

const formContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    fontFamily: 'sans-serif',
};

const formStyles: React.CSSProperties = {
    background: '#fff',
    padding: '2.5rem',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
};

const formGroupStyles: React.CSSProperties = {
    marginBottom: '1.5rem',
};

const labelStyles: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#333',
    fontWeight: '600',
};

const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    fontSize: '1rem',
};

const buttonStyles: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem',
    border: 'none',
    borderRadius: '5px',
    background: '#333',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.2s ease-in-out',
};

const buttonHoverStyles: React.CSSProperties = {
    background: '#555',
};

const errorStyles: React.CSSProperties = {
    color: '#D8000C',
    backgroundColor: '#FFD2D2',
    border: '1px solid #D8000C',
    padding: '1rem',
    borderRadius: '5px',
    marginBottom: '1.5rem',
    textAlign: 'center',
};

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Inicializar valores mock después del montaje del componente
    useEffect(() => {
        const isMock = import.meta.env.PUBLIC_IS_MOCK === 'true';
        if (isMock) {
            setEmail('demo@rkt-regulador.com');
            setPassword('demo123');
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const response = await fetch('/api/login', {
            method: 'POST',
            body: formData,
        });

        if (response.ok && response.redirected) {
            window.location.href = response.url;
        } else {
            setError('Email o contraseña incorrectos');
            setIsLoading(false);
        }
    };

    // Este efecto leerá el error de la URL si el login falla
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.has('error')) {
            setError(params.get('error') || 'Error desconocido');
        }
    }, []);

    return (
        <div style={formContainerStyles}>
            <form onSubmit={handleSubmit} style={formStyles}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Iniciar Sesión</h2>
                {error && <p style={errorStyles}>{error}</p>}
                <div style={formGroupStyles}>
                    <label htmlFor="email" style={labelStyles}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyles}
                    />
                </div>
                <div style={formGroupStyles}>
                    <label htmlFor="password" style={labelStyles}>Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyles}
                    />
                </div>
                <button
                    type="submit"
                    style={isButtonHovered ? { ...buttonStyles, ...buttonHoverStyles } : buttonStyles}
                    disabled={isLoading}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;