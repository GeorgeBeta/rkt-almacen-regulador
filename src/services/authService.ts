import type { User } from '../store/auth';

/**
 * Simula una llamada a la API para hacer login.
 * En un futuro, aquí iría la llamada real a AWS Amplify Auth.
 * @param email
 * @param password
 * @returns
 */
export async function login(email: string, password: string): Promise<User | null> {
    const isMock = import.meta.env.PUBLIC_IS_MOCK === 'true';
    
    if (isMock && email === 'demo@rkt-regulador.com' && password === 'demo123') {
        return { email: 'demo@rkt-regulador.com', name: 'Usuario Demo' };
    }
    
    // Aquí iría la lógica real de autenticación con AWS Cognito
    return null;
}

export async function logout() {
    // La lógica de logout ahora está en el endpoint /api/logout
    // que borra la cookie y redirige.
}