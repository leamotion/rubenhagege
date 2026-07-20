import React from 'react';

export function RadioGroup({ options = [], value, onChange, name = 'radio-group' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {options.map((o) => {
        const active = value === o.value;
        return (
          <label key={o.value} onClick={() => onChange && onChange(o.value)} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-3)', cursor: 'pointer',
            padding: '14px 16px', borderRadius: 'var(--radius-md)',
            border: `1px solid ${active ? 'var(--surface-accent)' : 'var(--border-hairline)'}`,
            background: active ? 'rgba(74,20,32,.04)' : 'var(--surface-card)',
          }}>
            <span style={{
              width: 18, height: 18, borderRadius: 'var(--radius-circle)',
              border: `1.5px solid ${active ? 'var(--surface-accent)' : 'var(--border-hairline)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {active && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--surface-accent)' }} />}
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--text-primary)' }}>{o.label}</span>
              {o.helper && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{o.helper}</span>}
            </span>
          </label>
        );
      })}
    </div>
  );
}
