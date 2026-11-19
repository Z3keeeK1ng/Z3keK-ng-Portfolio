<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Z3keK!ng | Portfolio</title>
<meta name="description" content="Portfolio of Z3keK!ng: games and projects, plus a love of Astro Bot.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600;800&family=Hanken+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --ice: #E9F3FA;
  --night: #0E1A2B;
  --helmet: #C4262B;
  --glow: #F5B82E;
  --mist: #56697F;
  --line: #C5D6E4;
  color-scheme: light;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--ice);
  color: var(--night);
  font: 400 1.125rem/1.7 "Hanken Grotesk", system-ui, sans-serif;
}
a { color: inherit; }
.wrap { max-width: 72rem; margin: 0 auto; padding-inline: clamp(1.25rem, 5vw, 3.5rem); }
.hero {
  background: var(--night);
  color: var(--ice);
  border-bottom: 6px solid var(--glow);
  padding-bottom: clamp(3.5rem, 8vw, 6rem);
}
.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem 1.75rem;
  padding-block: 1.5rem;
  font-size: 1rem;
}
.top a { color: var(--ice); text-decoration: none; }
.top a:hover { text-decoration: underline; text-underline-offset: 0.25em; }
.hero-grid {
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding-top: clamp(1rem, 4vw, 3rem);
}
@media (min-width: 800px) {
  .hero-grid { grid-template-columns: minmax(0, 22rem) 1fr; }
}
.logo {
  display: block;
  width: 100%;
  max-width: 22rem;
  height: auto;
  border-radius: 1.5rem;
}
h1 {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(2.8rem, 9vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0 0 1.25rem;
  overflow-wrap: anywhere;
}
.lede {
  margin: 0 0 2.25rem;
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  color: var(--line);
}
.btn {
  display: inline-block;
  background: var(--glow);
  color: var(--night);
  font-weight: 600;
  padding: 0.9rem 1.5rem;
  text-decoration: none;
}
.btn:hover { text-decoration: underline; text-underline-offset: 0.25em; }
.split {
  display: grid;
  gap: clamp(2rem, 6vw, 5rem);
  padding-block: clamp(3rem, 7vw, 5.5rem);
}
@media (min-width: 800px) {
  .split { grid-template-columns: minmax(0, 16rem) 1fr; }
  .split-head { position: sticky; top: 2rem; align-self: start; }
}
h2 {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.2;
  margin: 0 0 0.75rem;
}
.split div > p { margin: 0 0 1rem; max-width: 62ch; }
.split div > p:last-child { margin-bottom: 0; }
.split-head p { color: var(--mist); }
.game {
  padding-block: 2rem;
  border-top: 1px solid var(--line);
}
.game:first-child { border-top: 0; padding-top: 0; }
.game h3 {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(1.35rem, 2.6vw, 1.75rem);
  line-height: 1.2;
  margin: 0 0 0.6rem;
}
.game h3 a {
  color: var(--helmet);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}
.game h3 a:hover { text-decoration-color: var(--night); }
.game p { margin: 0; max-width: 62ch; }
.text-link {
  color: var(--helmet);
  font-weight: 600;
  text-underline-offset: 0.25em;
}
footer {
  background: var(--night);
  color: var(--ice);
  border-top: 6px solid var(--glow);
  padding-block: 2.5rem;
}
footer nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.75rem;
  margin-bottom: 1rem;
}
footer a { color: var(--ice); text-decoration: none; }
footer a:hover { text-decoration: underline; }
footer p { margin: 0; font-size: 0.95rem; color: var(--line); }
:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
  border-radius: 2px;
}
.btn:focus-visible { outline-color: var(--glow); }
@media (prefers-reduced-motion: no-preference) {
  .logo { animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
  html { scroll-behavior: smooth; }
}
@keyframes rise {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
}
.game { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 1rem 2rem; }
.game-body { flex: 1 1 26rem; min-width: 0; }
.open { flex: none; margin-top: 0.4rem; border: 2px solid var(--night); color: var(--night); font-weight: 600; padding: 0.5rem 1.1rem; text-decoration: none; }
.open:hover { background: var(--night); color: var(--ice); }

</style>
<style>
.address-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem 1rem; }
.address-row .address { flex: 1 1 18rem; min-width: 0; margin: 0; font-weight: 600; overflow-wrap: anywhere; }
.copy-btn { flex: none; border: 2px solid var(--night); color: var(--night); background: transparent; font: inherit; font-weight: 600; padding: 0.5rem 1.1rem; cursor: pointer; }
.copy-btn:hover { background: var(--night); color: var(--ice); }
.split .copy-status { margin: 0.5rem 0 0; font-size: 0.95rem; color: var(--mist); }
</style>
</head>
<body>
<header class="hero">
<div class="wrap">
<nav class="top" aria-label="Main">
<a href="#projects">Projects</a>
<a href="#about">About</a>
<a href="https://www.youtube.com/@Z3keeeK1ngYT/shorts">YouTube</a>
</nav>
<div class="hero-grid">
<img class="logo" src="data:image/jpeg;base64,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" alt="A red helmet with glowing red eyes">
<div>
<h1>Z3keK!ng</h1>
<p class="lede">I like Astro Bot.</p>
<p>Here are the games and projects I've made, with a short paragraph on each one.</p>
<a class="btn" href="#projects">See the projects</a>
</div>
</div>
</div>
</header>
<main>
<section id="donate" class="wrap split" aria-labelledby="donate-title">
<div class="split-head">
<h2 id="donate-title">Make a donation with crypto</h2>
</div>
<div>
<p>Send Bitcoin to this Proton Wallet address.</p>
<div class="address-row">
<p class="address">bc1qneth3xx702ndaq7jmv2vx0cppgudm6dz8qxl0j</p>
<button type="button" class="copy-btn" data-copy="bc1qneth3xx702ndaq7jmv2vx0cppgudm6dz8qxl0j">Copy</button>
</div>
<p>For other crypto, email <a href="mailto:keyaan.Z3ke@protonmail.com">keyaan.Z3ke@protonmail.com</a> first to get the right address.</p>
<p class="copy-status" role="status" aria-live="polite"></p>
</div>
</section>
<section id="about" class="wrap split" aria-labelledby="about-title">
<div class="split-head">
<h2 id="about-title">About</h2>
</div>
<div>
<p>I'm Z3keK!ng, and I make games under Nidhog Studios. I like Astro Bot, and one of my projects below is built around its music and sprites.</p>
<p>Everything below is hosted on GitHub Pages, so each project opens in a browser from its own page. Click a title to open the project, and read the paragraph under it for a short description.</p>
</div>
</section>
<section id="youtube" class="wrap split" aria-labelledby="youtube-title">
<div class="split-head">
<h2 id="youtube-title">YouTube</h2>
</div>
<div>
<p>My YouTube channel, Z3keK!ng - Dev, is where I promote Nidhog Studios, an indie browser gaming hub. Its games and projects play right in your web browser, with zero downloads required.</p>
<p><a class="text-link" href="https://www.youtube.com/@Z3keeeK1ngYT/shorts">Watch the Shorts</a></p>
</div>
</section>
<section id="projects" class="wrap split" aria-labelledby="projects-title">
<div class="split-head">
<h2 id="projects-title">Projects</h2>
<p>Each project has its own page on GitHub Pages.</p>
</div>
<div>
<article class="game">
<div class="game-body">
<h3><a href="https://z3keeek1ng.github.io/The-Playroom-PS4-Edition-For-PC-and-Mobile-/">The Playroom PS4 Edition</a></h3>
<p>An edition of The Playroom built for PC and mobile. Because it's hosted on its own page, you can open it in a browser without a console.</p>
</div>
<a class="open" href="https://z3keeek1ng.github.io/The-Playroom-PS4-Edition-For-PC-and-Mobile-/" aria-label="Open The Playroom PS4 Edition">Open</a>
</article>
<article class="game">
<div class="game-body">
<h3><a href="https://z3keeek1ng.github.io/Z3keeeK1ng/">Flight Command</a></h3>
<p>A project from the Z3keeeK1ng page, hosted on its own page like the rest. A fuller description, covering what the game is about and how to play, is coming soon.</p>
</div>
<a class="open" href="https://z3keeek1ng.github.io/Z3keeeK1ng/" aria-label="Open Flight Command">Open</a>
</article>
<article class="game">
<div class="game-body">
<h3><a href="https://z3keeek1ng.github.io/Disease-Simulator-V1/">Disease Simulator V1</a></h3>
<p>A simulator built around diseases, shared here as version 1. The game's own page says it was made by its creator, and it opens in a browser from its own page.</p>
</div>
<a class="open" href="https://z3keeek1ng.github.io/Disease-Simulator-V1/" aria-label="Open Disease Simulator V1">Open</a>
</article>
<article class="game">
<div class="game-body">
<h3><a href="https://z3keeek1ng.github.io/Astro-Bot-Rescue-Mission-Soundtrack-/">Astro Bot Rescue Mission Soundtrack</a></h3>
<p>Music and sprites from Astro Bot, shared on a page of their own. The page brings the project's sprites and music together, so you can look at the artwork and listen to the soundtrack in one place.</p>
</div>
<a class="open" href="https://z3keeek1ng.github.io/Astro-Bot-Rescue-Mission-Soundtrack-/" aria-label="Open Astro Bot Rescue Mission Soundtrack">Open</a>
</article>
<article class="game">
<div class="game-body">
<h3><a href="https://z3keeek1ng.github.io/Paper-Minecraft-V1/">Paper Minecraft V1</a></h3>
<p>A Minecraft-style game, shared here as version 1. Like the other projects, it opens from its own page in a browser, so you can open it without installing anything.</p>
</div>
<a class="open" href="https://z3keeek1ng.github.io/Paper-Minecraft-V1/" aria-label="Open Paper Minecraft V1">Open</a>
</article>
<article class="game">
<div class="game-body">
<h3><a href="https://z3keeek1ng.github.io/3d-Table-Tennis-/">3D Table Tennis</a></h3>
<p>Play table tennis in 3D against the computer. The score appears on screen as you play, so you can follow the match, and there are controls for sound and pause, so you can mute the game or stop for a moment.</p>
</div>
<a class="open" href="https://z3keeek1ng.github.io/3d-Table-Tennis-/" aria-label="Open 3D Table Tennis">Open</a>
</article>
<article class="game">
<div class="game-body">
<h3><a href="https://z3keeek1ng.github.io/Fps-shooter-by-Electricity1423/">FPS Shooter</a></h3>
<p>A first-person shooter made by <a href="https://scratch.mit.edu/users/_Electricity1423_/">_Electricity1423_</a>, hosted here on GitHub Pages with its creator credited.</p>
</div>
<a class="open" href="https://z3keeek1ng.github.io/Fps-shooter-by-Electricity1423/" aria-label="Open FPS Shooter">Open</a>
</article>
</div>
</section>
</main>
<footer>
<div class="wrap">
<nav aria-label="Footer">
<a href="#projects">Projects</a>
<a href="#about">About</a>
<a href="https://www.youtube.com/@Z3keeeK1ngYT/shorts">YouTube</a>
</nav>
<p>Nidhog Studios is a TradeMark of Z3keK!ng©</p>
</div>
</footer>
<script>
(function () {
  var status = document.querySelector('#donate .copy-status');
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      function fallback() {
        var field = document.createElement('textarea');
        field.value = text;
        field.setAttribute('readonly', '');
        field.style.position = 'absolute';
        field.style.left = '-9999px';
        document.body.appendChild(field);
        field.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(field);
        status.textContent = ok ? 'Copied to clipboard.' : 'Could not copy. Select the address to copy it by hand.';
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          function () { status.textContent = 'Copied to clipboard.'; },
          fallback
        );
      } else {
        fallback();
      }
    });
  });
})();
</script>
</body>
</html>
