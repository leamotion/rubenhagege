import React from 'react';

export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', cursor: 'pointer' }}>
      <span onClick={() => onChange && onChange(!checked)} style={{
        width: 20, height: 20, borderRadius: 'var(--radius-xs)',
        border: `1px solid ${checked ? 'var(--surface-accent)' : 'var(--border-hairline)'}`,
        background: checked ? 'var(--surface-accent)' : 'var(--surface-card)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {checked && <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)' }}>{label}</span>
    </label>
  );
}
