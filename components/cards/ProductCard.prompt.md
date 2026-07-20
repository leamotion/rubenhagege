Two product card layouts sharing one file.

```jsx
<ProductCard image="/photo.jpg" name="Mangue" note="Uniquement le vendredi" price="6,50 €" onAdd={...} dark />
<ProductGridCard image="/photo.jpg" name="Fleur Mangue" price="À partir de 18,00 €" badge="Nouveau" onClick={...} />
```

`ProductCard` is the compact list row (home page category rails, dark background by default — set `dark={false}` for light sections). `ProductGridCard` is the 2-up catalogue tile with square photography and an uppercase display-font name.
