import React, { useEffect, useState } from 'react';
import { getSession } from '../utils/auth';
import type { User } from '../store/auth';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = getSession();
        if (session) {
            setUser(session);
        } else {
            window.location.href = '/';
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return user ? <>{children}</> : null;
};

export default ProtectedRoute;