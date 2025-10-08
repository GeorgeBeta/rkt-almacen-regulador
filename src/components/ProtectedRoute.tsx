import React, { useEffect, useState } from 'react';
import { getSession } from '../utils/auth';
import type { User } from '../store/auth';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        const session = getSession();
        if (session) {
            setUser(session);
            setLoading(false);
        } else {
            setRedirecting(true);
            // Usar replace para evitar bucles
            window.location.replace('/');
        }
    }, []);

    if (loading || redirecting) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>Cargando...</div>;
    }

    return user ? <>{children}</> : null;
};

export default ProtectedRoute;