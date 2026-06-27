/* ============================================
   MAHALO NORONHA · SCRIPT AUTORAL
   ============================================ */

// ============================================
// DADOS
// ============================================
const passeiosData = [
  { id: 1, titulo: 'Baía dos Porcos & Sancho', descricao: 'As praias eleitas as mais belas do mundo. Areia branca, água cristalina e formações rochosas únicas.', duracao: 'Dia inteiro', grupo: 'Até 10', preco: 'R$ 450', categoria: 'praia', destaque: true },
  { id: 2, titulo: 'Mergulho em Atalaia', descricao: 'Piscinas naturais com vida marinha exuberante. Experiência obrigatória em Noronha.', duracao: '4h', grupo: 'Até 6', preco: 'R$ 380', categoria: 'mergulho', destaque: false },
  { id: 3, titulo: 'Golfinhos ao Pôr do Sol', descricao: 'Aviste os famosos golfinhos-rotadores em um dos pôr do sol mais bonitos do planeta.', duracao: '3h', grupo: 'Até 8', preco: 'R$ 320', categoria: 'aventura', destaque: false },
  { id: 4, titulo: 'Volta da Ilha de Barco', descricao: 'Circunavegue Noronha e conheça todas as praias, enseadas e formações rochosas.', duracao: 'Dia inteiro', grupo: 'Até 12', preco: 'R$ 680', categoria: 'barco', destaque: false },
  { id: 5, titulo: 'Mergulho Profundo', descricao: 'Para mergulhadores certificados. Naufrágios, paredões e uma visibilidade impressionante.', duracao: '5h', grupo: 'Até 4', preco: 'R$ 850', categoria: 'mergulho', destaque: false },
  { id: 6, titulo: 'Pôr do Sol no Boldró', descricao: 'Experiência autoral com drinks, petiscos locais e o melhor pôr do sol da ilha.', duracao: '3h', grupo: 'Até 15', preco: 'R$ 280', categoria: 'barco', destaque: false },
  { id: 7, titulo: 'Praia do Leão Selvagem', descricao: 'Uma das praias mais preservadas e selvagens. Ideal para fotos e contemplação.', duracao: 'Meio período', grupo: 'Até 8', preco: 'R$ 290', categoria: 'praia', destaque: false },
  { id: 8, titulo: 'Mergulho Noturno', descricao: 'Experiência exclusiva para aventureiros. Descubra a vida marinha que só desperta à noite.', duracao: '3h', grupo: 'Até 4', preco: 'R$ 650', categoria: 'mergulho', destaque: false },
  { id: 9, titulo: 'Trilha do Pico', descricao: 'Suba ao ponto mais alto de Noronha e tenha uma vista panorâmica de 360° da ilha.', duracao: '4h', grupo: 'Até 10', preco: 'R$ 350', categoria: 'aventura', destaque: false }
];

const searchItems = [
  { titulo: 'Baía dos Porcos & Sancho', desc: 'Praias mais belas do mundo', tipo: 'passeio', link: '#passeios' },
  { titulo: 'Mergulho em Atalaia', desc: 'Piscinas naturais cristalinas', tipo: 'passeio', link: '#passeios' },
  { titulo: 'Golfinhos ao Pôr do Sol', desc: 'Avistamento ao entardecer', tipo: 'passeio', link: '#passeios' },
  { titulo: 'Volta da Ilha de Barco', desc: 'Circunavegação completa', tipo: 'passeio', link: '#passeios' },
  { titulo: 'Mergulho Profundo', desc: 'Para mergulhadores certificados', tipo: 'passeio', link: '#passeios' },
  { titulo: 'Pôr do Sol no Boldró', desc: 'Experiência autoral com drinks', tipo: 'passeio', link: '#passeios' },
  { titulo: 'Mergulho Noturno', desc: 'Vida marinha noturna', tipo: 'passeio', link: '#passeios' },
  { titulo: 'Roteiros Personalizados', desc: 'Viagens sob medida', tipo: 'serviço', link: '#contato' },
  { titulo: 'Grupos e Empresas', desc: 'Eventos corporativos em Noronha', tipo: 'serviço', link: '#contato' },
  { titulo: 'Lua de Mel', desc: 'Pacotes românticos', tipo: 'serviço', link: '#contato' },
  { titulo: 'Sobre a Mahalo', desc: 'Nossa história', tipo: 'página', link: '#sobre' },
  { titulo: 'Contato', desc: 'Fale com nossa equipe', tipo: 'página', link: '#contato' },
  { titulo: 'Vozes de viajantes', desc: 'Depoimentos reais', tipo: 'página', link: '#depoimentos' }
];

const depoimentos = [
  { nome: 'Mariana Silva', cidade: 'São Paulo · SP', texto: 'A Mahalo transformou nossa viagem em algo mágico. Cada detalhe foi pensado com tanto carinho que nos sentimos em casa. O mergulho em Atalaia foi surreal — nunca vi água tão cristalina.' },
  { nome: 'Ricardo Almeida', cidade: 'Rio de Janeiro · RJ', texto: 'Profissionalismo e paixão pelo que fazem. Os guias conhecem cada recanto da ilha e nos levaram a lugares que jamais encontraríamos sozinhos. Voltaremos com certeza.' },
  { nome: 'Juliana Costa', cidade: 'Belo Horizonte · MG', texto: 'Melhor decisão que tomamos foi escolher a Mahalo. Atendimento impecável do início ao fim. A experiência dos golfinhos no pôr do sol foi emocionante — chorei de felicidade.' },
  { nome: 'Fernando Oliveira', cidade: 'Curitiba · PR', texto: 'Já viajei para muitos lugares, mas Noronha com a Mahalo foi diferente. Roteiro personalizado, guias incríveis e momentos que vou guardar para sempre. Simplesmente inesquecível.' }
];

const experiencias = [
  { num: '01', titulo: 'Amanhecer no Sancho', desc: 'A primeira luz do dia', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
  { num: '02', titulo: 'Mergulho em Atalaia', desc: 'Piscinas naturais', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800' },
  { num: '03', titulo: 'Golfinhos Rotadores', desc: 'Espetáculo ao entardecer', img: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800' },
  { num: '04', titulo: 'Baía dos Porcos', desc: 'Paraíso escondido', img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800' },
  { num: '05', titulo: 'Pôr do Sol no Boldró', desc: 'Cores do Atlântico', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&sat=-30' },
  { num: '06', titulo: 'Praia do Leão', desc: 'Beleza selvagem', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&hue=20' }
];

// ============================================
// PRELOADER
// ============================================
class Preloader {
  constructor() {
    this.el = document.getElementById('preloader');
    this.bar = document.getElementById('preloader-bar');
    this.progress = 0;
    this.init();
  }
  init() {
    const interval = setInterval(() => {
      this.progress += Math.random() * 12;
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        setTimeout(() => this.hide(), 600);
      }
      this.bar.style.width = `${Math.min(this.progress, 100)}%`;
    }, 120);
  }
  hide() {
    this.el.classList.add('hidden');
    document.body.style.overflow = 'auto';
    setTimeout(() => this.el.style.display = 'none', 1000);
  }
}

// ============================================
// CURSOR CUSTOMIZADO
// ============================================
class CustomCursor {
  constructor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    this.cursor = document.getElementById('cursor');
    this.pos = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.init();
  }
  init() {
    window.addEventListener('mousemove', e => {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
    });

    const hoverables = 'a, button, .passeio-card, .experiencia-item, .valor-card, input, textarea, select';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverables)) this.cursor.classList.add('hover');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverables)) this.cursor.classList.remove('hover');
    });

    this.animate();
  }
  animate() {
    this.pos.x += (this.target.x - this.pos.x) * 0.15;
    this.pos.y += (this.target.y - this.pos.y) * 0.15;
    this.cursor.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) translate(-50%, -50%)`;
    requestAnimationFrame(() => this.animate());
  }
}

// ============================================
// NAVBAR
// ============================================
class Navbar {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.menuToggle = document.getElementById('menu-toggle');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.init();
  }
  init() {
    window.addEventListener('scroll', () => {
      this.navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    this.menuToggle.addEventListener('click', () => {
      this.menuToggle.classList.toggle('active');
      this.mobileMenu.classList.toggle('active');
      document.body.style.overflow = this.mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        this.menuToggle.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  }
}

// ============================================
// COMPASS SEARCH (BÚSSOLA)
// ============================================
class CompassSearch {
  constructor() {
    this.btn = document.getElementById('compass-btn');
    this.modal = document.getElementById('compass-search');
    this.input = document.getElementById('compass-input');
    this.closeBtn = document.getElementById('compass-close');
    this.results = document.getElementById('compass-results');
    this.quickTags = document.querySelectorAll('.quick-tag');
    this.activeIndex = -1;
    this.filtered = [];
    this.init();
  }
  init() {
    this.btn.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    this.input.addEventListener('input', e => this.search(e.target.value));
    this.input.addEventListener('keydown', e => this.handleKey(e));

    this.quickTags.forEach(tag => {
      tag.addEventListener('click', () => {
        this.input.value = tag.dataset.query;
        this.search(tag.dataset.query);
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) this.close();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.modal.classList.contains('active') ? this.close() : this.open();
      }
    });

    this.modal.addEventListener('click', e => {
      if (e.target === this.modal) this.close();
    });
  }
  open() {
    this.modal.classList.add('active');
    setTimeout(() => this.input.focus(), 100);
    document.body.style.overflow = 'hidden';
  }
  close() {
    this.modal.classList.remove('active');
    this.input.value = '';
    this.results.innerHTML = '';
    this.activeIndex = -1;
    document.body.style.overflow = 'auto';
  }
  search(query) {
    if (!query.trim()) {
      this.results.innerHTML = '';
      this.filtered = [];
      return;
    }
    this.filtered = searchItems.filter(item =>
      item.titulo.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.tipo.toLowerCase().includes(query.toLowerCase())
    );
    this.activeIndex = -1;
    this.render();
  }
  render() {
    if (this.filtered.length === 0) {
      this.results.innerHTML = `<div class="compass-no-results">Nenhuma rota encontrada. Tente outro destino.</div>`;
      return;
    }
    this.results.innerHTML = this.filtered.map((item, i) => `
      <a href="${item.link}" class="compass-result" data-index="${i}" onclick="compassSearch.close()">
        <span class="compass-result-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="compass-result-body">
          <div class="compass-result-title">${item.titulo}</div>
          <div class="compass-result-desc">${item.desc} · ${item.tipo}</div>
        </div>
        <svg class="compass-result-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    `).join('');
  }
  handleKey(e) {
    if (!this.filtered.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.activeIndex = (this.activeIndex + 1) % this.filtered.length;
      this.updateActive();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.activeIndex = (this.activeIndex - 1 + this.filtered.length) % this.filtered.length;
      this.updateActive();
    } else if (e.key === 'Enter' && this.activeIndex >= 0) {
      e.preventDefault();
      const item = this.filtered[this.activeIndex];
      window.location.href = item.link;
      this.close();
    }
  }
  updateActive() {
    document.querySelectorAll('.compass-result').forEach((el, i) => {
      el.classList.toggle('active', i === this.activeIndex);
    });
  }
}

// ============================================
// PASSEIOS
// ============================================
class PasseiosManager {
  constructor() {
    this.grid = document.getElementById('passeios-grid');
    this.filtros = document.querySelectorAll('.filtro-btn');
    this.init();
  }
  init() {
    this.render(passeiosData);
    this.filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filtros.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filtro;
        this.render(f === 'todos' ? passeiosData : passeiosData.filter(p => p.categoria === f));
      });
    });
  }
  render(passeios) {
    this.grid.innerHTML = passeios.map((p, i) => `
      <article class="passeio-card ${p.destaque ? 'destaque' : ''}">
        <div class="passeio-card-header">
          <span class="passeio-num">${String(i + 1).padStart(2, '0')}</span>
          <span class="passeio-tag">${p.categoria}</span>
        </div>
        <h3 class="passeio-title">${p.titulo}</h3>
        <p class="passeio-desc">${p.descricao}</p>
        <div class="passeio-meta">
          <div class="passeio-meta-item">
            <span class="passeio-meta-label">Duração</span>
            <span>${p.duracao}</span>
          </div>
          <div class="passeio-meta-item">
            <span class="passeio-meta-label">Grupo</span>
            <span>${p.grupo}</span>
          </div>
        </div>
        <div class="passeio-footer">
          <div class="passeio-price">
            <span class="passeio-price-label">a partir de</span>
            <span class="passeio-price-value">${p.preco}</span>
          </div>
          <a href="https://wa.me/5581999999999?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre: ' + p.titulo)}" 
             target="_blank" class="passeio-reserve" aria-label="Reservar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </article>
    `).join('');
  }
}

// ============================================
// EXPERIÊNCIAS MARQUEE
// ============================================
class ExperienciasMarquee {
  constructor() {
    this.track = document.querySelector('.experiencias-track');
    this.init();
  }
  init() {
    const items = [...experiencias, ...experiencias];
    this.track.innerHTML = items.map(exp => `
      <div class="experiencia-item">
        <img src="${exp.img}" alt="${exp.titulo}" loading="lazy">
        <div class="experiencia-overlay"></div>
        <div class="experiencia-content">
          <span class="experiencia-num">${exp.num}</span>
          <h3>${exp.titulo}</h3>
          <p>${exp.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

// ============================================
// DEPOIMENTOS
// ============================================
class DepoimentosCarousel {
  constructor() {
    this.current = 0;
    this.textoEl = document.getElementById('depoimento-texto');
    this.nomeEl = document.getElementById('depoimento-nome');
    this.cidadeEl = document.getElementById('depoimento-cidade');
    this.currentEl = document.getElementById('depoimento-current');
    this.totalEl = document.getElementById('depoimento-total');
    this.progressBar = document.getElementById('depoimento-progress-bar');
    this.body = document.querySelector('.depoimento-body');
    this.totalEl.textContent = String(depoimentos.length).padStart(2, '0');
    this.init();
  }
  init() {
    document.getElementById('btn-prev').addEventListener('click', () => this.prev());
    document.getElementById('btn-next').addEventListener('click', () => this.next());
    this.update();
    this.startProgress();
  }
  update() {
    const d = depoimentos[this.current];
    this.body.style.opacity = '0';
    this.body.style.transform = 'translateY(20px)';
    setTimeout(() => {
      this.textoEl.textContent = d.texto;
      this.nomeEl.textContent = d.nome;
      this.cidadeEl.textContent = d.cidade;
      this.currentEl.textContent = String(this.current + 1).padStart(2, '0');
      this.body.style.opacity = '1';
      this.body.style.transform = 'translateY(0)';
    }, 300);
    this.startProgress();
  }
  next() {
    this.current = (this.current + 1) % depoimentos.length;
    this.update();
  }
  prev() {
    this.current = (this.current - 1 + depoimentos.length) % depoimentos.length;
    this.update();
  }
  startProgress() {
    this.progressBar.style.transition = 'none';
    this.progressBar.style.width = '0%';
    setTimeout(() => {
      this.progressBar.style.transition = 'width 6s linear';
      this.progressBar.style.width = '100%';
    }, 50);
    clearInterval(this.interval);
    this.interval = setInterval(() => this.next(), 6000);
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
class ScrollAnimations {
  constructor() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.section-header, .sobre-text, .valor-card, .info-block, .contato-form').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }
}

// ============================================
// SMOOTH SCROLL
// ============================================
class SmoothScroll {
  constructor() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
  }
}

// ============================================
// FORMULÁRIO
// ============================================
class ContactForm {
  constructor() {
    this.form = document.getElementById('contato-form');
    this.form.addEventListener('submit', e => this.submit(e));
  }
  submit(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const interesse = document.getElementById('interesse').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `*Novo contato — Mahalo Noronha*%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*E-mail:* ${email}%0A` +
      `*Telefone:* ${telefone}%0A` +
      `*Interesse:* ${interesse || 'Não informado'}%0A%0A` +
      `*Mensagem:*%0A${mensagem}`;

    window.open(`https://wa.me/5581999999999?text=${texto}`, '_blank');

    const btn = this.form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '<span>✓ Mensagem enviada</span>';
    btn.style.background = 'var(--ocean)';
    btn.style.color = 'var(--paper)';
    btn.style.borderColor = 'var(--ocean)';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
      this.form.reset();
    }, 3000);
  }
}

// ============================================
// CENA 3D — NORONHA (ilha + golfinhos + tartaruga + barco)
// ============================================
class NoronhaScene {
  constructor() {
    this.container = document.getElementById('three-canvas');
    this.mouse = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    if (typeof THREE === 'undefined') return;
    this.init();
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x0a1929, 8, 25);

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 3, 10);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x0a1929, 1);
    this.container.appendChild(this.renderer.domElement);

    this.createOcean();
    this.createIsland();
    this.createPalms();
    this.createDolphins();
    this.createTurtle();
    this.createBoat();
    this.createBirds();
    this.createLights();

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('mousemove', e => {
      this.target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      this.target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    this.animate();
  }

  createOcean() {
    const geo = new THREE.PlaneGeometry(60, 60, 80, 80);
    const mat = new THREE.MeshPhongMaterial({
      color: 0x1e5f7a,
      emissive: 0x0c3547,
      shininess: 80,
      specular: 0x4a90a4,
      flatShading: true
    });
    this.ocean = new THREE.Mesh(geo, mat);
    this.ocean.rotation.x = -Math.PI / 2;
    this.ocean.position.y = -0.5;
    this.scene.add(this.ocean);
    this.oceanGeo = geo;
  }

  createIsland() {
    this.island = new THREE.Group();

    // Base rochosa (formato irregular de ilha)
    const baseGeo = new THREE.ConeGeometry(2.2, 1.2, 12, 2);
    const positions = baseGeo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      if (y < 0.3) {
        positions.setX(i, x + (Math.random() - 0.5) * 0.4);
        positions.setZ(i, z + (Math.random() - 0.5) * 0.4);
      }
    }
    baseGeo.computeVertexNormals();
    
    const rockMat = new THREE.MeshPhongMaterial({
      color: 0x8b6f47,
      flatShading: true,
      shininess: 10
    });
    const rock = new THREE.Mesh(baseGeo, rockMat);
    rock.position.y = 0;
    this.island.add(rock);

    // Praia (anel ao redor)
    const beachGeo = new THREE.TorusGeometry(2.3, 0.25, 8, 24);
    const beachMat = new THREE.MeshPhongMaterial({
      color: 0xe8d5a0,
      flatShading: true
    });
    const beach = new THREE.Mesh(beachGeo, beachMat);
    beach.rotation.x = Math.PI / 2;
    beach.position.y = -0.4;
    this.island.add(beach);

    // Vegetação (árvores estilizadas)
    const treeMat = new THREE.MeshPhongMaterial({ color: 0x2d6a4f, flatShading: true });
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const r = 0.8 + Math.random() * 0.8;
      const treeGeo = new THREE.ConeGeometry(0.25 + Math.random() * 0.15, 0.6 + Math.random() * 0.4, 6);
      const tree = new THREE.Mesh(treeGeo, treeMat);
      tree.position.set(Math.cos(angle) * r, 0.5 + Math.random() * 0.3, Math.sin(angle) * r);
      this.island.add(tree);
    }

    // Pico central (Morro do Pico)
    const peakGeo = new THREE.ConeGeometry(0.5, 1.2, 8);
    const peak = new THREE.Mesh(peakGeo, rockMat);
    peak.position.y = 1;
    this.island.add(peak);

    this.island.position.set(0, 0, 0);
    this.scene.add(this.island);
  }

  createPalms() {
    this.palms = [];
    const trunkMat = new THREE.MeshPhongMaterial({ color: 0x6b4423 });
    const leafMat = new THREE.MeshPhongMaterial({ color: 0x2d6a4f, side: THREE.DoubleSide });

    for (let i = 0; i < 4; i++) {
      const palm = new THREE.Group();
      const angle = (i / 4) * Math.PI * 2 + 0.3;
      const r = 1.8;

      // Tronco curvo
      const trunkGeo = new THREE.CylinderGeometry(0.06, 0.1, 1.2, 6);
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 0.6;
      trunk.rotation.z = (Math.random() - 0.5) * 0.3;
      palm.add(trunk);

      // Folhas
      for (let j = 0; j < 6; j++) {
        const leafGeo = new THREE.ConeGeometry(0.15, 0.6, 4);
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        const a = (j / 6) * Math.PI * 2;
        leaf.position.set(Math.cos(a) * 0.2, 1.2, Math.sin(a) * 0.2);
        leaf.rotation.z = Math.cos(a) * 0.8;
        leaf.rotation.x = Math.sin(a) * 0.8;
        palm.add(leaf);
      }

      palm.position.set(Math.cos(angle) * r, 0.2, Math.sin(angle) * r);
      this.scene.add(palm);
      this.palms.push(palm);
    }
  }

  createDolphins() {
    this.dolphins = [];
    const dolphinMat = new THREE.MeshPhongMaterial({
      color: 0x4a5568,
      shininess: 60,
      flatShading: true
    });

    for (let i = 0; i < 3; i++) {
      const dolphin = new THREE.Group();

      // Corpo
      const bodyGeo = new THREE.SphereGeometry(0.25, 8, 6);
      bodyGeo.scale(1.8, 0.7, 0.7);
      const body = new THREE.Mesh(bodyGeo, dolphinMat);
      dolphin.add(body);

      // Bico
      const snoutGeo = new THREE.ConeGeometry(0.12, 0.3, 6);
      const snout = new THREE.Mesh(snoutGeo, dolphinMat);
      snout.rotation.z = -Math.PI / 2;
      snout.position.x = 0.45;
      dolphin.add(snout);

      // Barbatana dorsal
      const finGeo = new THREE.ConeGeometry(0.1, 0.25, 4);
      const fin = new THREE.Mesh(finGeo, dolphinMat);
      fin.position.y = 0.2;
      dolphin.add(fin);

      // Cauda
      const tailGeo = new THREE.BoxGeometry(0.05, 0.15, 0.4);
      const tail = new THREE.Mesh(tailGeo, dolphinMat);
      tail.position.x = -0.45;
      tail.rotation.z = Math.PI / 4;
      dolphin.add(tail);

      dolphin.scale.set(0.8, 0.8, 0.8);
      dolphin.userData = {
        angle: (i / 3) * Math.PI * 2,
        radius: 4 + i * 0.5,
        speed: 0.3 + Math.random() * 0.2,
        jumpOffset: Math.random() * Math.PI * 2
      };

      this.scene.add(dolphin);
      this.dolphins.push(dolphin);
    }
  }

  createTurtle() {
    const turtle = new THREE.Group();
    const shellMat = new THREE.MeshPhongMaterial({ color: 0x5d4e37, flatShading: true });
    const skinMat = new THREE.MeshPhongMaterial({ color: 0x6b7a4f, flatShading: true });

    // Casco
    const shellGeo = new THREE.SphereGeometry(0.3, 8, 6);
    shellGeo.scale(1.3, 0.6, 1);
    const shell = new THREE.Mesh(shellGeo, shellMat);
    turtle.add(shell);

    // Cabeça
    const headGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.set(0.35, 0, 0);
    turtle.add(head);

    // Patas
    const flipperGeo = new THREE.BoxGeometry(0.2, 0.05, 0.1);
    [[-0.15, -0.1, 0.2], [-0.15, -0.1, -0.2], [0.15, -0.1, 0.2], [0.15, -0.1, -0.2]].forEach(pos => {
      const flipper = new THREE.Mesh(flipperGeo, skinMat);
      flipper.position.set(...pos);
      turtle.add(flipper);
    });

    turtle.scale.set(0.9, 0.9, 0.9);
    turtle.position.set(-3, -0.2, 2);
    turtle.userData = { angle: 0 };
    this.turtle = turtle;
    this.scene.add(turtle);
  }

  createBoat() {
    const boat = new THREE.Group();
    const hullMat = new THREE.MeshPhongMaterial({ color: 0xf4efe6, flatShading: true });
    const sailMat = new THREE.MeshPhongMaterial({ 
      color: 0xd97757, 
      side: THREE.DoubleSide,
      flatShading: true 
    });

    // Casco
    const hullGeo = new THREE.BoxGeometry(1.2, 0.25, 0.5);
    const hull = new THREE.Mesh(hullGeo, hullMat);
    boat.add(hull);

    // Proa
    const bowGeo = new THREE.ConeGeometry(0.25, 0.4, 4);
    const bow = new THREE.Mesh(bowGeo, hullMat);
    bow.rotation.z = -Math.PI / 2;
    bow.rotation.y = Math.PI / 4;
    bow.position.x = 0.7;
    boat.add(bow);

    // Mast
    const mastGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.2, 6);
    const mastMat = new THREE.MeshPhongMaterial({ color: 0x6b4423 });
    const mast = new THREE.Mesh(mastGeo, mastMat);
    mast.position.y = 0.6;
    boat.add(mast);

    // Vela
    const sailGeo = new THREE.PlaneGeometry(0.6, 0.9);
    const sail = new THREE.Mesh(sailGeo, sailMat);
    sail.position.set(0.15, 0.6, 0);
    sail.rotation.y = 0.3;
    this.sail = sail;
    boat.add(sail);

    boat.position.set(3.5, -0.2, -2);
    boat.rotation.y = -0.5;
    this.boat = boat;
    this.scene.add(boat);
  }

  createBirds() {
    this.birds = [];
    const birdMat = new THREE.MeshBasicMaterial({ color: 0xf4efe6 });

    for (let i = 0; i < 5; i++) {
      const bird = new THREE.Group();
      const wingGeo = new THREE.PlaneGeometry(0.3, 0.05);
      
      const wing1 = new THREE.Mesh(wingGeo, birdMat);
      wing1.position.x = -0.15;
      bird.add(wing1);
      
      const wing2 = new THREE.Mesh(wingGeo, birdMat);
      wing2.position.x = 0.15;
      bird.add(wing2);

      bird.userData = {
        angle: Math.random() * Math.PI * 2,
        radius: 5 + Math.random() * 2,
        height: 2 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.2,
        wing1, wing2
      };

      this.scene.add(bird);
      this.birds.push(bird);
    }
  }

  createLights() {
    const ambient = new THREE.AmbientLight(0x8ab4c4, 0.6);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffd4a0, 1.2);
    sun.position.set(5, 8, 5);
    this.scene.add(sun);

    const coral = new THREE.PointLight(0xd97757, 0.8, 15);
    coral.position.set(-5, 2, 3);
    this.scene.add(coral);

    const ocean = new THREE.PointLight(0x1e5f7a, 0.5, 15);
    ocean.position.set(3, -2, -3);
    this.scene.add(ocean);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const t = Date.now() * 0.001;

    // Suaviza movimento do mouse
    this.mouse.x += (this.target.x - this.mouse.x) * 0.03;
    this.mouse.y += (this.target.y - this.mouse.y) * 0.03;

    // Ondas do oceano
    const positions = this.oceanGeo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const wave = Math.sin(x * 0.5 + t) * 0.15 + Math.cos(y * 0.5 + t * 0.8) * 0.1;
      positions.setZ(i, wave);
    }
    positions.needsUpdate = true;
    this.oceanGeo.computeVertexNormals();

    // Ilha flutua suavemente
    if (this.island) {
      this.island.position.y = Math.sin(t * 0.5) * 0.08;
      this.island.rotation.y = Math.sin(t * 0.2) * 0.05;
    }

    // Palmeiras balançam
    this.palms.forEach((p, i) => {
      p.rotation.z = Math.sin(t * 0.8 + i) * 0.08;
      p.rotation.x = Math.cos(t * 0.6 + i) * 0.05;
    });

    // Golfinhos pulando em círculos
    this.dolphins.forEach(d => {
      d.userData.angle += 0.008 * d.userData.speed;
      const a = d.userData.angle;
      const r = d.userData.radius;
      const jumpPhase = (Math.sin(t * d.userData.speed * 2 + d.userData.jumpOffset) + 1) / 2;
      const jump = jumpPhase > 0.7 ? Math.sin((jumpPhase - 0.7) / 0.3 * Math.PI) * 1.2 : 0;
      
      d.position.x = Math.cos(a) * r;
      d.position.z = Math.sin(a) * r;
      d.position.y = -0.3 + jump;
      d.rotation.y = -a + Math.PI / 2;
      d.rotation.x = jump > 0 ? -0.5 : 0.3;
    });

    // Tartaruga nadando
    if (this.turtle) {
      this.turtle.userData.angle += 0.003;
      const a = this.turtle.userData.angle;
      this.turtle.position.x = Math.cos(a) * 3.5;
      this.turtle.position.z = Math.sin(a) * 3.5;
      this.turtle.position.y = -0.2 + Math.sin(t * 2) * 0.05;
      this.turtle.rotation.y = -a + Math.PI / 2;
    }

    // Barco balançando
    if (this.boat) {
      this.boat.position.y = -0.2 + Math.sin(t * 1.2) * 0.1;
      this.boat.rotation.z = Math.sin(t * 1.2) * 0.08;
      this.boat.rotation.x = Math.cos(t * 0.8) * 0.05;
    }

    // Vela do barco
    if (this.sail) {
      this.sail.rotation.y = 0.3 + Math.sin(t) * 0.15;
    }

    // Pássaros voando
    this.birds.forEach(b => {
      b.userData.angle += 0.005 * b.userData.speed;
      const a = b.userData.angle;
      b.position.x = Math.cos(a) * b.userData.radius;
      b.position.z = Math.sin(a) * b.userData.radius;
      b.position.y = b.userData.height + Math.sin(t * 2 + a) * 0.3;
      b.rotation.y = -a + Math.PI / 2;
      
      // Batida de asas
      const wing = Math.sin(t * 8 + a) * 0.5;
      b.userData.wing1.rotation.z = wing;
      b.userData.wing2.rotation.z = -wing;
    });

    // Câmera segue o mouse suavemente
    this.camera.position.x = this.mouse.x * 1.5;
    this.camera.position.y = 3 - this.mouse.y * 0.8;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }
}

// ============================================
// INIT
// ============================================
let compassSearch;

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  new Preloader();
  new CustomCursor();
  new Navbar();
  compassSearch = new CompassSearch();
  new PasseiosManager();
  new ExperienciasMarquee();
  new DepoimentosCarousel();
  new ScrollAnimations();
  new SmoothScroll();
  new ContactForm();
  new NoronhaScene();

  console.log('%c🌊 MAHALO NORONHA', 'font-size: 24px; font-weight: bold; color: #d97757; font-family: serif;');
  console.log('%c03°51\'S · 32°25\'W · Atlântico Sul', 'color: #1e5f7a; font-family: monospace;');
});