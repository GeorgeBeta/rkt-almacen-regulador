import React, { useState, useEffect } from 'react';

interface Usuario {
    id: number;
    email: string;
    name: string;
    active: boolean;
}

const UsuariosManager: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([
        { id: 1, email: 'demo@rkt-regulador.com', name: 'Usuario Demo', active: true },
        { id: 2, email: 'admin@rkt-regulador.com', name: 'Administrador', active: true },
        { id: 3, email: 'operador@rkt-regulador.com', name: 'Operador', active: false },
        { id: 4, email: 'supervisor@rkt-regulador.com', name: 'Supervisor', active: true },
        { id: 5, email: 'almacen@rkt-regulador.com', name: 'Encargado Almacén', active: true },
        { id: 6, email: 'logistica@rkt-regulador.com', name: 'Coordinador Logística', active: false },
        { id: 7, email: 'calidad@rkt-regulador.com', name: 'Control Calidad', active: true }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState<Usuario | null>(null);
    const [formData, setFormData] = useState({ email: '', name: '', password: '' });

    const toggleUsuario = (id: number) => {
        setUsuarios(usuarios.map(u => 
            u.id === id ? { ...u, active: !u.active } : u
        ));
    };

    const eliminarUsuario = (id: number) => {
        if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
            setUsuarios(usuarios.filter(u => u.id !== id));
        }
    };

    const editarUsuario = (usuario: Usuario) => {
        setEditingUser(usuario);
        setFormData({ email: usuario.email, name: usuario.name, password: '' });
        setShowModal(true);
    };

    const nuevoUsuario = () => {
        setEditingUser(null);
        setFormData({ email: '', name: '', password: '' });
        setShowModal(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingUser) {
            // Editar usuario existente
            setUsuarios(usuarios.map(u => 
                u.id === editingUser.id 
                    ? { ...u, email: formData.email, name: formData.name }
                    : u
            ));
        } else {
            // Crear nuevo usuario
            const newId = Math.max(...usuarios.map(u => u.id)) + 1;
            setUsuarios([...usuarios, {
                id: newId,
                email: formData.email,
                name: formData.name,
                active: true
            }]);
        }
        setShowModal(false);
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h2>Gestión de Usuarios</h2>
            
            <div style={{ marginBottom: '2rem' }}>
                <button 
                    onClick={nuevoUsuario}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Nuevo Usuario
                </button>
            </div>

            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Email</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Nombre</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Estado</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                                {usuario.email}
                            </td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                                {usuario.name}
                            </td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                                <span style={{
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: '500',
                                    backgroundColor: usuario.active ? '#d4edda' : '#f8d7da',
                                    color: usuario.active ? '#155724' : '#721c24'
                                }}>
                                    {usuario.active ? 'Activo' : 'Inactivo'}
                                </span>
                            </td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                                <button
                                    onClick={() => editarUsuario(usuario)}
                                    style={{
                                        padding: '0.25rem 0.5rem',
                                        fontSize: '0.8rem',
                                        marginRight: '0.5rem',
                                        backgroundColor: '#28a745',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarUsuario(usuario.id)}
                                    style={{
                                        padding: '0.25rem 0.5rem',
                                        fontSize: '0.8rem',
                                        marginRight: '0.5rem',
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Eliminar
                                </button>
                                <button
                                    onClick={() => toggleUsuario(usuario.id)}
                                    style={{
                                        padding: '0.25rem 0.5rem',
                                        fontSize: '0.8rem',
                                        backgroundColor: '#ffc107',
                                        color: '#212529',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {usuario.active ? 'Desactivar' : 'Activar'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        width: '90%',
                        maxWidth: '500px'
                    }}>
                        <h3>{editingUser ? 'Editar Usuario' : 'Nuevo Usuario'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.5rem',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                                    Nombre:
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.5rem',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                                    Contraseña:
                                </label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    required={!editingUser}
                                    placeholder={editingUser ? 'Dejar vacío para mantener actual' : ''}
                                    style={{
                                        width: '100%',
                                        padding: '0.5rem',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#6c757d',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsuariosManager;