import type { APIRoute } from 'astro';
import { login } from '../../services/authService';

// Manejador para GET: si alguien llega aquí, lo redirigimos al home.
// Esto soluciona el problema del navegador intentando hacer un GET a /api/login.
export const GET: APIRoute = ({ redirect }) => {
  return redirect('/home');
};

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) {
    return new Response('Email y contraseña son obligatorios', { status: 400 });
  }

  const user = await login(email, password);

  if (!user) {
    // Si el login falla, redirigimos a la página de inicio
    // con un mensaje de error en la URL.
    return redirect('/?error=Credenciales incorrectas');
  }

  // Si el login es correcto, creamos la cookie de sesión
  cookies.set('session', JSON.stringify(user), {
    path: '/',
    maxAge: 60 * 60 * 24, // 1 día
    httpOnly: true,
    secure: import.meta.env.PROD, // Solo HTTPS en producción
  });

  return redirect('/home');
};