function Catalog({ date, onOpenProduct, onQuickAdd, onBack, cartCount, onCart }) {
  const { NavBar, CategoryTabs, ProductGridCard, IconButton } = window.RubenHagGeDesignSystem_76f306;
  const days = React.useMemo(() => window.nextWeekdays(), []);
  const selectedDay = days.find((d) => d.key === date);
  const isFriday = !!(selectedDay && selectedDay.isFriday);
  const [cat, setCat] = React.useState(isFriday ? 'individuels' : 'partager');
  const Plus = <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;

  const products = {
    individuels: [
      { id: 'mangue', name: 'Mangue', price: '6,50 €', image: 'assets/tarte-citron-yuzu.jpg', badge: 'Vendredi' },
      { id: 'fraise', name: 'Tarte aux fraises', price: '5,50 €', image: 'assets/tarte-fraises-individuelle.jpg', badge: 'Vendredi' },
      { id: 'vanille', name: 'Fleur vanille', price: '7,00 €', image: 'assets/tarte-vanille-fraise.jpg', badge: 'Vendredi' },
      { id: 'honore', name: 'Saint-Honoré vanille', price: '7,50 €', image: 'assets/saint-honore.jpg', badge: 'Vendredi' },
    ],
    partager: [
      { id: 'fraisier', name: 'Fraisier fruits rouges', price: 'À partir de 33,00 €', image: 'assets/fraisier.jpg' },
      { id: 'millefeuille', name: 'Millefeuille vanille', price: 'À partir de 33,00 €', image: 'assets/millefeuille.jpg' },
      { id: 'partage-fraise', name: 'Tarte fraises à partager', price: 'À partir de 28,00 €', image: 'assets/tarte-fraises-partage.jpg' },
      { id: 'vacherin', name: 'Vacherin fruits rouges', price: 'À partir de 36,00 €', image: 'assets/vacherin.jpg' },
    ],
    indispensables: [
      { id: 'hallot', name: 'Hallot', price: '3,00 €', image: 'assets/tarte-citron-yuzu.jpg' },
      { id: 'chocolat', name: 'Gâteau chocolat noisette', price: '38,00 €', image: 'assets/gateau-chocolat.jpg' },
    ],
  };

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <NavBar cartCount={cartCount} onMenu={onBack} onCart={onCart} dark={false} />
      {selectedDay && (
        <div style={{ padding: '0 20px 4px', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Commande pour {selectedDay.label}</div>
      )}
      <div style={{ padding: '4px 20px 18px' }}>
        <CategoryTabs value={cat} onChange={setCat} tabs={[
          ...(isFriday ? [{ label: 'Individuels', value: 'individuels' }] : []),
          { label: 'À partager', value: 'partager' },
          { label: 'Indispensables', value: 'indispensables' },
        ]} />
        {!isFriday && (
          <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>Les gâteaux individuels sont proposés uniquement le vendredi.</p>
        )}
      </div>
      <div style={{ padding: '0 20px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {products[cat].map((p) => (
          <div key={p.id} style={{ position: 'relative' }}>
            <ProductGridCard image={p.image} name={p.name} price={p.price} badge={p.badge} onClick={() => onOpenProduct(p, cat)} />
            <div style={{ position: 'absolute', right: 8, bottom: 46 }} onClick={(e) => e.stopPropagation()}>
              <IconButton icon={Plus} variant="dark" size="sm" ariaLabel={`Ajouter ${p.name}`} onClick={() => onQuickAdd && onQuickAdd(p, cat)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.Catalog = Catalog;
