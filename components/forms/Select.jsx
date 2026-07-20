import React from 'react';

export function Select({ label, options = [], value, onChange, placeholder = 'Sélectionner' }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>}
      <select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)',
          padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)',
          background: 'var(--surface-card)', appearance: 'none', cursor: 'pointer',
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}
