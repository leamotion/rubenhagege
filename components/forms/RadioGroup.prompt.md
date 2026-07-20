Card-style radio group for exclusive choices like delivery method or payment timing.

```jsx
<RadioGroup value={mode} onChange={setMode} options={[
  {label:'Click & Collect', value:'pickup', helper:'Retrait au laboratoire'},
  {label:'Livraison', value:'delivery', helper:'Le vendredi, jusqu\'à jeudi 18h'},
]} />
```
