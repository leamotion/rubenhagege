function Badge({ children, tone = 'muted' }) {
  const styles = {
    muted: { bg: 'var(--surface-muted)', fg: 'var(--text-secondary)' },
    accent: { bg: 'var(--surface-accent)', fg: 'var(--text-inverse)' },
    gold: { bg: 'rgba(179,137,79,.14)', fg: 'var(--text-gold)' },
    inverse: { bg: 'rgba(255,255,255,.1)', fg: 'var(--text-inverse-muted)' },
  };
  const s = styles[tone] || styles.muted;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 600,
      letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
      padding: '5px 10px', borderRadius: 'var(--radius-pill)',
      background: s.bg, color: s.fg,
    }}>{children}</span>
  );
}

const BUTTON_PALETTE = {
  primary: { bg: 'var(--surface-accent)', fg: 'var(--text-inverse)', border: 'transparent' },
  dark: { bg: 'var(--surface-inverse)', fg: 'var(--text-inverse)', border: 'transparent' },
  outline: { bg: 'transparent', fg: 'var(--text-primary)', border: 'var(--border-strong)' },
  subtle: { bg: 'var(--surface-inverse-soft)', fg: 'var(--text-inverse)', border: 'transparent' },
};

const BUTTON_SIZES = {
  sm: { padding: '8px 16px', font: 'var(--text-body-sm)' },
  md: { padding: '12px 22px', font: 'var(--text-body)' },
  lg: { padding: '16px 28px', font: 'var(--text-body-lg)' },
};

function Button({ variant = 'primary', size = 'md', disabled = false, children, onClick, style }) {
  const p = BUTTON_PALETTE[variant] || BUTTON_PALETTE.primary;
  const s = BUTTON_SIZES[size] || BUTTON_SIZES.md;
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

const ICONBUTTON_SIZES = { sm: 32, md: 40, lg: 48 };

function IconButton({ icon, size = 'md', variant = 'subtle', onClick, ariaLabel, style }) {
  const px = ICONBUTTON_SIZES[size] || ICONBUTTON_SIZES.md;
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

function Sheet({ open, onClose, title, children, footer }) {
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

function Checkbox({ label, checked, onChange }) {
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

function Input({ label, placeholder, value, onChange, type = 'text', helper }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)',
          padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)',
          background: 'var(--surface-card)', outline: 'none',
        }}
      />
      {helper && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{helper}</span>}
    </label>
  );
}

function QuantityStepper({ value = 1, min = 1, max = 99, onChange }) {
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

function RadioGroup({ options = [], value, onChange, name = 'radio-group' }) {
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

function Select({ label, options = [], value, onChange, placeholder = 'Sélectionner' }) {
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

function Textarea({ label, value, onChange, maxLength = 45, placeholder }) {
  const count = (value || '').length;
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>}
      <textarea
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange && onChange(e.target.value)}
        rows={2}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--text-primary)',
          padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)',
          background: 'var(--surface-card)', outline: 'none', resize: 'none',
        }}
      />
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', alignSelf: 'flex-end' }}>{count}/{maxLength}</span>
    </label>
  );
}

function CategoryTabs({ tabs = [], value, onChange }) {
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

const NAVBAR_BAG_ICON = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7H15L14.3 17H5.7L5 7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M7.5 7V5.5A2.5 2.5 0 0110 3A2.5 2.5 0 0112.5 5.5V7" stroke="currentColor" strokeWidth="1.4"/></svg>
);
const NAVBAR_MENU_ICON = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
);

function NavBar({ wordmark = 'RUBEN HAGÈGE', cartCount = 0, dark = true, onMenu, onCart }) {
  const fg = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-5)', color: fg,
    }}>
      <button onClick={onMenu} aria-label="Menu" style={{ background: 'none', border: 'none', color: fg, cursor: 'pointer', display: 'flex' }}>{NAVBAR_MENU_ICON}</button>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-body)',
        letterSpacing: 'var(--tracking-wordmark)', textTransform: 'uppercase',
      }}>{wordmark}</span>
      <button onClick={onCart} aria-label="Panier" style={{ background: 'none', border: 'none', color: fg, cursor: 'pointer', display: 'flex', position: 'relative' }}>
        {NAVBAR_BAG_ICON}
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

function SectionHeader({ title, actionLabel = 'Voir tout', onAction, dark = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h3 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-sm)',
        color: dark ? 'var(--text-inverse)' : 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '.04em',
      }}>{title}</h3>
      {onAction && (
        <button onClick={onAction} style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-caption)',
          padding: '8px 16px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
          background: dark ? 'var(--surface-inverse-soft)' : 'var(--surface-muted)',
          color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
        }}>{actionLabel}</button>
      )}
    </div>
  );
}

const PRODUCTCARD_PLUS_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

function ProductCard({ image, name, note, price, onAdd, dark = true }) {
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
      <IconButton icon={PRODUCTCARD_PLUS_ICON} variant={dark ? 'dark' : 'subtle'} onClick={onAdd} ariaLabel={`Ajouter ${name}`} />
    </div>
  );
}

function ProductGridCard({ image, name, price, badge, onClick }) {
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

window.RubenHagGeDesignSystem_76f306 = {
  Badge, Button, IconButton, Sheet,
  Checkbox, Input, QuantityStepper, RadioGroup, Select, Textarea,
  CategoryTabs, NavBar, SectionHeader,
  ProductCard, ProductGridCard,
};
