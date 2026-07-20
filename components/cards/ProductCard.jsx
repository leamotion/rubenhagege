import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { IconButton } from '../core/IconButton.jsx';

const PlusIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

export function ProductCard({ image, name, note, price, onAdd, dark = true }) {
  const fg = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  const muted = dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3) 0' }}>
      <div style={{
        width: 72, height: 72, borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0,
        background: `var(--surface-muted) center/cover no-repeat url(${image})`,
      }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-body-lg)', color: fg }}>{name}</span>
        {note && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: muted }}>{note}</span>}
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-price)', color: fg }}>{price}</span>
      </div>
      <IconButton icon={PlusIcon} variant={dark ? 'dark' : 'subtle'} onClick={onAdd} ariaLabel={`Ajouter ${name}`} />
    </div>
  );
}

export function ProductGridCard({ image, name, price, badge, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <div style={{
        aspectRatio: '1', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative',
        background: `var(--surface-muted) center/cover no-repeat url(${image})`,
      }}>
        {badge && <div style={{ position: 'absolute', top: 10, left: 10 }}><Badge tone="gold">{badge}</Badge></div>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-sm)', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{price}</span>
      </div>
    </div>
  );
}
