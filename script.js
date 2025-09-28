const grid = document.getElementById('projectsGrid');
const filterChips = document.querySelectorAll('.chip');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.modal-close');
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(mode){
  if(mode === 'light'){ document.documentElement.style.setProperty('--bg','#f7f8fb'); document.documentElement.style.setProperty('--bg-alt','#eef1f7'); document.documentElement.style.setProperty('--text','#0b0c10'); document.documentElement.style.setProperty('--muted','#3d4655'); document.documentElement.style.setProperty('--card','#ffffff'); document.documentElement.style.setProperty('--border','#d9deea'); document.body.dataset.theme='light'; }
  else { document.documentElement.style = ''; document.body.dataset.theme='dark'; }
  localStorage.setItem('theme', mode);
}
const saved = localStorage.getItem('theme');
setTheme(saved || (prefersDark ? 'dark':'light'));
themeToggle.addEventListener('click', ()=> setTheme(document.body.dataset.theme==='dark' ? 'light':'dark'));

function renderProjects(category='all'){
  grid.innerHTML='';
  const toShow = PROJECTS.filter(p => category==='all' || p.category===category);
  toShow.forEach((p, idx)=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="card-body">
        <h4>${p.title}</h4>
        <p>${p.blurb}</p>
        <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="badges">${p.badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div>
        <div class="card-actions">
          <a class="btn" target="_blank" rel="noopener" href="${p.links.repo}">Repo ↗</a>
          <a class="btn" target="_blank" rel="noopener" href="${p.links.demo}">Demo ↗</a>
          <button class="btn primary" data-open="${idx}">Details</button>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
  // details
  grid.querySelectorAll('button[data-open]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const p = toShow[Number(e.currentTarget.dataset.open)];
      modalBody.innerHTML = `
        <h3 style="margin:6px 0 10px;">${p.title}</h3>
        <div>${p.details}</div>
        <div style="display:flex; gap:8px; margin-top: 10px;">
          <a class="btn" target="_blank" rel="noopener" href="${p.links.case}">Case study ↗</a>
          <a class="btn" target="_blank" rel="noopener" href="${p.links.repo}">Repository ↗</a>
          <a class="btn" target="_blank" rel="noopener" href="${p.links.demo}">Live demo ↗</a>
        </div>`;
      modal.setAttribute('aria-hidden', 'false');
    });
  });
}
renderProjects();

filterChips.forEach(chip => chip.addEventListener('click', ()=>{
  filterChips.forEach(c=>c.classList.remove('is-active'));
  chip.classList.add('is-active');
  renderProjects(chip.dataset.filter);
}));

closeBtn.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
modal.addEventListener('click', (e)=> { if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

// Writing list
const writingList = document.getElementById('writingList');
if (writingList && typeof WRITING !== 'undefined') {
  WRITING.forEach(item => {
    const li = document.createElement('div');
    li.className = 'list-item';
    li.innerHTML = `<a href="${item.url}" target="_blank" rel="noopener">${item.title}</a> · <span style="color:var(--muted)">${item.venue}</span>`;
    writingList.appendChild(li);
  });
}
