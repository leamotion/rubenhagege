import React from 'react';

const BagIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7H15L14.3 17H5.7L5 7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M7.5 7V5.5A2.5 2.5 0 0110 3A2.5 2.5 0 0112.5 5.5V7" stroke="currentColor" strokeWidth="1.4"/></svg>
);
const MenuIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
);

export function NavBar({ wordmark = 'RUBEN HAGÈGE', cartCount = 0, dark = true, onMenu, onCart }) {
  const fg = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-5)', color: fg,
    }}>
      <button onClick={onMenu} aria-label="Menu" style={{ background: 'none', border: 'none', color: fg, cursor: 'pointer', display: 'flex' }}>{MenuIcon}</button>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-body)',
        letterSpacing: 'var(--tracking-wordmark)', textTransform: 'uppercase',
      }}>{wordmark}</span>
      <button onClick={onCart} aria-label="Panier" style={{ background: 'none', border: 'none', color: fg, cursor: 'pointer', display: 'flex', position: 'relative' }}>
        {BagIcon}
        {cartCount > 0 && (
          <span style={{
            position: 'absolute', top: -6, right: -6, background: 'var(--surface-accent)', color: '#fff',
            fontSize: 10, fontWeight: 700, borderRadius: '50%', width: 16, height: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)',
          }}>{cartCount}</span>
        )}
      </button>
    </div>
  );
}
