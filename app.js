const refinements = document.createElement('link');
refinements.rel = 'stylesheet';
refinements.href = 'refinements.css';
document.head.append(refinements);

// Keep personal copy in one place so the page can evolve without rewriting layout.
const siteContent = {
  identity: 'student / researcher / visual note-taker',
  current: 'Turning survey notes into clearer questions, useful evidence, and work people can act on.',
  focus: 'field research, customer-facing work, data, and the small details that make an idea readable',
  thought: 'A better answer usually begins with a better question.',
  next: 'keep building a bridge between research, communication, and creative practice',
  photoLabels: ['strawberries', 'orange sunset', 'snowboard jump', 'flower bouquet', 'paper roses', 'cloudy skyline', 'white dress portrait', 'turquoise sea', 'steamed buns', 'snack package', 'rooftop city view', 'green mountain clouds', 'seaside portrait', 'mountain meadow', 'gallery reflection', 'lakeside portrait', 'alpine lake', 'balloon flowers', 'white dress portrait II', 'classroom teamwork', 'flowers in a vase', 'classroom presentation', 'pink shirt portrait', 'framed angel painting', 'campus promenade', 'photo booth portrait', 'football stadium', 'beach and island', 'sleeping cat', 'cycling selfie']
};
const prologue = document.createElement('section');
prologue.className = 'page intro current';
prologue.dataset.p = 'intro';
prologue.innerHTML = `<p class="micro no">ISSUE 00 / COME ON IN</p><div class="intro-sheet"><span class="intro-kicker">A PERSONAL CHANNEL</span><h1>Step into the<br><em>story.</em></h1><p class="intro-copy">Photographs, unfinished questions, and bright in-between moments are waiting inside. Come see where they lead.</p><button class="intro-enter next" data-p="home">LET'S START THE TOUR <span>&#8595;</span></button><span class="intro-mark">Y / 01</span></div><div class="intro-thread" aria-hidden="true"><i></i><i></i><i></i></div>`;
const main = document.querySelector('main');
main.prepend(prologue);
document.querySelectorAll('.page:not(.intro)').forEach((page) => page.classList.remove('current'));
document.querySelectorAll('.go').forEach((button) => button.classList.remove('active'));
document.querySelector('aside')?.remove();
const pages = [...document.querySelectorAll('.page')];
const order = ['intro', 'home', 'about', 'edu', 'work', 'life', 'end'];
document.querySelector('.stats b:last-child')?.remove();
document.querySelector('.edu article')?.insertAdjacentHTML('beforeend', '<p class="edu-extra">Beyond coursework: student practice work, research competitions, public speaking, and field-based teamwork.</p>');
document.querySelector('.about .twocol').innerHTML = `<div><h2>Curious by nature,<br><em>careful by choice.</em></h2><p class="lead">I am Yuna Cheng, an International Economics and Trade student at Hunan University. I like the moment when a vague question starts becoming something you can work with.</p><p>I have learned through research, customer-facing work, campus projects, and all the small experiments I start because I want to know how something works. I listen closely, pick things up quickly, and care about finishing with a result people can actually use.</p><p class="about-line"><b>Currently looking for:</b> opportunities where research, communication, data, and a little creative energy can meet.</p><div class="tags"><span>curious</span><span>data-minded</span><span>photography</span><span>fresh ideas</span><span>good listener</span><span>always learning</span><span>sports girl</span></div></div><div class="photos"><figure><img src="assets/profile.jpg" alt="Yuna's portrait"></figure></div>`;
const about = document.querySelector('.about');
about.insertAdjacentHTML('beforeend', '<a class="resume-about" href="assets/Cheng-Yuna-Resume.pdf" download>RESUME / PDF <span>&#8599;</span></a>');
const edu = document.querySelector('.edu');
edu.querySelector('.edu-notebook span').textContent = 'A PAGE IN PROGRESS';
edu.querySelector('.edu-notebook b').textContent = 'NOW';
edu.querySelector('.edu-notebook p').innerHTML = 'Read closely<br>Ask better questions<br>Test the details<br>Make the complex clear';
edu.insertAdjacentHTML('beforeend', `<div class="edu-extension"><div><span class="micro">COURSE THREADS / 2024 - NOW</span><h3>The things behind the results.</h3><p>Courses that keep showing up in the way I research, write, and make decisions.</p><div class="course-tags"><span>International Trade</span><span>Econometrics</span><span>Statistics</span><span>Microeconomics</span><span>Macroeconomics</span><span>Python Data Analysis</span><span>Business English</span><span>Marketing</span></div></div><div class="edu-actions"><button class="edu-detail-toggle" type="button">OPEN LEARNING NOTES <span>+</span></button><div class="edu-detail"><p><b>Current thread:</b> connecting economic ideas with evidence that can be explained clearly.</p><p><b>Working habit:</b> collect the question, check the source, then make the conclusion easier to read.</p></div></div></div>`);
document.querySelector('.edu-detail-toggle').addEventListener('click', (event) => {
  const open = event.currentTarget.parentElement.classList.toggle('is-open');
  event.currentTarget.querySelector('span').textContent = open ? '−' : '+';
});
const home = document.querySelector('.home');
home.insertAdjacentHTML('beforeend', `<button class="home-signal" type="button" aria-label="Continue to the about page">SEE WHAT IS MOVING <span>&#8595;</span></button>`);
document.querySelector('.about .tags').insertAdjacentHTML('afterend', `<div class="tag-insight" aria-live="polite"><span class="micro">A SMALL FIELD NOTE</span><p>${siteContent.thought}</p></div>`);
document.querySelector('.work').innerHTML = `<p class="micro no">03 / WORK &amp; PROJECTS</p><div class="worktop"><h2>A timeline of<br><em>trying things.</em></h2><p>Scroll through the moments that taught me how to make ideas clearer, kinder, and more useful.</p></div><div class="timeline"><article><time>2026.05</time><div><p class="micro">NATIONAL INNOVATION PROJECT</p><h3>From a rough question to a funded project.</h3><p><b>Why I joined:</b> I wanted to understand how a promising idea becomes a workable research plan.</p><p><b>My part:</b> helped shape the topic, build the framework, and write the proposal.</p><p><b>What came out:</b> a national undergraduate innovation project was approved.</p><strong>Research design / structured writing / initiative</strong></div></article><article><time>2026.03</time><div><p class="micro">MARKET SURVEY &amp; ANALYSIS</p><h3>Learning to hear the signal inside the noise.</h3><p><b>Why I joined:</b> real decisions begin with better questions and better evidence.</p><p><b>My part:</b> survey design, data processing, and report writing.</p><p><b>What came out:</b> school-level third prize and a much sharper sense of how data tells a story.</p><strong>Data handling / collaboration / analysis</strong></div></article><article><time>2025.11</time><div><p class="micro">QINGYING PRACTICE PROGRAM</p><h3>Fieldwork is where plans meet people.</h3><p><b>My part:</b> supported field research, material collection, and the final result summary.</p><p><b>What came out:</b> an Excellent Practice Team recognition.</p><strong>Listening / coordination / grounded thinking</strong></div></article><article><time>2025.07</time><div><p class="micro">CHINA CONSTRUCTION BANK</p><h3>Trust is built from the details.</h3><p><b>My part:</b> welcomed customers, explained everyday banking steps, and assisted with document checks.</p><p><b>What came out:</b> zero material-review errors in a fast-moving branch.</p><strong>Service / accuracy / calm communication</strong></div></article><article><time>2025.02</time><div><p class="micro">CHALLENGE CUP</p><h3>86 counties, one research question.</h3><p><b>My part:</b> cleaned and organized 2018-2024 panel data for digital rural development research.</p><p><b>What came out:</b> school-level gold award.</p><strong>Python-assisted analysis / persistence</strong></div></article></div><button class="arrow next" data-p="life">&#8594;</button>`;
const workTurn = document.querySelector('.work .next');
workTurn.className = 'work-turn next';
workTurn.innerHTML = 'END OF TIMELINE <span>CONTINUE TO LIFE &darr;</span>';
const workDetails = [
  'The useful part was learning how to move from a broad interest to a question with a clear method and a finish line.',
  'I handled the less glamorous middle: making the questionnaire usable, organizing responses, and turning tables into a readable conclusion.',
  'The fieldwork taught me to leave room for what people actually say. Good notes are often more valuable than a polished first assumption.',
  'Branch work sharpened my attention to sequence, tone, and small checks. A calm explanation can change the whole experience of a task.',
  'The project gave me practice working with panel data and the patience to check what the numbers are really measuring before writing the story.'
];
document.querySelectorAll('.timeline article').forEach((article, index) => {
  article.insertAdjacentHTML('beforeend', `<button class="case-toggle" type="button">OPEN CASE NOTE <span>+</span></button><div class="case-note"><p>${workDetails[index]}</p></div>`);
  const toggle = article.querySelector('.case-toggle');
  toggle.addEventListener('click', () => {
    const open = article.classList.toggle('is-expanded');
    toggle.querySelector('span').textContent = open ? '−' : '+';
    toggle.firstChild.textContent = open ? 'CLOSE CASE NOTE ' : 'OPEN CASE NOTE ';
  });
});
document.querySelector('.work').insertAdjacentHTML('beforeend', '<div class="timeline-progress"><span class="micro">TIMELINE</span><b>01</b><i>/ 05</i></div>');
let lastIndex = 0;
const go = (name) => {
  const nextIndex = order.indexOf(name);
  document.documentElement.style.setProperty('--page-direction', nextIndex >= lastIndex ? '1' : '-1');
  lastIndex = nextIndex;
  pages.forEach((page) => page.classList.toggle('current', page.dataset.p === name));
  document.querySelectorAll('.go').forEach((button) => button.classList.toggle('active', button.dataset.p === name));
};
const move = (step) => go(order[(order.indexOf(document.querySelector('.page.current').dataset.p) + step + order.length) % order.length]);
document.addEventListener('keydown', (event) => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); });
let touchStart = 0;
document.addEventListener('pointerdown', (event) => { touchStart = event.clientX; });
document.addEventListener('pointerup', (event) => { if (Math.abs(event.clientX - touchStart) > 70) move(event.clientX > touchStart ? -1 : 1); });
document.addEventListener('click', (event) => {
  if (event.target.closest('button, a, input, textarea, label, nav')) return;
  if (event.clientX < 90) move(-1);
  if (event.clientX > window.innerWidth - 90) move(1);
});

document.querySelectorAll('.go,.next').forEach((button) => {
  button.onclick = () => go(button.dataset.p);
});

document.querySelectorAll('.cards article').forEach((card) => {
  card.onclick = () => {
    document.querySelectorAll('.cards article').forEach((item) => item.classList.remove('on'));
    card.classList.add('on');
  };
});

const strip = document.querySelector('.film');
strip.innerHTML = '';
const photoLabels = siteContent.photoLabels;
for (let index = 1; index <= 30; index += 1) {
  const id = String(index).padStart(2, '0');
  strip.insertAdjacentHTML('beforeend', `<button><img src="assets/wall-${id}.jpg" alt="${photoLabels[index - 1]}" loading="eager" decoding="async"><i>${photoLabels[index - 1]}</i></button>`);
}
[...strip.children].forEach((photo) => strip.append(photo.cloneNode(true)));
document.querySelector('.life .ticker').textContent = photoLabels.join('  ·  ');
document.querySelectorAll('img').forEach((image) => image.addEventListener('error', () => {
  if (image.dataset.fallbackApplied) return;
  image.dataset.fallbackApplied = 'true';
  image.src = 'assets/hero.jpg';
  image.closest('figure, button, .heroimg, .photos')?.classList.add('image-fallback');
}));
const box = document.querySelector('.light');
document.querySelectorAll('.film button').forEach((photo) => {
  photo.onclick = () => {
    box.querySelector('img').src = photo.querySelector('img').src;
    box.querySelector('p').textContent = photo.querySelector('i').textContent;
    box.classList.add('open');
  };
});
box.onclick = (event) => { if (event.target === box || event.target.tagName === 'BUTTON') box.classList.remove('open'); };

const end = document.querySelector('.end');
end.innerHTML = `
  <p class="micro no">05 / MAKE FRIENDS</p>
  <div class="contact-card"><p class="micro">CONTACT CARD / YUNA CHENG</p><h3>Let's keep in touch.</h3><p><b>Phone</b><br>184 3570 XXXX</p><p><b>Email</b><br>3048387427@qq.com</p><p><b>Based in</b><br>Hunan University</p></div>
  <div class="friend-wrap">
    <div class="friend-head"><h2>Make Friends</h2><p>Leave a small note. The channel remembers it here.</p></div>
    <form class="friend-form"><label>Your name<input name="name" maxlength="30" placeholder="What should I call you?"></label><fieldset><legend>Pick your vibe</legend><label><input type="radio" name="vibe" value="movie"> movie person</label><label><input type="radio" name="vibe" value="music"> music person</label><label><input type="radio" name="vibe" value="outside"> outside person</label></fieldset><label>Something else<textarea name="message" maxlength="240" placeholder="Write a message for Yuna..."></textarea></label><button type="submit">LEAVE A NOTE &nearr;</button></form>
    <div class="guestbook"><p class="micro">VISITOR NOTES / THIS BROWSER</p><div class="notes"></div></div>
  </div>
  <div class="end-footer">
    <button class="end-turn next" data-p="home">START OVER <span>&uarr;</span></button>
    <a class="resume-inline" href="assets/Cheng-Yuna-Resume.pdf" download="Cheng-Yuna-Resume.pdf" target="_blank" rel="noreferrer">DOWNLOAD MY RESUME &darr;</a>
  </div>`;
end.querySelector('.end-turn').innerHTML = 'RETURN TO BEGINNING <span>&#10227;</span>';

const vibeOptions = ['movie person', 'music person', 'outside person', 'book person', 'photo person', 'travel person', 'coffee person', 'food person', 'research person', 'design person', 'sports person', 'game person', 'nature person', 'art person', 'night owl'];
const vibeFieldset = end.querySelector('fieldset');
vibeFieldset.classList.add('vibe-options');
vibeFieldset.innerHTML = `<legend>Pick your vibe <small>choose a few</small></legend>${vibeOptions.map((vibe) => `<label><input type="checkbox" name="vibe" value="${vibe}"><span>${vibe}</span></label>`).join('')}`;

const pageTurns = [
  ['.about .next', 'about-turn arrow', '&#8594;'],
  ['.edu .next', 'edu-turn', 'TURN THE PAGE <span>&#8595;</span>'],
  ['.work .next', 'work-turn', 'END OF TIMELINE <span>CONTINUE TO LIFE &darr;</span>'],
  ['.life .next', 'life-turn', '<span>OPEN THE LAST PAGE</span> &#8594;']
];
pageTurns.forEach(([selector, className, label]) => {
  const button = document.querySelector(selector);
  button.className = `${className} next`;
  button.innerHTML = label;
});

const tagNotes = {
  curious: 'I follow a question until it becomes specific enough to test.',
  'data-minded': 'I like clean tables, but I care more about what they help people notice.',
  photography: 'The camera roll is where I practice looking before I explain.',
  'fresh ideas': siteContent.next,
  'good listener': 'Fieldwork and customer-facing work both taught me to leave room for the other person.',
  'always learning': 'Current thread: research methods, clearer writing, and better ways to present evidence.',
  'sports girl': 'Movement clears my head. A good run, a ride, or a day outside often brings the next idea back into focus.'
};
const tagInsight = document.querySelector('.tag-insight p');
document.querySelectorAll('.about .tags span').forEach((tag) => {
  const key = tag.textContent.trim();
  tag.tabIndex = 0;
  tag.setAttribute('role', 'button');
  const showNote = () => { tagInsight.textContent = tagNotes[key] || siteContent.thought; };
  tag.addEventListener('mouseenter', showNote);
  tag.addEventListener('focus', showNote);
  tag.addEventListener('click', showNote);
  tag.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); showNote(); } });
});
document.querySelector('.home-signal').addEventListener('click', () => go('about'));

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const setParallax = (event) => {
  if (reduceMotion.matches || window.innerWidth < 761) return;
  const x = (event.clientX / window.innerWidth - .5) * 2;
  const y = (event.clientY / window.innerHeight - .5) * 2;
  home.style.setProperty('--pointer-x', `${(x * 5).toFixed(2)}px`);
  home.style.setProperty('--pointer-y', `${(y * 5).toFixed(2)}px`);
};
home.addEventListener('pointermove', setParallax);
home.addEventListener('pointerleave', () => { home.style.setProperty('--pointer-x', '0px'); home.style.setProperty('--pointer-y', '0px'); });
const workPage = document.querySelector('.work');
workPage.addEventListener('scroll', () => {
  const max = workPage.scrollHeight - workPage.clientHeight;
  const ratio = max > 0 ? workPage.scrollTop / max : 0;
  workPage.style.setProperty('--timeline-progress', ratio.toFixed(3));
  const current = Math.min(5, Math.max(1, Math.ceil(ratio * 5) || 1));
  workPage.querySelector('.timeline-progress b').textContent = String(current).padStart(2, '0');
});
let logoClicks = 0;
document.querySelector('.logo').addEventListener('click', () => {
  logoClicks += 1;
  if (logoClicks === 5) document.body.classList.add('channel-found');
});

end.querySelector('.next').onclick = () => go('home');
const notes = end.querySelector('.notes');
const saved = JSON.parse(localStorage.getItem('yuna-notes') || '[]');
const formatVibes = (vibe) => Array.isArray(vibe) ? vibe.join(' · ') : (vibe || 'hello');
const renderNotes = () => { notes.innerHTML = saved.length ? saved.map((note) => `<article><b>${note.name}</b><span>${formatVibes(note.vibe)}</span><p>${note.message}</p></article>`).join('') : '<p class="empty">The guestbook is waiting for its first note.</p>'; };
renderNotes();
end.querySelector('form').onsubmit = (event) => {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const name = String(values.get('name') || '').trim();
  const message = String(values.get('message') || '').trim();
  if (!name || !message) return;
  saved.unshift({ name: name.replace(/[<>]/g, ''), message: message.replace(/[<>]/g, ''), vibe: values.getAll('vibe') });
  localStorage.setItem('yuna-notes', JSON.stringify(saved.slice(0, 8)));
  event.currentTarget.reset();
  renderNotes();
};
