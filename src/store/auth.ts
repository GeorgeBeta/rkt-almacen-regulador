import { map } from 'nanostores';

export type User = {
    email: string;
    name: string;
}

export const $user = map<User | null>(null);

export function setUser(user: User | null) {
    $user.set(user);
}