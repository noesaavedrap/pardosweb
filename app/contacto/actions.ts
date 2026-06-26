'use server';

import { validateTurnstileToken } from 'next-turnstile';

export async function verifyTurnstile(token: string) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    return { success: false, error: 'Turnstile secret key not configured' };
  }

  try {
    const result = await validateTurnstileToken({
      token,
      secretKey,
    });

    if (result.success) {
      return { success: true };
    }
    return { success: false, error: 'CAPTCHA verification failed' };
  } catch {
    return { success: false, error: 'Verification error' };
  }
}

export async function submitContactForm(formData: FormData) {
  const token = formData.get('cf-turnstile-response') as string;
  if (!token) {
    return { success: false, error: 'Por favor completa el CAPTCHA' };
  }

  const verification = await verifyTurnstile(token);
  if (!verification.success) {
    return verification;
  }

  // Here you would normally send an email or save to database
  // For now, just return success
  return { success: true };
}
