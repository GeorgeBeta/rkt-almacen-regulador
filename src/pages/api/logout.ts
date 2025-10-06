import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ cookies, redirect }) => {
  // Eliminar la cookie de sesión
  cookies.delete('session', {
    path: '/',
  });

  // Redirigir al usuario a la página de inicio (login)
  return redirect('/');
};