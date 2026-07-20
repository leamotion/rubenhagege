Mobile bottom sheet for personalization panels and checkout steps.

```jsx
<Sheet open={open} onClose={() => setOpen(false)} title="Personnaliser" footer={<Button>Ajouter — 44,00 €</Button>}>
  ...form...
</Sheet>
```

Renders absolutely within its container (positioning parent should be `position:relative`). Includes a drag-handle affordance and a close button.
