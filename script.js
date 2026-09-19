(function () {
  const d = SITE_DATA;

  /* ---------------- Sidebar ---------------- */
  document.getElementById('side-name').textContent = d.profile.name;
  document.getElementById('side-role').textContent = d.profile.role;
  document.getElementById('side-location').textContent = d.profile.location;

  const avatar = document.getElementById('avatar');
  if (d.profile.photo) {
    avatar.innerHTML = `<img src="${d.profile.photo}" alt="${d.profile.name}">`;
  } else {
    avatar.textContent = d.profile.initials;
  }

  const resumeBtn = document.getElementById('resume-btn');
  resumeBtn.href = d.profile.resumeFile;

  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.12v6.3h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.69h-4v-12z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.33 1.17 1.17 0 000 2.33z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.2-.41-4.74a2.78 2.78 0 00-1.96-1.96C18.09 5 12 5 12 5s-6.09 0-7.63.3a2.78 2.78 0 00-1.96 1.96C2 8.8 2 12 2 12s0 3.2.41 4.74a2.78 2.78 0 001.96 1.96C5.91 19 12 19 12 19s6.09 0 7.63-.3a2.78 2.78 0 001.96-1.96C22 15.2 22 12 22 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg>'
  };

  const socials = document.getElementById('socials');
  Object.entries(d.profile.socials).forEach(([key, url]) => {
    if (!url || url === '#' || !ICONS[key]) return;
    const a = document.createElement('a');
    a.className = 'social-btn';
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.title = key;
    a.innerHTML = ICONS[key];
    socials.appendChild(a);
  });

  /* ---------------- About ---------------- */
  document.getElementById('about-summary').textContent = d.profile.summary;

  const skillsBody = document.getElementById('skills-body');
  Object.entries(d.skills).forEach(([group, items]) => {
    const div = document.createElement('div');
    div.className = 'skill-group';
    div.innerHTML = `<h3>${group}</h3><div class="tags">${items.map(s => `<span class="tag">${s}</span>`).join('')}</div>`;
    skillsBody.appendChild(div);
  });

  /* ---------------- Experience / Education ---------------- */
  const expBody = document.getElementById('experience-body');
  d.experience.forEach(e => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
      <div class="entry-head">
        <div><h3>${e.title}</h3><span class="entry-org">${e.org}</span></div>
        <span class="entry-period">${e.period}</span>
      </div>
      <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
    `;
    expBody.appendChild(div);
  });

  const eduBody = document.getElementById('education-body');
  d.education.forEach(e => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
      <div class="entry-head">
        <div><h3>${e.title}</h3><span class="entry-org">${e.org}</span></div>
        <span class="entry-period">${e.period}</span>
      </div>
    `;
    eduBody.appendChild(div);
  });

  /* ---------------- Certifications / Badges ---------------- */
  const certsBody = document.getElementById('certs-body');
  d.certifications.forEach(c => {
    const div = document.createElement('div');
    div.className = 'cert-card';
    div.innerHTML = `<h4>${c.title}</h4><div class="meta">${[c.issuer, c.year].filter(Boolean).join(' · ')}</div>`;
    certsBody.appendChild(div);
  });

  const badgesBody = document.getElementById('badges-body');
  d.badges.forEach(b => {
    const div = document.createElement('div');
    div.className = 'badge-card';
    div.innerHTML = `<h4>${b.title}</h4><div class="meta">${b.note}</div>`;
    badgesBody.appendChild(div);
  });

  /* ---------------- Projects ---------------- */
  const projBody = document.getElementById('projects-body');
  d.projects.forEach(p => {
    const div = document.createElement('div');
    div.className = 'proj-card';
    div.innerHTML = `
      <div class="proj-head">
        <h3>${p.title}</h3>
        <span class="status">${p.status}</span>
      </div>
      <div class="tags" style="margin:8px 0;">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
      <p class="proj-summary">${p.summary}</p>
      <ul>${p.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
      ${p.github && p.github !== '#' ? `<a class="proj-link" href="${p.github}" target="_blank" rel="noopener">View on GitHub</a>` : ''}
    `;
    projBody.appendChild(div);
  });

  /* ---------------- Blog ---------------- */
  const blogBody = document.getElementById('blog-body');
  [...d.posts].reverse().forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <h3>${post.title}</h3>
      <div class="meta">${post.date}</div>
      <div class="body">${post.body}</div>
      <div class="tags">${post.tags.map(t => `<span class="tag">#${t}</span>`).join('')}</div>
    `;
    blogBody.appendChild(div);
  });

  /* ---------------- Footer ---------------- */
  document.getElementById('footer-text').textContent =
    `© ${new Date().getFullYear()} ${d.profile.name} — ${d.profile.location}`;

  /* ---------------- Tab switching ---------------- */
  const navButtons = document.querySelectorAll('#topnav button');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-' + btn.dataset.view).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });

  /* ---------------- Theme toggle ---------------- */
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggleBtn.textContent = 'Light';
    } else {
      root.removeAttribute('data-theme');
      toggleBtn.textContent = 'Dark';
    }
  }
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  toggleBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
})();
