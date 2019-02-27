//-----------------
// #1 Fake Elements
<a
  href="javascript:void(0);"
  onClick={(e) => { window.location.href='https://example.com' }}
>
  Typical before React
</a>

<div onClick={(e) => {}}>
  Div...should be a button or anchor
</div>

// Better!
<button onClick={...}>
  <span>button so much better!</span>
</button>

// But why not a div? Making a div a button is h.a.r.d
<div
  tabIndex="0"
  onClick="..." onFocus="..." onHover="..."
  onBlur="..." onKeyN="..."
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
<img src="unsplash.com" ariaHidden="true" alt="" />

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