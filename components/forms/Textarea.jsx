import React from 'react';

export function Textarea({ label, value, onChange, maxLength = 45, placeholder }) {
  const count = (value || '').length;
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>}
      <textarea
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange && onChange(e.target.value)}
        rows={2}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)',
          padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)',
          background: 'var(--surface-card)', outline: 'none', resize: 'none',
        }}
      />
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', alignSelf: 'flex-end' }}>{count}/{maxLength}</span>
    </label>
  );
}
