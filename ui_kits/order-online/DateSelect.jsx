function DateSelect({ date, onSelect, onNext, onBack }) {
  const { NavBar, Button } = window.RubenHagGeDesignSystem_76f306;
  const days = React.useMemo(() => window.nextWeekdays(), []);
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%', position: 'relative' }}>
      <NavBar onMenu={onBack} dark={false} />
      <div style={{ padding: '18px 20px 100px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.04em', fontWeight: 500, fontSize: 19, color: 'var(--text-primary)' }}>Pour quel jour ?</h3>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>Commandes ouvertes pour la semaine prochaine. Les gâteaux individuels ne sont proposés que le vendredi.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 6 }}>
          {days.map((d) => (
            <button key={d.key} onClick={() => onSelect(d.key)} style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, padding: '14px 18px', borderRadius: 'var(--radius-md)',
              border: `1px solid ${date === d.key ? 'var(--surface-accent)' : 'var(--border-hairline)'}`,
              background: date === d.key ? 'var(--surface-accent)' : 'var(--surface-card)',
              color: date === d.key ? '#fff' : 'var(--text-primary)', cursor: 'pointer',
            }}>{d.label}{d.isFriday ? ' · Individuels + Livraison' : ''}</button>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 20, right: 20, bottom: 20 }}>
        <Button variant="dark" size="lg" style={{ width: '100%' }} disabled={!date} onClick={onNext}>Continuer</Button>
      </div>
    </div>
  );
}
window.DateSelect = DateSelect;
