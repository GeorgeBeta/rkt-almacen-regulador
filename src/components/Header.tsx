import React from 'react';

type User = {
    email: string;
    name: string;
}

const headerStyles: React.CSSProperties = {
    background: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const navStyles: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
};

const linkStyles: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
};

const Header = ({ user }: { user: User | null }) => {
    // El estado del usuario ahora viene por props, no por el store.
    // El store de nanostores ya no es necesario para este componente.
    // const user = useStore($user);

    const responsiveTitleStyles = `
        .desktop-title { display: inline; }
        .tablet-title, .mobile-title { display: none; }

        /* Estilos para Tablet */
        @media (max-width: 768px) {
            .desktop-title, .mobile-title { display: none; }
            .tablet-title { display: inline; }
        }

        /* Estilos para Móvil */
        @media (max-width: 480px) {
            .desktop-title, .tablet-title { display: none; }
            .mobile-title { display: inline; }
        }
    `;

    return (
        <header style={headerStyles}>
            {/* style jsx no funciona en Astro con React, así que usamos un <style> tag */}
            <style dangerouslySetInnerHTML={{ __html: responsiveTitleStyles }} />
            
            <h2>
                <span className="desktop-title">Gestión Almacén Regulador</span>
                <span className="tablet-title">Gestión Regulador</span>
                <span className="mobile-title">Almacén</span>
            </h2>

            {user && (
                <nav style={navStyles}>
                    <a href="/home" style={linkStyles}>Home</a>
                    <a href="/pedidos/subir" style={linkStyles}>Subir pedido</a>
                    <a href="/pedidos" style={linkStyles}>Ver pedidos</a>
                    <a href="/usuarios" style={linkStyles}>Usuarios</a>
                    <a href="/api/logout" style={linkStyles}>Salir</a>
                </nav>
            )}
        </header>
    );
};

export default Header;