import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baby Talks Santo Anjo · Seminário Imersivo para Casais Grávidos" },
      { name: "description", content: "Seminário imersivo para casais grávidos em Curitiba. 5 palestras, 5 horas, especialistas reais. 15 de agosto · Teatro Santo Anjo." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=DM+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const HTML = `<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=DM+Sans:wght@400;500;600;700&display=swap');

  :root {
    --azul: #1E2748;          /* azul mais suave, menos pesado */
    --azul-medio: #2A3464;
    --azul-claro: #3F4A82;
    --magenta: #D58CBA;       /* rose mais dusty, alinhado com paleta suave da logo */
    --magenta-bright: #E3A8CC; /* accent leve */
    --magenta-escuro: #B06E96;
    --verde: #2EA66C;         /* CTA verde */
    --verde-bright: #3FBE7E;
    --lilas: #B0BCE5;
    --lavanda: #EAEDF5;
    --rosa: #F6E2EE;
    --branco: #FAFAF7;
    --texto-dark: rgba(255, 255, 255, 0.92);
    --texto-suave-dark: rgba(255, 255, 255, 0.68);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--azul);
    color: white;
    line-height: 1.8;
    font-weight: 400;
    letter-spacing: 0.005em;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ============= ANIMAÇÃO PULSE BOTÕES ============= */
  @keyframes pulse-soft {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(46, 166, 108, 0.55);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 0 14px rgba(46, 166, 108, 0);
      transform: scale(1.025);
    }
  }

  .container { max-width: 1180px; margin: 0 auto; padding: 0 24px; position: relative; }

  /* ============= MARCA D'ÁGUA LATERAL ============= */
  .watermark {
    position: absolute;
    font-family: 'Anton', sans-serif;
    font-size: 220px;
    color: var(--magenta);
    opacity: 0.08;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.02em;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    z-index: 0;
  }

  /* ============= NAV ============= */
  nav {
    position: sticky;
    top: 0;
    background: rgba(15, 24, 56, 0.92);
    backdrop-filter: blur(12px);
    z-index: 100;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  .nav-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-logo {
    font-family: 'Anton', sans-serif;
    font-size: 24px;
    color: white;
    text-decoration: none;
    letter-spacing: 0.02em;
  }
  .nav-logo .accent { color: var(--magenta-bright); }
  .nav-cta {
    background: var(--magenta);
    color: white;
    padding: 12px 22px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: all 0.2s;
  }
  .nav-cta:hover { background: var(--magenta-bright); }

  /* ============= HERO ============= */
  .hero {
    background: var(--azul);
    padding: 60px 0 80px;
    position: relative;
    overflow: hidden;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  .hero-bg {
    position: absolute;
    top: 0; left: 35%; right: 0;
    height: 100%;
    background-image: url('/images/hero-casal.jpg');
    background-size: cover;
    background-position: center center;
  }
  .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, var(--azul) 0%, transparent 42%);
  }
  .hero-grain {
    position: absolute;
    top: 0; left: 0;
    width: 60%;
    height: 100%;
    background: radial-gradient(ellipse at top left, rgba(201, 95, 163, 0.18) 0%, transparent 60%);
    pointer-events: none;
  }
  .hero-content {
    position: relative;
    z-index: 3;
    max-width: 600px;
  }
  .hero-logo {
    font-family: 'Anton', sans-serif;
    font-size: 18px;
    color: white;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .hero-logo .big {
    display: block;
    font-size: 64px;
    line-height: 0.9;
    color: var(--magenta-bright);
    letter-spacing: 0;
    margin-top: 4px;
  }
  .hero-logo .sub {
    display: block;
    font-size: 13px;
    color: white;
    letter-spacing: 0.18em;
    margin-top: 2px;
  }
  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 28px 0 32px;
    font-size: 13px;
    color: white;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 14px 0;
  }
  .hero-meta-item { display: flex; align-items: center; gap: 8px; }
  .hero-meta-icon { color: var(--magenta-bright); font-size: 16px; }
  .hero-hook {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 24px;
    color: white;
    margin-bottom: 8px;
    font-weight: 400;
  }
  .hero-headline {
    font-family: 'Anton', sans-serif;
    font-size: 80px;
    line-height: 0.95;
    color: var(--magenta-bright);
    letter-spacing: -0.005em;
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  .hero-headline .white { color: white; }
  .hero-sub {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 22px;
    color: white;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .hero-desc {
    font-size: 15px;
    color: var(--texto-suave-dark);
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 480px;
  }
  .hero-desc strong { color: white; font-weight: 600; }

  /* ============= BOTÕES ============= */
  .btn-magenta {
    display: inline-block;
    background: var(--verde);
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 6px;
    transition: background 0.2s, border-color 0.2s;
    border: 2px solid var(--verde);
    animation: pulse-soft 2.4s ease-in-out infinite;
  }
  .btn-magenta:hover {
    background: var(--verde-bright);
    border-color: var(--verde-bright);
  }
  .btn-outline {
    display: inline-block;
    background: transparent;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 4px;
    border: 2px solid white;
    transition: all 0.2s;
  }
  .btn-outline:hover { background: white; color: var(--azul); }

  /* ============= TÍTULOS DE SEÇÃO ============= */
  .section-title-big {
    font-family: 'Anton', sans-serif;
    font-size: 64px;
    line-height: 0.95;
    text-transform: uppercase;
    letter-spacing: -0.005em;
    margin-bottom: 16px;
  }
  .section-title-big .magenta { color: var(--magenta-bright); }
  .section-tag {
    display: inline-block;
    font-size: 12px;
    color: var(--magenta-bright);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .section-tag.dark { color: var(--magenta); }
  .section-sub {
    font-size: 16px;
    color: var(--texto-suave-dark);
    max-width: 640px;
    margin-bottom: 48px;
    line-height: 1.55;
  }

  /* ============= SEÇÃO: FAIXA DE NÚMEROS ============= */
  .stats-bar {
    background: var(--magenta);
    padding: 28px 0;
  }
  .stats-bar-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    text-align: center;
    color: white;
  }
  .stat-bar-num {
    font-family: 'Anton', sans-serif;
    font-size: 48px;
    line-height: 1;
    margin-bottom: 4px;
  }
  .stat-bar-label {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.85;
  }

  /* ============= SEÇÃO DOR (PRETO + AMARELO INVERTIDO) ============= */
  .dor {
    background: var(--azul);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  .dor .watermark { left: -40px; top: 80px; }
  .dor-header {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 56px;
    align-items: center;
    margin-bottom: 56px;
    position: relative;
    z-index: 2;
  }
  .dor-header-texto .section-sub { margin-bottom: 0; }
  .dor-header-img {
    aspect-ratio: 4 / 5;
    border-radius: 8px;
    overflow: hidden;
    background: var(--azul-medio);
  }
  .dor-header-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .dor-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    position: relative;
    z-index: 2;
  }
  .dor-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 24px;
    transition: all 0.2s;
  }
  .dor-card:hover {
    border-color: var(--magenta);
    transform: translateY(-3px);
  }
  .dor-card-q {
    font-family: 'Fraunces', serif;
    font-size: 19px;
    color: white;
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 10px;
    font-style: italic;
  }
  .dor-card-q::before {
    content: '"';
    color: var(--magenta-bright);
    margin-right: 2px;
  }
  .dor-card-q::after {
    content: '"';
    color: var(--magenta-bright);
    margin-left: 2px;
  }
  .dor-card-a {
    font-size: 13.5px;
    color: var(--texto-suave-dark);
    line-height: 1.55;
  }

  /* ============= SEÇÃO: O QUE VAI APRENDER (FUNDO MAGENTA INVERTIDO) ============= */
  .aprende {
    background: var(--magenta);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    color: white;
  }
  .aprende .watermark {
    color: white;
    opacity: 0.08;
    right: -40px;
    top: 60px;
  }
  .aprende .section-title-big { color: white; }
  .aprende .section-title-big .magenta { color: var(--azul); }
  .aprende .section-tag { color: white; opacity: 0.9; }
  .aprende .section-sub { color: rgba(255, 255, 255, 0.85); }

  .aprende-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    position: relative;
    z-index: 2;
  }
  .palestra {
    background: var(--azul);
    border-radius: 8px;
    padding: 28px;
    color: white;
    position: relative;
    overflow: hidden;
  }
  .palestra.destaque {
    background: linear-gradient(135deg, var(--azul) 0%, var(--azul-medio) 100%);
    border: 2px solid var(--magenta-bright);
  }
  .palestra.span2 { grid-column: span 2; }
  .palestra-num {
    font-family: 'Anton', sans-serif;
    font-size: 56px;
    color: var(--magenta-bright);
    line-height: 1;
    position: absolute;
    top: 20px;
    right: 24px;
    opacity: 0.95;
  }
  .palestra-title {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    color: white;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 8px;
    max-width: 80%;
  }
  .palestra-badge {
    display: inline-block;
    background: var(--magenta);
    color: white;
    padding: 3px 10px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .palestra-desc {
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.55;
    margin-bottom: 12px;
  }
  .palestra-desc strong { color: white; }
  .palestra-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .palestra-tags span {
    background: rgba(255, 255, 255, 0.08);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
  }

  /* ============= SEÇÃO ANTES VS DEPOIS ============= */
  .versus {
    background: var(--azul);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  .versus .watermark { left: -40px; top: 100px; }
  .versus-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    position: relative;
    z-index: 2;
  }
  .versus-col {
    padding: 32px;
    border-radius: 8px;
  }
  .versus-col.antes {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .versus-col.depois {
    background: var(--magenta);
  }
  .versus-header {
    font-family: 'Anton', sans-serif;
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
  .versus-col.antes .versus-header { color: var(--texto-suave-dark); }
  .versus-col.depois .versus-header { color: white; border-color: rgba(255, 255, 255, 0.3); }
  .versus-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 16px;
    font-size: 14.5px;
    line-height: 1.45;
  }
  .versus-item::before {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    margin-top: 1px;
  }
  .versus-col.antes .versus-item { color: rgba(255, 255, 255, 0.7); }
  .versus-col.antes .versus-item::before {
    content: '✕';
    background: rgba(255, 100, 100, 0.2);
    color: #FF8888;
  }
  .versus-col.depois .versus-item { color: white; }
  .versus-col.depois .versus-item::before {
    content: '✓';
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  /* ============= PALESTRANTES (COM CADEADO) ============= */
  .palestrantes {
    background: var(--azul);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  .palestrantes .watermark { right: -40px; top: 60px; }
  .palestrantes-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 14px;
    position: relative;
    z-index: 2;
  }
  .palestrante {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s;
    position: relative;
  }
  .palestrante:hover { transform: translateY(-4px); border-color: var(--magenta); }
  .palestrante.destaque {
    background: linear-gradient(180deg, rgba(213, 140, 186, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
    border-color: var(--magenta);
  }
  .palestrante-foto {
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(135deg, var(--lilas) 0%, var(--magenta) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Anton', sans-serif;
    font-size: 56px;
    position: relative;
    overflow: hidden;
  }
  .palestrante-foto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .palestrante.a-anunciar .palestrante-foto::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(30, 39, 72, 0.1) 0%, rgba(30, 39, 72, 0.55) 100%);
  }
  .palestrante.a-anunciar .palestrante-nome { color: var(--texto-suave-dark); }
  .palestrante.locked .palestrante-foto {
    background: var(--azul-medio);
    position: relative;
  }
  .palestrante.locked .palestrante-foto::after {
    content: '';
    position: absolute;
    inset: 0;
    backdrop-filter: blur(3px);
    background: rgba(15, 24, 56, 0.4);
  }
  .palestrante.locked .palestrante-foto::before {
    content: '🔒';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 56px;
    z-index: 3;
  }
  .palestrante-info {
    padding: 18px 20px;
  }
  .palestrante-nome {
    font-family: 'Fraunces', serif;
    font-size: 17px;
    color: white;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .palestrante-role {
    font-size: 11px;
    color: var(--magenta-bright);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .palestrante-bio {
    font-size: 12.5px;
    color: var(--texto-suave-dark);
    line-height: 1.5;
  }
  .palestrante.locked .palestrante-nome { color: var(--texto-suave-dark); }
  .palestrante.locked .palestrante-role,
  .palestrante.locked .palestrante-bio { color: var(--texto-suave-dark); }

  /* ============= INCLUSOS ============= */
  .inclusos {
    background: var(--magenta);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    color: white;
  }
  .inclusos .watermark {
    color: white;
    left: -40px;
    top: 80px;
  }
  .inclusos .section-title-big { color: white; }
  .inclusos .section-tag { color: white; opacity: 0.9; }
  .inclusos .section-sub { color: rgba(255, 255, 255, 0.85); }
  .inclusos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    position: relative;
    z-index: 2;
  }
  .incluso {
    background: var(--azul);
    border-radius: 8px;
    padding: 28px;
    color: white;
    position: relative;
  }
  .incluso.destaque {
    background: white;
    color: var(--azul);
  }
  .incluso.destaque .incluso-title { color: var(--azul); }
  .incluso.destaque .incluso-desc { color: rgba(15, 24, 56, 0.7); }
  .incluso-icon {
    width: 48px;
    height: 48px;
    background: var(--magenta);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 18px;
  }
  .incluso.destaque .incluso-icon { background: var(--magenta); }
  .incluso-title {
    font-family: 'Fraunces', serif;
    font-size: 19px;
    color: white;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .incluso-desc {
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.55;
  }
  .incluso-tag-destaque {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--magenta);
    color: white;
    font-size: 9px;
    padding: 4px 8px;
    border-radius: 100px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
  }

  /* ============= INGRESSOS ============= */
  .ingressos {
    background: var(--azul);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  .ingressos .watermark { right: -40px; top: 80px; }
  .ingressos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    position: relative;
    z-index: 2;
    margin-top: 40px;
  }
  .ingresso {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 32px 28px;
    text-align: center;
    transition: all 0.2s;
    position: relative;
  }
  .ingresso:hover { transform: translateY(-4px); }
  .ingresso.popular {
    background: var(--magenta);
    border-color: var(--magenta);
    transform: scale(1.02);
  }
  .ingresso.popular::before {
    content: 'MAIS POPULAR';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--azul);
    color: white;
    padding: 5px 18px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
  }
  .ingresso-tipo {
    font-family: 'Anton', sans-serif;
    font-size: 28px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
  }
  .ingresso-desc {
    font-size: 12.5px;
    color: var(--texto-suave-dark);
    margin-bottom: 24px;
    min-height: 36px;
    line-height: 1.5;
  }
  .ingresso.popular .ingresso-desc { color: rgba(255, 255, 255, 0.9); }
  .ingresso-preco-wrap {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
    margin-bottom: 6px;
  }
  .ingresso-cifrao {
    font-family: 'Anton', sans-serif;
    font-size: 22px;
    color: var(--magenta-bright);
  }
  .ingresso.popular .ingresso-cifrao { color: white; }
  .ingresso-valor {
    font-family: 'Anton', sans-serif;
    font-size: 72px;
    line-height: 1;
    color: white;
  }
  .ingresso-condicao {
    font-size: 11px;
    color: var(--magenta-bright);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 28px;
  }
  .ingresso.popular .ingresso-condicao { color: white; opacity: 0.9; }
  .ingresso-btn {
    display: block;
    background: var(--verde);
    color: white;
    padding: 14px 20px;
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 6px;
    transition: background 0.2s;
    animation: pulse-soft 2.4s ease-in-out infinite;
  }
  .ingresso-btn:hover { background: var(--verde-bright); }
  .ingresso.popular .ingresso-btn {
    background: var(--verde);
    color: white;
  }
  .ingresso.popular .ingresso-btn:hover { background: var(--verde-bright); }
  .ingresso-lote-badge {
    display: inline-block;
    background: var(--magenta);
    color: white;
    padding: 8px 22px;
    border-radius: 100px;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .evento-dados {
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    text-align: left;
  }
  .evento-dados-item {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 22px 20px;
  }
  .evento-dados-icon {
    font-size: 22px;
    margin-bottom: 10px;
  }
  .evento-dados-label {
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--magenta-bright);
    margin-bottom: 6px;
  }
  .evento-dados-valor {
    font-size: 14px;
    color: white;
    font-weight: 500;
    line-height: 1.45;
  }

  /* ============= LOCAL ============= */
  .local {
    background: var(--magenta);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    color: white;
  }
  .local .watermark { color: white; left: -40px; top: 60px; }
  .local-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  .local .section-title-big { color: white; }
  .local-desc {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 28px;
    line-height: 1.6;
  }
  .local-detalhes { display: flex; flex-direction: column; gap: 18px; }
  .local-detalhe {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .local-detalhe-icon {
    width: 36px;
    height: 36px;
    background: var(--azul);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }
  .local-detalhe-label {
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 2px;
    opacity: 0.8;
  }
  .local-detalhe-valor { font-size: 14px; font-weight: 500; line-height: 1.4; }
  .local-img {
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    overflow: hidden;
    background: var(--azul);
    min-height: 380px;
  }
  .local-img img,
  .local-img iframe { width: 100%; height: 100%; object-fit: cover; }

  /* ============= FAQ ============= */
  .faq {
    background: var(--azul);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  .faq .watermark { right: -40px; top: 80px; }
  .faq-list {
    max-width: 820px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .faq-item {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 22px 26px;
  }
  .faq-q {
    font-family: 'Fraunces', serif;
    font-size: 18px;
    color: white;
    font-weight: 500;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
  .faq-q::before {
    content: '+';
    color: var(--magenta-bright);
    font-family: 'Anton', sans-serif;
    font-size: 24px;
    line-height: 1;
  }
  .faq-a {
    font-size: 14px;
    color: var(--texto-suave-dark);
    line-height: 1.6;
    padding-left: 28px;
  }

  /* ============= CTA FINAL ============= */
  .cta-final {
    background: var(--azul);
    padding: 100px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .cta-final::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(201, 95, 163, 0.15) 0%, transparent 70%);
  }
  .cta-final-content { position: relative; z-index: 2; }
  .cta-final h2 {
    font-family: 'Anton', sans-serif;
    font-size: 96px;
    line-height: 0.95;
    color: var(--magenta-bright);
    text-transform: uppercase;
    margin-bottom: 16px;
    letter-spacing: -0.005em;
  }
  .cta-final h2 .white { color: white; }
  .cta-final p {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 22px;
    color: white;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* ============= FOOTER ============= */
  footer {
    background: #08102A;
    padding: 48px 0 32px;
    text-align: center;
    color: var(--texto-suave-dark);
    font-size: 12px;
  }
  footer .nav-logo {
    font-size: 22px;
    margin-bottom: 16px;
    display: inline-block;
  }
  footer p { margin-bottom: 6px; }
  footer a { color: var(--magenta-bright); text-decoration: none; }

  /* ============= RESPONSIVO ============= */
  @media (max-width: 900px) {
    .hero { padding: 40px 0 60px; min-height: auto; }
    .hero-bg { width: 100%; opacity: 0.15; }
    .hero-headline { font-size: 48px; }
    .hero-logo .big { font-size: 44px; }
    .section-title-big { font-size: 40px; }
    .cta-final h2 { font-size: 56px; }
    .stats-bar-inner { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .dor-grid, .aprende-grid, .inclusos-grid, .ingressos-grid { grid-template-columns: 1fr; }
    .palestra.span2 { grid-column: span 1; }
    .palestrantes-grid { grid-template-columns: repeat(2, 1fr); }
    .evento-dados { grid-template-columns: repeat(2, 1fr); }
    .dor-header { grid-template-columns: 1fr; gap: 32px; }
    .local-grid { grid-template-columns: 1fr; gap: 40px; }
    section, .dor, .aprende, .versus, .palestrantes, .inclusos, .ingressos, .local, .faq, .cta-final { padding: 60px 0; }
    .ingresso.popular { transform: scale(1); }
    .watermark { font-size: 100px; }
  }
</style>

<!-- ============= NAV ============= -->
<nav>
  <div class="nav-inner">
    <a href="#" class="nav-logo">BABY<span class="accent">TALKS</span></a>
    <a href="#ingressos" class="nav-cta">Garantir vaga</a>
  </div>
</nav>

<!-- ============= HERO ============= -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grain"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-logo">
        <span class="big">BABY TALKS</span>
        <span class="sub">SANTO ANJO · CURITIBA</span>
      </div>
      <div class="hero-meta">
        <div class="hero-meta-item"><span class="hero-meta-icon">📅</span>15 de agosto · sábado</div>
        <div class="hero-meta-item"><span class="hero-meta-icon">📍</span>Teatro Santo Anjo · Barigui</div>
        <div class="hero-meta-item"><span class="hero-meta-icon">⏱️</span>8h30 às 13h30</div>
      </div>
      <p class="hero-hook">Em um sábado, vocês vão criar</p>
      <h1 class="hero-headline">A SUA<br>PREPARAÇÃO<br>PRA SER <span class="white">PAIS.</span></h1>
      <p class="hero-sub">a que o livro não dá, o curso não entrega e o Instagram não substitui.</p>
      <p class="hero-desc">Mais do que aprender teoria, vocês vão sair sabendo <strong>o que fazer</strong> no parto, na amamentação, no sono do bebê e nas primeiras semanas em casa. Cinco palestras com especialistas, em cinco horas.</p>
      <a href="#ingressos" class="btn-magenta">Quero garantir meu ingresso</a>
    </div>
  </div>
</section>

<!-- ============= DOR ============= -->
<section class="dor">
  <span class="watermark">DÚVIDAS</span>
  <div class="container">
    <div class="dor-header">
      <div class="dor-header-texto">
        <span class="section-tag">Vocês reconhecem isso?</span>
        <h2 class="section-title-big">AS DÚVIDAS QUE <span class="magenta">NINGUÉM</span><br>RESPONDEU ATÉ AGORA.</h2>
        <p class="section-sub">Vocês já leram três livros, salvaram 40 posts e o obstetra responde em 5 minutos. Mesmo assim, tem perguntas que continuam virando a madrugada.</p>
      </div>
      <div class="dor-header-img">
        <img src="/images/local-portrait.jpg" alt="Mãe gestante">
      </div>
    </div>

    <div class="dor-grid">
      <div class="dor-card">
        <div class="dor-card-q">E se eu não reconhecer o trabalho de parto?</div>
        <div class="dor-card-a">O medo de ir cedo demais, tarde demais, ou de não saber a hora certa.</div>
      </div>
      <div class="dor-card">
        <div class="dor-card-q">Vou conseguir amamentar?</div>
        <div class="dor-card-a">A dúvida que mais aparece. Pega, dor, leite que não desce, primeiros dias.</div>
      </div>
      <div class="dor-card">
        <div class="dor-card-q">E o sono do bebê?</div>
        <div class="dor-card-a">Cada um tem uma opinião. Vocês querem entender o que é real, e como começar uma rotina sem culpa.</div>
      </div>
      <div class="dor-card">
        <div class="dor-card-q">Como meu parceiro pode ajudar?</div>
        <div class="dor-card-a">Ele quer apoiar mas não sabe como. O papel dele no parto e nos primeiros dias.</div>
      </div>
      <div class="dor-card">
        <div class="dor-card-q">E se eu sofrer violência obstétrica?</div>
        <div class="dor-card-a">O medo de não ser ouvida. Conhecer seus direitos e ter um plano de parto.</div>
      </div>
      <div class="dor-card">
        <div class="dor-card-q">E se eu me sentir sozinha depois?</div>
        <div class="dor-card-a">O puerpério é o que ninguém fala antes. Saúde mental, a nova relação a dois.</div>
      </div>
    </div>
  </div>
</section>

<!-- ============= O QUE VAI APRENDER (FUNDO MAGENTA) ============= -->
<section class="aprende" id="programa">
  <span class="watermark">PROGRAMA</span>
  <div class="container">
    <span class="section-tag">A imersão</span>
    <h2 class="section-title-big">O QUE VOCÊS VÃO<br><span class="magenta">APRENDER DE VERDADE</span></h2>
    <p class="section-sub">Cinco palestras na ordem em que a vida acontece: da gravidez ao bebê em casa. Conteúdo construído a partir da escuta de mais de 140 gestantes.</p>

    <div class="aprende-grid">

      <div class="palestra">
        <div class="palestra-num">01</div>
        <div class="palestra-badge">Gestação</div>
        <div class="palestra-title">A gravidez que vocês não aprenderam na internet</div>
        <div class="palestra-desc">Preparação para o parto, saúde emocional, mudanças no corpo que ninguém te conta. Abertura forte, pro casal entrar sintonizado.</div>
        <div class="palestra-tags">
          <span>Preparação</span><span>Saúde emocional</span><span>Corpo</span>
        </div>
      </div>

      <div class="palestra">
        <div class="palestra-num">02</div>
        <div class="palestra-badge">Parto</div>
        <div class="palestra-title">O dia do parto: do início ao fim</div>
        <div class="palestra-desc">Reconhecer o trabalho de parto, parto normal, cesárea, dor, analgesia, violência obstétrica, primeiras horas do bebê.</div>
        <div class="palestra-tags">
          <span>Trabalho de parto</span><span>Cesárea</span><span>Direitos</span>
        </div>
      </div>

      <div class="palestra destaque">
        <div class="palestra-num">03</div>
        <div class="palestra-badge">Tema #1</div>
        <div class="palestra-title">Amamentação: da teoria para o peito</div>
        <div class="palestra-desc"><strong>Eleito o tema mais desejado da pesquisa.</strong> Pega correta, posições, primeiros sete dias e dificuldades reais.</div>
        <div class="palestra-tags">
          <span>Pega</span><span>Posições</span><span>Primeiros dias</span>
        </div>
      </div>

      <div class="palestra">
        <div class="palestra-num">04</div>
        <div class="palestra-badge">Primeiros meses</div>
        <div class="palestra-title">Sono do bebê e rotina real</div>
        <div class="palestra-desc">Sono seguro, ciclos do bebê, cólica, choro e expectativa realista da rotina das primeiras semanas. Sem promessa mágica.</div>
        <div class="palestra-tags">
          <span>Sono seguro</span><span>Cólica</span><span>Rotina</span>
        </div>
      </div>

      <div class="palestra span2">
        <div class="palestra-num">05</div>
        <div class="palestra-badge">Fechamento</div>
        <div class="palestra-title">Puerpério: o pós-parto do casal</div>
        <div class="palestra-desc">O tema que ninguém fala antes e mais pega as famílias de surpresa. Recuperação física, saúde mental, papel do parceiro e a nova relação a dois com um bebê. Fechamento acolhedor.</div>
        <div class="palestra-tags">
          <span>Recuperação</span><span>Saúde mental</span><span>Papel do parceiro</span><span>Relação do casal</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============= PALESTRANTES ============= -->
<section class="palestrantes" id="palestrantes">
  <span class="watermark">CURADORIA</span>
  <div class="container">
    <span class="section-tag">Quem vai estar com vocês</span>
    <h2 class="section-title-big">OS MELHORES ESPECIALISTAS<br><span class="magenta">COM CONTEÚDO REAL.</span></h2>
    <p class="section-sub">Curadoria de profissionais com formação, experiência clínica e olhar humanizado. Informação que não conflita com seu obstetra.</p>

    <div class="palestrantes-grid">
      <div class="palestrante destaque">
        <div class="palestrante-foto"><img src="/images/dayane.jpg" alt="Dayane dos Anjos" /></div>
        <div class="palestrante-info">
          <div class="palestrante-nome">Dayane Dos Anjos</div>
          <div class="palestrante-role">Manual do Recém-Nascido</div>
          <div class="palestrante-bio">Consultora de Amamentação, Sono e Cuidados com o Bebê. Mais de 2 milhões de seguidores nas redes sociais.</div>
        </div>
      </div>
      <div class="palestrante">
        <div class="palestrante-foto"><img src="/images/palestrante-rafaela.jpg" alt="Rafaela Ferraz" onerror="this.style.display='none';this.parentElement.innerHTML='RF'" /></div>
        <div class="palestrante-info">
          <div class="palestrante-nome">Rafaela Ferraz</div>
          <div class="palestrante-role">Fisio Pélvica</div>
          <div class="palestrante-bio">Especialista em gestação e pós-parto. Abre o evento.</div>
        </div>
      </div>
      <div class="palestrante">
        <div class="palestrante-foto"><img src="/images/palestrante-camila.jpg" alt="Dra. Camila Rocha" onerror="this.style.display='none';this.parentElement.innerHTML='CR'" /></div>
        <div class="palestrante-info">
          <div class="palestrante-nome">Dra. Camila Rocha</div>
          <div class="palestrante-role">Obstetra</div>
          <div class="palestrante-bio">15 anos em parto humanizado. Conduz O Dia do Parto.</div>
        </div>
      </div>
      <div class="palestrante">
        <div class="palestrante-foto"><img src="/images/palestrante-leticia.jpg" alt="Letícia Marques" onerror="this.style.display='none';this.parentElement.innerHTML='LM'" /></div>
        <div class="palestrante-info">
          <div class="palestrante-nome">Letícia Marques</div>
          <div class="palestrante-role">Consultora de Amamentação</div>
          <div class="palestrante-bio">Enfermeira obstetra e IBCLC. Mais de 2.000 atendimentos.</div>
        </div>
      </div>
      <div class="palestrante a-anunciar">
        <div class="palestrante-foto"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=faces" alt="A anunciar" /></div>
        <div class="palestrante-info">
          <div class="palestrante-nome">A anunciar</div>
          <div class="palestrante-role">Próximas semanas</div>
          <div class="palestrante-bio">Mais um nome forte da saúde materna confirmado em breve.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============= INCLUSOS (FUNDO MAGENTA) ============= -->
<section class="inclusos">
  <span class="watermark">INCLUSO</span>
  <div class="container">
    <span class="section-tag">Está incluso no ingresso</span>
    <h2 class="section-title-big">VOCÊS NÃO LEVAM SÓ CONTEÚDO.<br><span style="color: var(--azul);">LEVAM TUDO ISSO.</span></h2>
    <p class="section-sub">A ideia é que o casal saia equipado. De informação, e de material físico pra revisitar.</p>

    <div class="inclusos-grid">
      <div class="incluso destaque">
        <div class="incluso-tag-destaque">Destaque</div>
        <div class="incluso-icon">📘</div>
        <div class="incluso-title">Apostila Baby Talks</div>
        <div class="incluso-desc">Material de apoio impresso com resumo das 5 palestras, espaços de anotação e checklists práticos. Seu pra levar.</div>
      </div>

      <div class="incluso destaque">
        <div class="incluso-tag-destaque">Destaque</div>
        <div class="incluso-icon">🅿️</div>
        <div class="incluso-title">Estacionamento gratuito</div>
        <div class="incluso-desc">400 vagas no teatro, sem custo. Estacionem tranquilos, sem se preocupar com tempo.</div>
      </div>

      <div class="incluso destaque">
        <div class="incluso-tag-destaque">Destaque</div>
        <div class="incluso-icon">🎁</div>
        <div class="incluso-title">Brindes dos parceiros</div>
        <div class="incluso-desc">Kit de produtos selecionados (vacinação, enxoval, fotografia, planos). Curadoria com itens úteis de verdade.</div>
      </div>

      <div class="incluso">
        <div class="incluso-icon">📜</div>
        <div class="incluso-title">Certificado</div>
        <div class="incluso-desc">Certificado digital com a chancela do evento, enviado por e-mail após a participação.</div>
      </div>

      <div class="incluso">
        <div class="incluso-icon">📸</div>
        <div class="incluso-title">Espaço instagramável</div>
        <div class="incluso-desc">Cenário pensado pra registrar o momento do casal e marcar a gestação com uma foto-memória.</div>
      </div>
    </div>
  </div>
</section>

<!-- ============= INGRESSOS ============= -->
<section class="ingressos" id="ingressos">
  <span class="watermark">INGRESSOS</span>
  <div class="container" style="text-align: center;">
    <span class="ingresso-lote-badge">🔥 1º Lote · Promocional</span>
    <h2 class="section-title-big">GARANTAM A VAGA<br><span class="magenta">ENQUANTO DÁ TEMPO.</span></h2>
    <p class="section-sub" style="margin-left: auto; margin-right: auto;">O 1º lote é o preço mais baixo da temporada. Quando esgotar, sobe pro 2º lote.</p>

    <div class="ingressos-grid">

      <div class="ingresso">
        <div class="ingresso-tipo">Individual</div>
        <div class="ingresso-desc">Pra quem vai sozinha ou cujo parceiro não pode acompanhar.</div>
        <div class="ingresso-preco-wrap">
          <span class="ingresso-cifrao">R$</span>
          <span class="ingresso-valor">180</span>
        </div>
        <div class="ingresso-condicao">1 ingresso · 1º lote</div>
        <a href="#" class="ingresso-btn">Comprar individual</a>
      </div>

      <div class="ingresso popular">
        <div class="ingresso-tipo">Casal</div>
        <div class="ingresso-desc">Você + parceiro(a). O mais escolhido, e o que o evento foi feito pra ser.</div>
        <div class="ingresso-preco-wrap">
          <span class="ingresso-cifrao">R$</span>
          <span class="ingresso-valor">250</span>
        </div>
        <div class="ingresso-condicao">2 ingressos · 1º lote</div>
        <a href="#" class="ingresso-btn">Comprar casal</a>
      </div>

      <div class="ingresso">
        <div class="ingresso-tipo">Dupla de gestantes</div>
        <div class="ingresso-desc">Você + amiga, irmã ou prima também grávida. Vai junto, aprende junto.</div>
        <div class="ingresso-preco-wrap">
          <span class="ingresso-cifrao">R$</span>
          <span class="ingresso-valor">250</span>
        </div>
        <div class="ingresso-condicao">2 ingressos · 1º lote</div>
        <a href="#" class="ingresso-btn">Comprar dupla</a>
      </div>
    </div>

    <p style="margin-top: 32px; font-size: 13px; color: var(--texto-suave-dark);">Pagamento em até 12x no cartão · Troca e transferência até 7 dias antes do evento</p>

    <div class="evento-dados">
      <div class="evento-dados-item">
        <div class="evento-dados-icon">📅</div>
        <div class="evento-dados-label">Data</div>
        <div class="evento-dados-valor">15 de agosto · sábado</div>
      </div>
      <div class="evento-dados-item">
        <div class="evento-dados-icon">⏱️</div>
        <div class="evento-dados-label">Horário</div>
        <div class="evento-dados-valor">8h30 às 13h30</div>
      </div>
      <div class="evento-dados-item">
        <div class="evento-dados-icon">📍</div>
        <div class="evento-dados-label">Local</div>
        <div class="evento-dados-valor">Teatro Santo Anjo · Barigui</div>
      </div>
      <div class="evento-dados-item">
        <div class="evento-dados-icon">🗺️</div>
        <div class="evento-dados-label">Endereço</div>
        <div class="evento-dados-valor">BR-277, 1115 · Mossunguê<br>Curitiba/PR</div>
      </div>
    </div>
  </div>
</section>

<!-- ============= LOCAL ============= -->
<section class="local">
  <span class="watermark">LOCAL</span>
  <div class="container">
    <div class="local-grid">
      <div>
        <span class="section-tag" style="color: white;">Onde acontece</span>
        <h2 class="section-title-big">TEATRO SANTO ANJO.<br><span style="color: var(--azul);">UNIDADE BARIGUI.</span></h2>
        <p class="local-desc">O mais novo espaço cultural de Curitiba, no Mossunguê. 650 lugares, ar-condicionado, acessibilidade, e o que mais importa pra vocês: <strong>400 vagas de estacionamento gratuito</strong>.</p>

        <div class="local-detalhes">
          <div class="local-detalhe">
            <div class="local-detalhe-icon">📍</div>
            <div>
              <div class="local-detalhe-label">Endereço</div>
              <div class="local-detalhe-valor">Marginal da Rod. Curitiba-Ponta Grossa<br>BR-277, 1115 · Mossunguê · Curitiba/PR</div>
            </div>
          </div>
          <div class="local-detalhe">
            <div class="local-detalhe-icon">🅿️</div>
            <div>
              <div class="local-detalhe-label">Estacionamento</div>
              <div class="local-detalhe-valor">Gratuito · 400 vagas no local</div>
            </div>
          </div>
          <div class="local-detalhe">
            <div class="local-detalhe-icon">♿</div>
            <div>
              <div class="local-detalhe-label">Acessibilidade</div>
              <div class="local-detalhe-valor">Espaço acessível, ar-condicionado, poltronas confortáveis</div>
            </div>
          </div>
        </div>
      </div>

      <div class="local-img">
        <iframe
          src="https://www.google.com/maps?q=Teatro+Santo+Anjo+Barigui+Curitiba&output=embed"
          title="Mapa Teatro Santo Anjo Barigui"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style="border:0;width:100%;height:100%;display:block;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</section>

<!-- ============= FAQ ============= -->
<section class="faq">
  <span class="watermark">DÚVIDAS</span>
  <div class="container">
    <span class="section-tag">Perguntas frequentes</span>
    <h2 class="section-title-big" style="text-align: center; max-width: 820px; margin: 0 auto 48px;">A GENTE JÁ ADIANTA<br><span class="magenta">AS PRINCIPAIS.</span></h2>

    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-q">Em que mês de gestação devo estar pra ir?</div>
        <div class="faq-a">O evento é indicado a partir do 2º trimestre, idealmente entre a 20ª e a 36ª semana. Mas se você estiver no 1º tri ou já com o bebê pequeno, também é muito bem-vinda.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">E se eu não puder ir no dia? Tem reembolso?</div>
        <div class="faq-a">Sim. Até 7 dias antes do evento, você pode solicitar reembolso integral ou transferir o ingresso, sem custo.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">O ingresso de casal serve pra mim e minha mãe / irmã / amiga?</div>
        <div class="faq-a">Sim. O ingresso de casal vale pra qualquer dupla acompanhante: parceiro(a), mãe, irmã, melhor amiga, doula. A ideia é que ninguém vá sozinha.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Posso levar o bebê / criança?</div>
        <div class="faq-a">O evento é pensado pra adultos. Bebês de colo (até 6 meses) podem acompanhar a mãe sem ingresso adicional. Crianças maiores precisam ficar em casa.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Como recebo a apostila e os brindes?</div>
        <div class="faq-a">No credenciamento, na chegada ao teatro, você recebe a apostila impressa. Os brindes ficam por conta de <strong>ações especiais que acontecerão dentro do evento</strong> — fique atenta às dinâmicas durante o dia.</div>
      </div>
    </div>
  </div>
</section>

<!-- ============= CTA FINAL ============= -->
<section class="cta-final">
  <div class="container cta-final-content">
    <h2>CHEGUEM NO PARTO<br><span class="white">SABENDO O QUE FAZER.</span></h2>
    <p>Vagas limitadas a 650 lugares. O 1º lote é o preço mais baixo da temporada.</p>
    <a href="#ingressos" class="btn-magenta">Quero meu ingresso agora</a>
  </div>
</section>

<!-- ============= FOOTER ============= -->
<footer>
  <div class="container">
    <a href="#" class="nav-logo">BABY<span style="color: var(--magenta-bright);">TALKS</span></a>
    <p>Seminário Imersivo para Casais Grávidos · Curitiba/PR</p>
    <p>Dúvidas? Fale com a gente: <a href="mailto:contato@babytalks.com.br">contato@babytalks.com.br</a></p>
    <p style="margin-top: 20px; font-size: 10px; opacity: 0.5;">© 2026 Baby Talks Santo Anjo. Todos os direitos reservados.</p>
  </div>
</footer>

`;

function Index() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
