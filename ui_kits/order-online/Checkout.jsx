function StepDots({ step, steps }) {
  return (
    <div style={{ display: 'flex', gap: 6, padding: '10px 20px 0' }}>
      {steps.map((s, i) => (
        <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? 'var(--surface-accent)' : 'var(--color-gray-200)' }} />
      ))}
    </div>
  );
}

function sectionTitleStyle() {
  return { margin: 0, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.04em', fontWeight: 500, fontSize: 17, color: 'var(--text-primary)' };
}

function estimateDeliveryFee(address) {
  if (!address || address.trim().length < 4) return null;
  let hash = 0;
  for (const ch of address) hash = (hash * 31 + ch.charCodeAt(0)) % 997;
  return 4 + (hash % 9); // simulated distance-based estimate, 4–12 €
}

function Checkout({ cart, date, onBack, onConfirm }) {
  const { NavBar, RadioGroup, Input, Button, Checkbox, Textarea, Badge } = window.RubenHagGeDesignSystem_76f306;
  const steps = ['livraison', 'infos', 'paiement'];
  const [stepIdx, setStepIdx] = React.useState(0);
  const days = React.useMemo(() => window.nextWeekdays(), []);
  const [mode, setMode] = React.useState('pickup');
  const [gift, setGift] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const selectedDay = days.find((d) => d.key === date);
  const deliveryFee = estimateDeliveryFee(address);

  function next() { setStepIdx((i) => Math.min(steps.length - 1, i + 1)); }
  function prev() { stepIdx === 0 ? onBack() : setStepIdx((i) => i - 1); }

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <NavBar cartCount={total} onMenu={prev} dark={false} />
      <StepDots step={stepIdx} steps={steps} />
      {selectedDay && (
        <div style={{ padding: '10px 20px 0', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Commande pour {selectedDay.label}</div>
      )}
      <div style={{ padding: '18px 20px 100px', display: 'flex', flexDirection: 'column', gap: 22 }}>

        {stepIdx === 0 && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h3 style={sectionTitleStyle()}>Livraison ou retrait</h3>
            <RadioGroup value={mode} onChange={setMode} options={[
              { label: 'Click & Collect', value: 'pickup', helper: 'Retrait au laboratoire, Alfortville' },
              selectedDay && selectedDay.isFriday
                ? { label: 'Livraison', value: 'delivery', helper: 'Tarif calculé selon votre adresse · créneau communiqué jeudi soir' }
                : { label: 'Livraison (indisponible)', value: 'unavailable', helper: 'Livraison uniquement le vendredi' },
            ]} />
            {mode === 'pickup' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}>Retrait au laboratoire</span>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>
                  Venez quand vous le souhaitez pendant nos horaires d'ouverture{selectedDay ? ` : ${selectedDay.hours}` : ''}.
                </p>
              </div>
            )}
            {mode === 'delivery' && (
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>Commande de livraison possible jusqu'à jeudi 18h. Après cette heure, seul le Click & Collect reste disponible selon le stock.</p>
            )}
          </section>
        )}

        {stepIdx === 1 && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h3 style={sectionTitleStyle()}>Vos informations</h3>
            <Input label="Nom" />
            <Input label="Prénom" />
            <Input label="Téléphone" type="tel" />
            <Input label="Email" type="email" />
            {mode === 'delivery' && !gift && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Input label="Adresse complète" value={address} onChange={setAddress} />
                {deliveryFee != null && (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-accent)', fontWeight: 600 }}>Frais de livraison estimés : {deliveryFee.toFixed(2).replace('.', ',')} €</span>
                )}
              </div>
            )}
            <Checkbox label="Offrir cette commande" checked={gift} onChange={setGift} />
            {gift && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 14, borderRadius: 'var(--radius-md)', background: 'var(--surface-muted)' }}>
                <Input label="Nom du destinataire" />
                {mode === 'delivery' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Input label="Adresse de livraison du destinataire" value={address} onChange={setAddress} />
                    {deliveryFee != null && (
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-accent)', fontWeight: 600 }}>Frais de livraison estimés : {deliveryFee.toFixed(2).replace('.', ',')} €</span>
                    )}
                  </div>
                )}
                <Textarea label="Message cadeau" maxLength={120} />
              </div>
            )}
          </section>
        )}

        {stepIdx === 2 && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={sectionTitleStyle()}>Récapitulatif</h3>
            {cart.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                <span>{item.qty} × {item.name}{item.parts ? ` (${item.parts} parts)` : ''}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {selectedDay && <Badge>{selectedDay.label}</Badge>}
              {mode === 'delivery' && <Badge>Livraison{deliveryFee != null ? ` — ${deliveryFee.toFixed(2).replace('.', ',')} €` : ''}</Badge>}
              {mode === 'pickup' && selectedDay && <Badge>Retrait {selectedDay.hours}</Badge>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Button variant="primary" size="lg" onClick={onConfirm}>Payer par carte</Button>
              <Button variant="outline" size="lg" onClick={onConfirm}>Payer sur place</Button>
            </div>
          </section>
        )}
      </div>

      {stepIdx < 2 && (
        <div style={{ position: 'absolute', left: 20, right: 20, bottom: 20 }}>
          <Button variant="dark" size="lg" style={{ width: '100%' }} onClick={next}>Continuer</Button>
        </div>
      )}
    </div>
  );
}
window.Checkout = Checkout;

function Confirmation({ onRestart }) {
  const { Button } = window.RubenHagGeDesignSystem_76f306;
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-inverse)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: 32, textAlign: 'center' }}>
      <svg width="48" height="48" viewBox="0 0 16 16" fill="none"><path d="M2 8.5L6 12.5L14 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 400, fontSize: 28 }}>Commande confirmée</h2>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.7)', fontSize: 14, maxWidth: 280 }}>Une facture vous a été envoyée par email. Votre créneau de retrait ou de livraison vous sera confirmé jeudi soir.</p>
      <Button variant="subtle" onClick={onRestart}>Retour à l'accueil</Button>
    </div>
  );
}
window.Confirmation = Confirmation;
