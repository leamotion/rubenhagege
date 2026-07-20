function Home({ onOrder }) {
  const { NavBar } = window.RubenHagGeDesignSystem_76f306;
  return (
    <div style={homeStyles.wrap}>
      <div style={homeStyles.dark}>
        <NavBar cartCount={0} />
        <div style={{ ...homeStyles.hero, height: 620 }}>
          <img src="assets/hero.jpg" style={homeStyles.heroImg} alt="" />
          <div style={homeStyles.heroOverlay} />
          <div style={homeStyles.heroText}>
            <span style={homeStyles.heroLabel}>Chef pâtissier — MAF 2021</span>
            <h1 style={homeStyles.heroTitle}>Ruben Hagège</h1>
            <button onClick={onOrder} style={homeStyles.heroCta}>Passer commande</button>
          </div>
        </div>
      </div>

      <section style={homeStyles.about}>
        <img src="assets/chef.jpg" style={homeStyles.chefImg} alt="Ruben Hagège" />
        <div style={homeStyles.aboutText}>
          <span style={homeStyles.aboutLabel}>Le chef</span>
          <p style={homeStyles.aboutBody}>Meilleur Apprenti de France 2021, Ruben Hagège dirige depuis trois ans son laboratoire de pâtisserie à Alfortville — créations artisanales, exclusivement sur commande.</p>
        </div>
      </section>
    </div>
  );
}

const homeStyles = {
  wrap: { background: 'var(--surface-page)' },
  dark: { background: 'var(--surface-inverse)' },
  hero: { position: 'relative', height: 420, overflow: 'hidden' },
  heroImg: { width: '100%', height: '100%', objectFit: 'cover' },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(26,24,23,.1), rgba(26,24,23,.85))' },
  heroText: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: '0 20px 28px', display: 'flex', flexDirection: 'column', gap: 12 },
  heroLabel: { fontFamily: 'var(--font-body)', color: 'var(--text-inverse-muted)', fontSize: 'var(--text-caption)', textTransform: 'uppercase', letterSpacing: '.12em' },
  heroTitle: { margin: 0, fontFamily: 'var(--font-display)', color: '#fff', fontSize: 'var(--text-display-xl)', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase' },
  heroCta: { marginTop: 8, alignSelf: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: 600, background: 'var(--surface-accent)', color: '#fff', border: 'none', borderRadius: 999, padding: '14px 26px', fontSize: 15, cursor: 'pointer' },
  section: { padding: '28px 20px 8px', display: 'flex', flexDirection: 'column', gap: 12 },
  list: { display: 'flex', flexDirection: 'column' },
  about: { display: 'flex', gap: 16, padding: 24, alignItems: 'center' },
  chefImg: { width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 },
  aboutText: { display: 'flex', flexDirection: 'column', gap: 4 },
  aboutLabel: { fontFamily: 'var(--font-display)', color: 'var(--text-accent)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '.1em' },
  aboutBody: { margin: 0, fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.5 },
};

window.Home = Home;
