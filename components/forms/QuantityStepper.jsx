import React from 'react';

export function QuantityStepper({ value = 1, min = 1, max = 99, onChange }) {
  const dec = () => onChange && onChange(Math.max(min, value - 1));
  const inc = () => onChange && onChange(Math.min(max, value + 1));
  const btnStyle = {
    width: 32, height: 32, borderRadius: 'var(--radius-circle)', border: '1px solid var(--border-hairline)',
    background: 'var(--surface-card)', color: 'var(--text-primary)', fontSize: 16, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}>
      <button aria-label="Retirer" onClick={dec} style={btnStyle}>–</button>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-body)', minWidth: 18, textAlign: 'center' }}>{value}</span>
      <button aria-label="Ajouter" onClick={inc} style={btnStyle}>+</button>
    </div>
  );
}
