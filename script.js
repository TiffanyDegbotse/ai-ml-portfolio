// ===== Footer year =====
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===== Theme Toggle =====
const themeToggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(mode) {
  if (mode === 'light') {
    document.body.classList.add("light-theme");
    document.body.dataset.theme = 'light';
  } else {
    document.body.classList.remove("light-theme");
    document.body.dataset.theme = 'dark';
  }
  localStorage.setItem('theme', mode);
}

// Load saved theme or default
const saved = localStorage.getItem('theme');
setTheme(saved || (prefersDark ? 'dark' : 'light'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.body.dataset.theme;
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ===== Writing list =====
const writingList = document.getElementById('writingList');
if (writingList && typeof WRITING !== 'undefined') {
  WRITING.forEach(item => {
    const li = document.createElement('div');
    li.className = 'list-item';
    li.innerHTML = `
      <a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>
      · <span style="color:var(--muted)">${item.venue}</span>`;
    writingList.appendChild(li);
  });
}

