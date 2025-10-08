import React, { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/auth';

interface AutoRedirectProps {
    children: React.ReactNode;
}

const AutoRedirect: React.FC<AutoRedirectProps> = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        // Solo verificar, no redirigir automáticamente
        if (isAuthenticated()) {
            // Mostrar enlace para ir a home en lugar de redirección automática
            window.location.href = '/home';
        } else {
            setShowLogin(true);
        }
    }, []);

    if (!showLogin) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Verificando...</div>;
    }

    return <>{children}</>;
};

export default AutoRedirect;