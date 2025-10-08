import type { User } from '../store/auth';

const SESSION_KEY = 'rkt-session';

export function saveSession(user: User): void {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function getSession(): User | null {
    if (typeof window === 'undefined') return null;
    
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
}

export function clearSession(): void {
    localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
    return getSession() !== null;
}