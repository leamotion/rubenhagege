import React from 'react';

export function Input({ label, placeholder, value, onChange, type = 'text', helper }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)',
          padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)',
          background: 'var(--surface-card)', outline: 'none',
        }}
      />
      {helper && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{helper}</span>}
    </label>
  );
}
