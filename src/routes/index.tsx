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
    /* PALETA OFICIAL DO GUIA */
    --lilas: #8E9BD1;         /* Lilás Baby — cor de marca, headers, blocos */
    --lilas-claro: #B0BCE5;
    --lilas-escuro: #6F7EB8;
    --magenta: #C95FA3;       /* Magenta Talk — destaques, accent */
    --magenta-suave: #D89FC4;
    --azul: #1F2A56;          /* Azul Anjo — tipografia, base estrutural */
    --azul-suave: rgba(31, 42, 86, 0.7);
    --azul-medio: rgba(31, 42, 86, 0.5);
    --branco-suave: #F8F7F4;  /* Branco Suave — fundo principal */
    --rosa-bebe: #F4DCE8;     /* Rosa Bebê — destaques suaves */
    --lavanda: #E4E6F2;       /* Lavanda Clara — cards, divisores */
    --verde: #2EA66C;         /* CTA verde — botões de compra */
    --verde-bright: #3FBE7E;
    --texto: var(--azul);
    --texto-suave: var(--azul-suave);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--branco-suave);
    color: var(--azul);
    line-height: 1.75;
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
    font-family: 'Fraunces', serif;
    font-size: 220px;
    color: var(--lilas);
    opacity: 0.07;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.02em;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    font-weight: 400;
    font-style: italic;
  }

  /* ============= NAV ============= */
  nav {
    position: sticky;
    top: 0;
    background: rgba(248, 247, 244, 0.92);
    backdrop-filter: blur(12px);
    z-index: 100;
    border-bottom: 1px solid rgba(142, 155, 209, 0.18);
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
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }
  .nav-logo img {
    height: 64px;
    width: auto;
    display: block;
  }
  .nav-logo .text-fallback {
    font-family: 'Anton', sans-serif;
    font-size: 24px;
    color: white;
    letter-spacing: 0.02em;
  }
  .nav-logo .accent { color: var(--magenta-bright); }
  .nav-cta {
    background: var(--verde);
    color: white;
    padding: 12px 22px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: background 0.2s;
    animation: pulse-soft 2.4s ease-in-out infinite;
  }
  .nav-cta:hover { background: var(--verde-bright); }

  /* ============= HERO ============= */
  .hero {
    background: linear-gradient(180deg, var(--lavanda) 0%, var(--branco-suave) 100%);
    padding: 60px 0 80px;
    position: relative;
    overflow: hidden;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  .hero-layout {
    display: grid;
    grid-template-columns: 1fr 440px;
    gap: 60px;
    align-items: center;
    width: 100%;
  }
  .hero-content {
    position: relative;
    z-index: 3;
  }
  .hero-img-wrap {
    position: relative;
    z-index: 2;
  }
  .hero-img-shape {
    border-radius: 120px 24px 80px 24px;
    overflow: hidden;
    aspect-ratio: 4 / 5;
    box-shadow: 0 28px 64px rgba(31, 42, 86, 0.14);
    background: var(--lavanda);
  }
  .hero-img-shape img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    display: block;
  }
  .hero-mobile-img {
    display: none;
    margin-top: 40px;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    box-shadow: 0 10px 30px rgba(31, 42, 86, 0.12);
  }
  .hero-mobile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 25%;
    display: block;
  }
  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 28px 0 32px;
  }
  .hero-meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: white;
    background: var(--lilas-escuro);
    padding: 8px 16px;
    border-radius: 100px;
  }
  .hero-meta-icon { font-size: 15px; }
  .hero-hook {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 26px;
    color: var(--azul-suave);
    margin-bottom: 12px;
    font-weight: 400;
  }
  .hero-headline {
    font-family: 'Fraunces', serif;
    font-size: 78px;
    line-height: 1.0;
    color: var(--azul);
    letter-spacing: -0.015em;
    margin-bottom: 20px;
    font-weight: 600;
  }
  .hero-headline .accent { color: var(--magenta); font-style: italic; }
  .hero-sub {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 22px;
    color: var(--azul-suave);
    font-weight: 400;
    margin-bottom: 24px;
  }
  .hero-desc {
    font-size: 16px;
    color: var(--azul-suave);
    line-height: 1.7;
    margin-bottom: 36px;
    max-width: 480px;
  }
  .hero-desc strong { color: var(--azul); font-weight: 600; }

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
    color: var(--azul);
    padding: 16px 32px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.08em;
    border-radius: 6px;
    border: 2px solid var(--azul);
    transition: all 0.2s;
  }
  .btn-outline:hover { background: var(--azul); color: white; }

  /* ============= TÍTULOS DE SEÇÃO ============= */
  .section-title-big {
    font-family: 'Fraunces', serif;
    font-size: 58px;
    line-height: 1.05;
    letter-spacing: -0.018em;
    margin-bottom: 18px;
    color: var(--azul);
    font-weight: 600;
  }
  .section-title-big .magenta { color: var(--magenta); font-style: italic; font-weight: 500; }
  .section-tag {
    display: block;
    font-size: 11px;
    color: var(--magenta);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 18px;
    text-align: center;
  }
  .section-tag.dark { color: var(--lilas-escuro); }
  .section-title-big { text-align: center; }
  .section-sub {
    font-size: 17px;
    color: var(--azul-suave);
    max-width: 640px;
    margin-bottom: 56px;
    line-height: 1.65;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
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

  /* ============= SEÇÃO DOR ============= */
  .dor {
    background: var(--branco-suave);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  .dor .watermark { left: -40px; top: 80px; }
  .dor-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  .dor-esquerda .section-sub { margin-bottom: 32px; }
  .dor-direita .dor-header-img {
    aspect-ratio: 2 / 3;
    border-radius: 12px;
    overflow: hidden;
    background: var(--lavanda);
    box-shadow: 0 16px 48px rgba(31, 42, 86, 0.10);
  }
  .dor-direita .dor-header-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 15%;
    display: block;
  }
  .dor-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .dor-card {
    background: white;
    border: 1px solid var(--lavanda);
    border-radius: 10px;
    padding: 26px;
    transition: all 0.25s;
    box-shadow: 0 2px 8px rgba(31, 42, 86, 0.04);
  }
  .dor-card:hover {
    border-color: var(--lilas);
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(142, 155, 209, 0.18);
  }
  .dor-card-q {
    font-family: 'Fraunces', serif;
    font-size: 20px;
    color: var(--azul);
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 10px;
    font-style: italic;
  }
  .dor-card-q::before {
    content: '"';
    color: var(--magenta);
    margin-right: 2px;
  }
  .dor-card-q::after {
    content: '"';
    color: var(--magenta);
    margin-left: 2px;
  }
  .dor-card-a {
    font-size: 14px;
    color: var(--azul-suave);
    line-height: 1.6;
  }

  /* ============= SEÇÃO: O QUE VAI APRENDER (FUNDO LILÁS) ============= */
  .aprende {
    background: var(--lilas);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    color: white;
  }
  .aprende .watermark {
    color: white;
    opacity: 0.10;
    right: -40px;
    top: 60px;
  }
  .aprende .section-title-big { color: white; }
  .aprende .section-title-big .magenta { color: var(--azul); font-style: italic; }
  .aprende .section-tag { color: rgba(255, 255, 255, 0.9); }
  .aprende .section-sub { color: rgba(255, 255, 255, 0.88); }

  .aprende-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    position: relative;
    z-index: 2;
  }
  .palestra {
    background: white;
    border-radius: 10px;
    padding: 30px 28px;
    color: var(--azul);
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(31, 42, 86, 0.08);
  }
  .palestra.destaque {
    background: white;
    border: 2px solid var(--magenta);
  }
  .palestra.span2 { grid-column: span 2; }
  .palestra-num {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 58px;
    color: var(--magenta);
    line-height: 1;
    position: absolute;
    top: 22px;
    right: 26px;
    opacity: 0.85;
    font-weight: 500;
  }
  .palestra-title {
    font-family: 'Fraunces', serif;
    font-size: 24px;
    color: var(--azul);
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 10px;
    max-width: 82%;
  }
  .palestra-badge {
    display: inline-block;
    background: var(--lavanda);
    color: var(--azul);
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .palestra-badge.tema-gestacao { background: #F0D8E8; color: #8B3060; }
  .palestra-badge.tema-parto    { background: #D8E4F4; color: #2A4480; }
  .palestra-badge.tema-amamentacao { background: var(--magenta); color: white; }
  .palestra-badge.tema-sono     { background: #D4EFE4; color: #1C6640; }
  .palestra-badge.tema-fechamento { background: #EAE4F4; color: #4A3888; }
  .palestra-desc {
    font-size: 14.5px;
    color: var(--azul-suave);
    line-height: 1.65;
    margin-bottom: 14px;
  }
  .palestra-desc strong { color: var(--azul); font-weight: 600; }
  .palestra-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .palestra-tags span {
    background: var(--lavanda);
    color: var(--azul);
    padding: 5px 11px;
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

  /* ============= PALESTRANTES ============= */
  .palestrantes {
    background: var(--branco-suave);
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
    background: white;
    border: 1px solid var(--lavanda);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.25s;
    position: relative;
    box-shadow: 0 4px 14px rgba(31, 42, 86, 0.06);
  }
  .palestrante:hover { transform: translateY(-4px); border-color: var(--lilas); box-shadow: 0 14px 32px rgba(142, 155, 209, 0.20); }
  .palestrante.destaque {
    background: linear-gradient(180deg, var(--rosa-bebe) 0%, white 100%);
    border: 2px solid var(--magenta);
  }
  .palestrante-foto {
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(135deg, var(--lilas-claro) 0%, var(--lilas) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Fraunces', serif;
    font-size: 56px;
    position: relative;
    overflow: hidden;
    font-weight: 500;
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
    background: linear-gradient(180deg, rgba(248, 247, 244, 0.05) 0%, rgba(248, 247, 244, 0.6) 100%);
  }
  .palestrante.a-anunciar .palestrante-nome { color: var(--azul-suave); }
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
    padding: 20px 22px;
  }
  .palestrante-nome {
    font-family: 'Fraunces', serif;
    font-size: 18px;
    color: var(--azul);
    font-weight: 600;
    margin-bottom: 4px;
    line-height: 1.2;
  }
  .palestrante-role {
    font-size: 11px;
    color: var(--magenta);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .palestrante-bio {
    font-size: 13px;
    color: var(--azul-suave);
    line-height: 1.55;
  }

  /* ============= INCLUSOS ============= */
  .inclusos {
    background: var(--rosa-bebe);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    color: var(--azul);
  }
  .inclusos .watermark {
    color: var(--magenta);
    opacity: 0.08;
    left: -40px;
    top: 80px;
  }
  .inclusos .section-title-big .magenta { color: var(--magenta); }
  .inclusos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    position: relative;
    z-index: 2;
  }
  .incluso {
    background: white;
    border-radius: 10px;
    padding: 28px;
    color: var(--azul);
    position: relative;
    box-shadow: 0 4px 14px rgba(31, 42, 86, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
  .incluso.destaque {
    background: linear-gradient(180deg, white 0%, var(--lavanda) 100%);
    border: 2px solid var(--lilas);
  }
  .incluso-icon {
    width: 52px;
    height: 52px;
    background: var(--lilas);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: white;
  }
  .incluso.destaque .incluso-icon { background: var(--magenta); }
  .incluso-title {
    font-family: 'Fraunces', serif;
    font-size: 20px;
    color: var(--azul);
    font-weight: 600;
    margin-bottom: 8px;
  }
  .incluso-desc {
    font-size: 14px;
    color: var(--azul-suave);
    line-height: 1.6;
  }
  .incluso-tag-destaque {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--magenta);
    color: white;
    font-size: 9px;
    padding: 4px 10px;
    border-radius: 100px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
  }

  /* ============= INGRESSOS ============= */
  .ingressos {
    background: var(--branco-suave);
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
    background: white;
    border: 1px solid var(--lavanda);
    border-radius: 12px;
    padding: 36px 28px;
    text-align: center;
    transition: all 0.25s;
    position: relative;
    box-shadow: 0 6px 18px rgba(31, 42, 86, 0.06);
  }
  .ingresso:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(142, 155, 209, 0.20); }
  .ingresso.popular {
    background: linear-gradient(180deg, white 0%, var(--rosa-bebe) 100%);
    border: 2px solid var(--magenta);
    transform: scale(1.03);
    box-shadow: 0 14px 36px rgba(201, 95, 163, 0.18);
  }
  .ingresso.popular::before {
    content: 'MAIS POPULAR';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--magenta);
    color: white;
    padding: 6px 20px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
  }
  .ingresso-tipo {
    font-family: 'Fraunces', serif;
    font-size: 26px;
    color: var(--azul);
    letter-spacing: -0.005em;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .ingresso-desc {
    font-size: 13.5px;
    color: var(--azul-suave);
    margin-bottom: 26px;
    min-height: 40px;
    line-height: 1.55;
  }
  .ingresso-preco-wrap {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
    margin-bottom: 6px;
  }
  .ingresso-cifrao {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    color: var(--magenta);
    font-weight: 500;
  }
  .ingresso-valor {
    font-family: 'Fraunces', serif;
    font-size: 76px;
    line-height: 1;
    color: var(--azul);
    font-weight: 600;
    letter-spacing: -0.025em;
  }
  .ingresso-condicao {
    font-size: 11px;
    color: var(--magenta);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 30px;
  }
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
    background: linear-gradient(135deg, var(--lilas) 0%, var(--lilas-escuro) 100%);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 8px 28px rgba(142, 155, 209, 0.30);
  }
  .evento-dados-item {
    padding: 28px 22px;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.18);
  }
  .evento-dados-item:last-child { border-right: none; }
  .evento-dados-icon {
    font-size: 22px;
    margin-bottom: 8px;
  }
  .evento-dados-label {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 6px;
  }
  .evento-dados-valor {
    font-size: 14px;
    color: white;
    font-weight: 600;
    line-height: 1.45;
  }

  /* ============= LOCAL ============= */
  .local {
    background: var(--lavanda);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    color: var(--azul);
  }
  .local .watermark { color: var(--lilas); left: -40px; top: 60px; opacity: 0.15; }
  .local-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  .local .section-title-big .magenta { color: var(--magenta); }
  .local-desc {
    font-size: 17px;
    color: var(--azul-suave);
    margin-bottom: 32px;
    line-height: 1.7;
  }
  .local-desc strong { color: var(--azul); font-weight: 600; }
  .local-detalhes { display: flex; flex-direction: column; gap: 20px; }
  .local-detalhe {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .local-detalhe-icon {
    width: 40px;
    height: 40px;
    background: var(--lilas);
    color: white;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }
  .local-detalhe-label {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 4px;
    color: var(--magenta);
  }
  .local-detalhe-valor { font-size: 15px; font-weight: 500; line-height: 1.45; color: var(--azul); }
  .local-img {
    aspect-ratio: 1 / 1;
    border-radius: 12px;
    overflow: hidden;
    background: white;
    min-height: 380px;
    box-shadow: 0 12px 36px rgba(31, 42, 86, 0.12);
  }
  .local-img img,
  .local-img iframe { width: 100%; height: 100%; object-fit: cover; }

  /* ============= FAQ ============= */
  .faq {
    background: var(--branco-suave);
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
    background: white;
    border: 1px solid var(--lavanda);
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 24px 28px;
    box-shadow: 0 2px 8px rgba(31, 42, 86, 0.04);
    transition: all 0.2s;
  }
  .faq-item:hover { border-color: var(--lilas); }
  .faq-q {
    font-family: 'Fraunces', serif;
    font-size: 19px;
    color: var(--azul);
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
  .faq-q::before {
    content: '+';
    color: var(--magenta);
    font-family: 'Fraunces', serif;
    font-size: 26px;
    line-height: 1;
    font-weight: 500;
  }
  .faq-a {
    font-size: 15px;
    color: var(--azul-suave);
    line-height: 1.7;
    padding-left: 28px;
  }
  .faq-a strong { color: var(--azul); font-weight: 600; }

  /* ============= CTA FINAL ============= */
  .cta-final {
    background: linear-gradient(135deg, var(--lilas) 0%, var(--lilas-escuro) 100%);
    padding: 100px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    color: white;
  }
  .cta-final::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(201, 95, 163, 0.22) 0%, transparent 70%);
  }
  .cta-final-content { position: relative; z-index: 2; }
  .cta-final h2 {
    font-family: 'Fraunces', serif;
    font-size: 76px;
    line-height: 1.05;
    color: white;
    margin-bottom: 18px;
    letter-spacing: -0.018em;
    font-weight: 600;
  }
  .cta-final h2 .accent { color: var(--rosa-bebe); font-style: italic; font-weight: 500; }
  .cta-final p {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.92);
    margin-bottom: 44px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* ============= FOOTER ============= */
  footer {
    background: var(--branco-suave);
    border-top: 1px solid var(--lavanda);
    padding: 56px 0 32px;
    text-align: center;
    color: var(--azul-suave);
    font-size: 13px;
  }
  footer .nav-logo {
    margin-bottom: 18px;
    justify-content: center;
  }
  footer .nav-logo img {
    height: 96px;
  }
  footer p { margin-bottom: 6px; }
  footer a { color: var(--magenta); text-decoration: none; font-weight: 600; }
  footer a:hover { text-decoration: underline; }

  /* ============= RESPONSIVO ============= */
  @media (max-width: 900px) {
    /* Hero */
    .hero { padding: 40px 0 60px; min-height: auto; }
    .hero-layout { grid-template-columns: 1fr; gap: 0; }
    .hero-img-wrap { display: none; }
    .hero-mobile-img { display: block; }
    .hero-headline { font-size: 48px; line-height: 1.0; }
    .hero-content { text-align: center; }
    .hero-meta { flex-direction: column; align-items: stretch; gap: 6px; margin: 20px 0 24px; }
    .hero-meta-item { font-size: 11px; padding: 7px 14px; justify-content: center; }
    .hero-hook { font-size: 18px; line-height: 1.3; }
    .hero-sub { font-size: 16px; line-height: 1.35; }
    .hero-desc { font-size: 14px; line-height: 1.5; margin-bottom: 28px; }
    /* Títulos e textos gerais */
    .section-title-big { font-size: 40px; }
    .nav-logo img { height: 52px; }
    .cta-final h2 { font-size: 56px; }
    /* Stats */
    .stats-bar-inner { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    /* Grids de conteúdo */
    .aprende-grid, .inclusos-grid, .ingressos-grid { grid-template-columns: 1fr; }
    .dor-grid { grid-template-columns: 1fr; }
    .palestra.span2 { grid-column: span 1; }
    /* Dor — foto ao final */
    .dor-layout { grid-template-columns: 1fr; gap: 32px; }
    .dor-direita { order: 10; }
    .dor-direita .dor-header-img { aspect-ratio: 3 / 4; }
    /* Palestrantes — 1 por linha */
    .palestrantes-grid { grid-template-columns: 1fr; }
    /* Evento dados — 2 cols */
    .evento-dados {
      grid-template-columns: repeat(2, 1fr);
      border-radius: 10px;
    }
    .evento-dados-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.18); }
    .evento-dados-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.18); }
    .evento-dados-item:last-child,
    .evento-dados-item:nth-last-child(2):nth-child(odd) { border-bottom: none; }
    /* Local */
    .local-grid { grid-template-columns: 1fr; gap: 40px; }
    /* Padding geral */
    section, .dor, .aprende, .versus, .palestrantes, .inclusos, .ingressos, .local, .faq, .cta-final { padding: 60px 0; }
    .ingresso.popular { transform: scale(1); }
    .watermark { font-size: 100px; }
  }
</style>

<!-- ============= NAV ============= -->
<nav>
  <div class="nav-inner">
    <a href="#" class="nav-logo" aria-label="Baby Talks Santo Anjo">
      <img src="/images/logo-baby-talks.png" alt="Baby Talks Santo Anjo" />
    </a>
    <a href="#ingressos" class="nav-cta">Garantir vaga</a>
  </div>
</nav>

<!-- ============= HERO ============= -->
<section class="hero">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-content">
        <div class="hero-meta">
          <div class="hero-meta-item"><span class="hero-meta-icon">📅</span>15 de agosto · sábado</div>
          <div class="hero-meta-item"><span class="hero-meta-icon">📍</span>Teatro Santo Anjo · Barigui</div>
          <div class="hero-meta-item"><span class="hero-meta-icon">⏱️</span>8h30 às 13h30</div>
        </div>
        <p class="hero-hook">Em um sábado, vocês vão criar</p>
        <h1 class="hero-headline">A sua<br>preparação<br>pra ser <span class="accent">pais.</span></h1>
        <p class="hero-sub">a que o livro não dá, o curso não entrega e o Instagram não substitui.</p>
        <p class="hero-desc">Mais do que aprender teoria, vocês vão sair sabendo <strong>o que fazer</strong> no parto, na amamentação, no sono do bebê e nas primeiras semanas em casa. 05 palestras completas com os melhores especialistas.</p>
        <a href="#ingressos" class="btn-magenta">Quero garantir meu ingresso</a>
        <div class="hero-mobile-img">
          <img src="/images/hero-casal.jpg" alt="Casal grávido" />
        </div>
      </div>
      <div class="hero-img-wrap">
        <div class="hero-img-shape">
          <img src="/images/hero-casal.jpg" alt="Casal grávido" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============= DOR ============= -->
<section class="dor">
  <span class="watermark">DÚVIDAS</span>
  <div class="container">
    <div class="dor-layout">
      <div class="dor-esquerda">
        <span class="section-tag">Vocês reconhecem isso?</span>
        <h2 class="section-title-big">As dúvidas que <span class="magenta">ninguém</span><br>respondeu até agora.</h2>
        <p class="section-sub">Vocês já leram três livros, salvaram 40 posts e o obstetra responde em 5 minutos. Mesmo assim, tem perguntas que continuam virando a madrugada.</p>

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

      <div class="dor-direita">
        <div class="dor-header-img">
          <img src="/images/local-portrait.jpg" alt="Mãe gestante">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============= O QUE VAI APRENDER (FUNDO MAGENTA) ============= -->
<section class="aprende" id="programa">
  <span class="watermark">PROGRAMA</span>
  <div class="container">
    <span class="section-tag">A imersão</span>
    <h2 class="section-title-big">O que vocês vão<br><span class="magenta">aprender de verdade</span></h2>
    <p class="section-sub">Cinco palestras na ordem em que a vida acontece: da gravidez ao bebê em casa. Conteúdo construído a partir da escuta de centenas de mães.</p>

    <div class="aprende-grid">

      <div class="palestra">
        <div class="palestra-num">01</div>
        <div class="palestra-badge tema-gestacao">Gestação</div>
        <div class="palestra-title">A gravidez que vocês não aprenderam na internet</div>
        <div class="palestra-desc">Preparação para o parto, saúde emocional, mudanças no corpo que ninguém te conta. Abertura forte, pro casal entrar sintonizado.</div>
        <div class="palestra-tags">
          <span>Preparação</span><span>Saúde emocional</span><span>Corpo</span>
        </div>
      </div>

      <div class="palestra">
        <div class="palestra-num">02</div>
        <div class="palestra-badge tema-parto">Parto</div>
        <div class="palestra-title">O dia do parto: do início ao fim</div>
        <div class="palestra-desc">Reconhecer o trabalho de parto, parto normal, cesárea, dor, analgesia, violência obstétrica, primeiras horas do bebê.</div>
        <div class="palestra-tags">
          <span>Trabalho de parto</span><span>Cesárea</span><span>Direitos</span>
        </div>
      </div>

      <div class="palestra destaque">
        <div class="palestra-num">03</div>
        <div class="palestra-badge tema-amamentacao">Amamentação</div>
        <div class="palestra-title">Amamentação: da teoria para o peito</div>
        <div class="palestra-desc"><strong>Eleito o tema mais desejado da pesquisa.</strong> Pega correta, posições, primeiros sete dias e dificuldades reais.</div>
        <div class="palestra-tags">
          <span>Pega</span><span>Posições</span><span>Primeiros dias</span>
        </div>
      </div>

      <div class="palestra">
        <div class="palestra-num">04</div>
        <div class="palestra-badge tema-sono">Primeiros meses</div>
        <div class="palestra-title">Sono do bebê e rotina real</div>
        <div class="palestra-desc">Sono seguro, ciclos do bebê, cólica, choro e expectativa realista da rotina das primeiras semanas. Sem promessa mágica.</div>
        <div class="palestra-tags">
          <span>Sono seguro</span><span>Cólica</span><span>Rotina</span>
        </div>
      </div>

      <div class="palestra span2">
        <div class="palestra-num">05</div>
        <div class="palestra-badge tema-fechamento">Fechamento</div>
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
    <h2 class="section-title-big">Os melhores especialistas<br><span class="magenta">com conteúdo real.</span></h2>
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
    <h2 class="section-title-big">Vocês não levam só conteúdo.<br><span class="magenta">Levam tudo isso.</span></h2>
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
        <div class="incluso-desc">Estacionamento gratuito no teatro. Estacionem tranquilos, sem se preocupar com tempo.</div>
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
    <h2 class="section-title-big">Garantam a vaga<br><span class="magenta">enquanto dá tempo.</span></h2>
    <p class="section-sub" style="margin-left: auto; margin-right: auto;">O 1º lote é o preço mais baixo da temporada. Quando esgotar, sobe pro 2º lote.</p>

    <div class="ingressos-grid">

      <div class="ingresso">
        <div class="ingresso-tipo">Individual</div>
        <div class="ingresso-desc">Pra quem vai sozinha ou cujo parceiro não pode acompanhar.</div>
        <div class="ingresso-preco-wrap">
          <span class="ingresso-cifrao">R$</span>
          <span class="ingresso-valor">150</span>
        </div>
        <div class="ingresso-condicao">1 ingresso · 1º lote</div>
        <a href="#" class="ingresso-btn">Comprar individual</a>
      </div>

      <div class="ingresso popular">
        <div class="ingresso-tipo">Acompanhante</div>
        <div class="ingresso-desc">Você + parceiro(a). O mais escolhido, e o que o evento foi feito pra ser.</div>
        <div class="ingresso-preco-wrap">
          <span class="ingresso-cifrao">R$</span>
          <span class="ingresso-valor">250</span>
        </div>
        <div class="ingresso-condicao">2 ingressos · 1º lote</div>
        <a href="#" class="ingresso-btn">Comprar com acompanhante</a>
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
        <h2 class="section-title-big">Teatro Santo Anjo.<br><span class="magenta">Unidade Barigui.</span></h2>
        <p class="local-desc">O mais novo espaço cultural de Curitiba, no Mossunguê. Ar-condicionado, acessível, com estacionamento gratuito no local.</p>

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
              <div class="local-detalhe-valor">Gratuito · sem custo adicional</div>
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
    <h2 class="section-title-big" style="text-align: center; max-width: 820px; margin: 0 auto 48px;">A gente já adianta<br><span class="magenta">as principais.</span></h2>

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
    <h2>Cheguem no parto<br><span class="accent">sabendo o que fazer.</span></h2>
    <p>Vagas limitadas. O 1º lote é o preço mais baixo da temporada.</p>
    <a href="#ingressos" class="btn-magenta">Quero meu ingresso agora</a>
  </div>
</section>

<!-- ============= FOOTER ============= -->
<footer>
  <div class="container">
    <a href="#" class="nav-logo footer-logo" aria-label="Baby Talks Santo Anjo">
      <img src="/images/logo-baby-talks.png" alt="Baby Talks Santo Anjo" />
    </a>
    <p>Seminário Imersivo para Casais Grávidos · Curitiba/PR</p>
    <p>Dúvidas? Fale com a gente: <a href="mailto:contato@babytalks.com.br">contato@babytalks.com.br</a></p>
    <p style="margin-top: 20px; font-size: 10px; opacity: 0.5;">© 2026 Baby Talks Santo Anjo. Todos os direitos reservados.</p>
  </div>
</footer>

`;

function Index() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
