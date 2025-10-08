import React, { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/auth';

interface AutoRedirectProps {
    children: React.ReactNode;
}

const AutoRedirect: React.FC<AutoRedirectProps> = ({ children }) => {
    const [isChecking, setIsChecking] = useState(true);
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        if (isAuthenticated()) {
            setRedirecting(true);
            // Usar replace para evitar bucles
            window.location.replace('/home');
        } else {
            setIsChecking(false);
        }
    }, []);

    if (isChecking || redirecting) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Cargando...</div>;
    }

    return <>{children}</>;
};

export default AutoRedirect;