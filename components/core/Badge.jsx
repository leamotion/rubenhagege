import React from 'react';

export function Badge({ children, tone = 'muted' }) {
  const styles = {
    muted: { bg: 'var(--surface-muted)', fg: 'var(--text-secondary)' },
    accent: { bg: 'var(--surface-accent)', fg: 'var(--text-inverse)' },
    gold: { bg: 'rgba(179,137,79,.14)', fg: 'var(--text-gold)' },
    inverse: { bg: 'rgba(255,255,255,.1)', fg: 'var(--text-inverse-muted)' },
  };
  const s = styles[tone] || styles.muted;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 600,
      letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
      padding: '5px 10px', borderRadius: 'var(--radius-pill)',
      background: s.bg, color: s.fg,
    }}>{children}</span>
  );
}
