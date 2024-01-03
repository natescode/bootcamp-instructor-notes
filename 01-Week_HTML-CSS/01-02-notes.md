# HTML + CSS

## HTML

spaces between HTML tags CAN cause weird effects.

Example HTML

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/natescode/embed/poYJWpN?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/natescode/pen/poYJWpN">
  Untitled</a> by Nate (<a href="https://codepen.io/natescode">@natescode</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html
<section class="card-container">
  <div class="card">My Card #1</div>
  <div class="card">My Card #2</div>
</section>
```

With CSS

```css
.card-container {
  width: 600px;
}

.card {
  display: inline-block;
  width: 300px;
}
```

Unfortunately 300px + 300px ≠ 600px because the newline between each `<div>` creates a few pixels of space.

## CSS
