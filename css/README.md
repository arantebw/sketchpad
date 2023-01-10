# CSS

## <span id="sr-only">`sr-only` Class</span>

```css
.sr-only {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  -webkit-clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  padding: 0;
  margin: -1px;
}
```
## <span id="break-points">DevTools Breakpoints</span>

```css
/* Mobile */
@media (max-width: 425px) {
  /* ... */
}

/* Table */
@media (min-width: 426px) and (max-width: 768px) {
  /* ... */
}

/* Laptop */
@media (min-width: 769px) and (max-width: 1024px) {
  /* ... */
}

/* Laptop L */
@media (min-width: 1025px) and (max-width: 1440px) {
  /* ... */
}

/* 4K */
@media (min-width: 1441px) and (max-width: 2560px) {
  /* ... */
}

/* Beyond 4K */
@media (min-width: 2561px) {
  /* ... */
}
```
