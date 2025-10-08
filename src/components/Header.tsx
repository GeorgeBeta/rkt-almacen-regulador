import React, { useState, useEffect } from 'react';
import { getSession, clearSession } from '../utils/auth';

type User = {
    email: string;
    name: string;
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setUser(getSession());
    }, []);

    const handleLogout = () => {
        clearSession();
        window.location.href = '/';
    };

    const styles = `
        .header {
            background: #333;
            color: #fff;
            padding: 1rem;
            position: relative;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .logo h2 {
            margin: 0;
            font-size: 1.2rem;
        }
        
        .nav-desktop {
            display: flex;
            gap: 1.5rem;
        }
        
        .nav-mobile {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #333;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .nav-mobile.open {
            display: flex;
        }
        
        .nav-mobile a {
            padding: 0.75rem 0;
            border-bottom: 1px solid #555;
        }
        
        .nav-mobile a:last-child {
            border-bottom: none;
        }
        
        .nav-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 4px;
            transition: background 0.2s;
        }
        
        .nav-link:hover {
            background: rgba(255,255,255,0.1);
        }
        
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.25rem;
        }
        
        .desktop-title { display: inline; }
        .tablet-title, .mobile-title { display: none; }
        
        @media (max-width: 768px) {
            .nav-desktop { display: none; }
            .menu-toggle { display: block; }
            .desktop-title, .mobile-title { display: none; }
            .tablet-title { display: inline; }
        }
        
        @media (max-width: 480px) {
            .desktop-title, .tablet-title { display: none; }
            .mobile-title { display: inline; }
            .logo h2 { font-size: 1rem; }
        }
    `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <header className="header">
                <div className="header-content">
                    <div className="logo">
                        <h2>
                            <span className="desktop-title">Gestión Almacén Regulador</span>
                            <span className="tablet-title">Gestión Regulador</span>
                            <span className="mobile-title">Almacén</span>
                        </h2>
                    </div>

                    {user && (
                        <>
                            <nav className="nav-desktop">
                                <a href="/home" className="nav-link">Home</a>
                                <a href="/pedidos/subir" className="nav-link">Subir pedido</a>
                                <a href="/pedidos" className="nav-link">Ver pedidos</a>
                                <a href="/usuarios" className="nav-link">Usuarios</a>
                                <button onClick={handleLogout} className="nav-link" style={{background: 'none', border: 'none'}}>Salir</button>
                            </nav>
                            
                            <button 
                                className="menu-toggle"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                ☰
                            </button>
                            
                            <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                                <a href="/home" className="nav-link">Home</a>
                                <a href="/pedidos/subir" className="nav-link">Subir pedido</a>
                                <a href="/pedidos" className="nav-link">Ver pedidos</a>
                                <a href="/usuarios" className="nav-link">Usuarios</a>
                                <button onClick={handleLogout} className="nav-link" style={{background: 'none', border: 'none'}}>Salir</button>
                            </nav>
                        </>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;