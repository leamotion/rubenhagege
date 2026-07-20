import React from 'react';

const PALETTE = {
  primary: { bg: 'var(--surface-accent)', fg: 'var(--text-inverse)', border: 'transparent' },
  dark: { bg: 'var(--surface-inverse)', fg: 'var(--text-inverse)', border: 'transparent' },
  outline: { bg: 'transparent', fg: 'var(--text-primary)', border: 'var(--border-strong)' },
  subtle: { bg: 'var(--surface-inverse-soft)', fg: 'var(--text-inverse)', border: 'transparent' },
};

const SIZES = {
  sm: { padding: '8px 16px', font: 'var(--text-body-sm)' },
  md: { padding: '12px 22px', font: 'var(--text-body)' },
  lg: { padding: '16px 28px', font: 'var(--text-body-lg)' },
};

export function Button({ variant = 'primary', size = 'md', disabled = false, children, onClick, style }) {
  const p = PALETTE[variant] || PALETTE.primary;
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: s.font,
        letterSpacing: '.01em',
        padding: s.padding,
        borderRadius: 'var(--radius-pill)',
        background: disabled ? 'var(--color-gray-300)' : p.bg,
        color: disabled ? 'var(--color-gray-500)' : p.fg,
        border: `1px solid ${p.border === 'var(--border-strong)' ? 'var(--border-strong)' : 'transparent'}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'opacity var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = 1; }}
      onMouseOver={(e) => { if (!disabled) e.currentTarget.style.opacity = .88; }}
      onMouseOut={(e) => { e.currentTarget.style.opacity = 1; }}
    >
      {children}
    </button>
  );
}
