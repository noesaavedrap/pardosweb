'use client';

import { Turnstile as TurnstileComponent } from 'next-turnstile';

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: (error: string) => void;
  onExpire?: () => void;
}

export function Turnstile({ onVerify, onError, onExpire }: TurnstileProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return (
      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
        Turnstile site key not configured
      </div>
    );
  }

  return (
    <TurnstileComponent
      siteKey={siteKey}
      onVerify={onVerify}
      onError={(error) => onError?.(String(error))}
      onExpire={() => onExpire?.()}
      theme="dark"
      size="normal"
    />
  );
}
