import React from 'react';

export function CategoryTabs({ tabs = [], value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-2)', overflowX: 'auto' }}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button key={t.value} onClick={() => onChange && onChange(t.value)} style={{
            flexShrink: 0, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-body-sm)',
            padding: '10px 18px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
            border: active ? 'none' : '1px solid var(--border-hairline)',
            background: active ? 'var(--surface-accent)' : 'transparent',
            color: active ? 'var(--text-inverse)' : 'var(--text-primary)',
          }}>{t.label}</button>
        );
      })}
    </div>
  );
}
