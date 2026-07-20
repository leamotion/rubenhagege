import React from 'react';

export function SectionHeader({ title, actionLabel = 'Voir tout', onAction, dark = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h3 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-sm)',
        color: dark ? 'var(--text-inverse)' : 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '.04em',
      }}>{title}</h3>
      {onAction && (
        <button onClick={onAction} style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-caption)',
          padding: '8px 16px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
          background: dark ? 'var(--surface-inverse-soft)' : 'var(--surface-muted)',
          color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
        }}>{actionLabel}</button>
      )}
    </div>
  );
}
