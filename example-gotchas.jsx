//-----------------
// #1 Fake Elements
<a
  href="javascript:void(0);"
  onclick="window.location.href='https://example.com'"
>
  The classic
</a>

<div onclick="">
  And its sibling the not-a-button
</div>

// Better!
<button onclick="">
  <span>more button like</span>
</button>

// Sometimes you really want it to be a div...
<div
  tabindex="0"
  onclick="..." onfocus="..." onhover="..."
  onblur="..." onkeyN="..."
>
  Now we're getting to be a button
  But at what cost
</div>

//-----------------
// #2 Missing text alternatives

<img src="unsplash.com" />

// Better
<img src="unsplash.com" alt="" />
// Good for your fellow dev, saying
// "i'm positively certain this is non-essential"
<img src="unsplash.com" aria-hidden="true" alt="" />

// Where it gets hard (JSX or other templating)
<img src="unsplash.com" alt={data.title} />

// Set up your data sources to always require alt text
<img src={getImg().src} alt={getImg().title} />

// A more subtle case
<button onclick="...">
  <i class="fas fa-sign-in"></i>
</button>
<a href="#">
  <img src="..." alt="" />
</a>

//-----------------
// # ARIA overuse

<div role="button">again, i'm not a button</div>

//=================
// # Uncommon Gotchas