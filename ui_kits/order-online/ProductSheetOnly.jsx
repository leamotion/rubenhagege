function ProductSheet({ product, shareable, onClose, onAdd }) {
  const { Sheet, Select, Checkbox, Textarea, QuantityStepper, Button } = window.RubenHagGeDesignSystem_76f306;
  const [parts, setParts] = React.useState('6');
  const [qty, setQty] = React.useState(1);
  const [wantsPlaque, setWantsPlaque] = React.useState(false);
  const [plaqueMsg, setPlaqueMsg] = React.useState('');

  if (!product) return null;
  return (
    <Sheet open={!!product} onClose={onClose} title={product.name}
      footer={<Button variant="primary" size="lg" style={{ width: '100%' }} onClick={() => onAdd(product, { parts: shareable ? parts : null, plaque: wantsPlaque ? plaqueMsg : null, qty })}>Ajouter — {product.price}</Button>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
        {shareable && (
          <Select label="Nombre de parts" value={parts} onChange={setParts} options={[
            { label: '4 parts', value: '4' }, { label: '6 parts', value: '6' },
            { label: '8 parts', value: '8' }, { label: '10 parts', value: '10' }, { label: '12 parts', value: '12' },
          ]} />
        )}
        {shareable && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Checkbox label="Ajouter une plaque personnalisée" checked={wantsPlaque} onChange={setWantsPlaque} />
            {wantsPlaque && <Textarea label="Texte de la plaque" value={plaqueMsg} onChange={setPlaqueMsg} maxLength={45} placeholder="Joyeux anniversaire !" />}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}>Quantité</span>
          <QuantityStepper value={qty} onChange={setQty} />
        </div>
      </div>
    </Sheet>
  );
}
window.ProductSheet = ProductSheet;
