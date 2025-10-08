import React, { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/auth';

interface AutoRedirectProps {
    children: React.ReactNode;
}

const AutoRedirect: React.FC<AutoRedirectProps> = ({ children }) => {
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (isAuthenticated()) {
            window.location.href = '/home';
        } else {
            setIsChecking(false);
        }
    }, []);

    if (isChecking) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Cargando...</div>;
    }

    return <>{children}</>;
};

export default AutoRedirect;