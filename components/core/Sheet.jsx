import React from 'react';

export function Sheet({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 40,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(26,24,23,.45)' }} />
      <div style={{
        position: 'relative', width: '100%', maxHeight: '86%',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 0' }}>
          <div style={{ width: 36, height: 4, borderRadius: 999, background: 'var(--color-gray-300)' }} />
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px', borderBottom: '1px solid var(--border-hairline)',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-sm)', color: 'var(--text-primary)' }}>{title}</span>
          <button onClick={onClose} aria-label="Fermer" style={{
            width: 32, height: 32, borderRadius: 'var(--radius-circle)', border: 'none',
            background: 'var(--surface-muted)', cursor: 'pointer', color: 'var(--text-primary)', fontSize: 16,
          }}>✕</button>
        </div>
        <div style={{ padding: '18px 20px', overflowY: 'auto', flex: 1 }}>{children}</div>
        {footer && (
          <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border-hairline)' }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
