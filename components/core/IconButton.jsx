import React from 'react';

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, size = 'md', variant = 'subtle', onClick, ariaLabel, style }) {
  const px = SIZES[size] || SIZES.md;
  const bg = variant === 'dark' ? 'var(--surface-inverse-soft)'
    : variant === 'accent' ? 'var(--surface-accent)'
    : variant === 'outline' ? 'transparent'
    : 'var(--surface-muted)';
  const fg = variant === 'dark' || variant === 'accent' ? 'var(--text-inverse)' : 'var(--text-primary)';
  const border = variant === 'outline' ? '1px solid var(--border-hairline)' : 'none';
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: px, height: px, borderRadius: 'var(--radius-sm)',
        background: bg, color: fg, border,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'transform var(--duration-fast) var(--ease-standard), opacity var(--duration-fast)',
        ...style,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(.9)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {icon}
    </button>
  );
}
