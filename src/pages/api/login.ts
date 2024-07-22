import type { APIRoute } from 'astro';
import { AuthService } from '../../service/auth';
import { AxiosError } from 'axios';

export const POST: APIRoute = async ({ request, cookies }) => {

  const { email, password } = await request.json().catch((error) => {
    console.error('Error parsing JSON', error);
    throw new Error('Invalid JSON input');
  });


  try {
    const { access_token, refresh_token, user } = await AuthService.login({ password, email });
    const headers = new Headers();
    headers.append('Set-Cookie', `access_token=${access_token}; HttpOnly; Path=/; Secure; SameSite=Strict`);
    headers.append('Set-Cookie', `refresh_token=${refresh_token}; HttpOnly; Path=/; Secure; SameSite=Strict`);
    headers.append('Set-Cookie', `email=${encodeURIComponent(user.email)}; HttpOnly; Path=/; Secure; SameSite=Strict`);

    return new Response(
      JSON.stringify({ user }),
      {
        status: 200,
        statusText: 'Success',
        headers: headers,
      });
  } catch (e) {
    if (e instanceof AxiosError) {
      return new Response(null, {
        status: 401,
        statusText: e.message,
      });
    }
  }
};
