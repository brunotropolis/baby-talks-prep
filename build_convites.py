"""
Gera páginas de convite (parceiros/palestrantes) com 20% de desconto.
Cada URL vira /<slug>/index.html no GH Pages.

Uso: python build_convites.py         (roda TUDO)
     python build_convites.py dosanjos (roda só um pra preview)
"""
import re
import os
import sys
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "index.html"

# (slug, cupom, nome exibido, quem apresenta — pode ser "" pra genérico)
CONVITES = [
    ("dayane",    "DAYANE20",    "Manual do Recém-Nascido",  "Dayane dos Anjos"),
    ("juliana",   "JULIANA20",   "Dra. Juliana Chalupe",      "Juliana Chalupe"),
    ("patricia",  "PATRICIA20",  "Patrícia Moreira",           "Patrícia Moreira"),
    ("alline",    "ALLINE20",    "Alline Vieira",              "Alline Vieira"),
    ("vittalice", "VITA20",      "Vittalice Saúde",            "Paula Grip"),
    ("dosanjos",  "DOSANJOS20",  "Dos Anjos Fotografia",       "Priscilla Oliveira"),
    ("karen",     "KAREN20",     "Vacinemais",                 "Karen Bazilio"),
    ("rafaelbruns","RAFAEL20",   "Dr. Rafael Bruns",           "Rafael Bruns"),
    ("vacinemais","VACINE20",    "Vacinemais",                 ""),
    ("vilacarlota","CARLOTA20",  "Vila Carlota",               ""),
    ("muitafesta","FESTA20",     "Muita Festa",                "Fabi Youssef"),
    ("santoanjo", "SANTO20",     "Colégio Santo Anjo",         ""),
]

CHECKOUT_BASE = "https://www.diskingressos.com.br/event/3351"

# Preços
IND_ORIG, DUP_ORIG = 180, 260
DESCONTO = 0.20
def preco(v): return int(round(v * (1 - DESCONTO)))

# CSS extra pra banner + preço riscado
EXTRA_CSS = """
  /* Convite — banner + preços riscados */
  .convite-banner {
    display: block; max-width: 720px; margin: 0 auto 30px;
    padding: 22px 26px;
    background: linear-gradient(135deg, #F4DCE8 0%, #E4E6F2 100%);
    border: 1.5px solid rgba(201, 95, 163, 0.35);
    border-radius: 18px; text-align: center;
    box-shadow: 0 12px 30px rgba(201, 95, 163, 0.14);
  }
  .convite-banner-eyebrow {
    display: inline-block; font-size: 11px; letter-spacing: 2.5px;
    text-transform: uppercase; color: var(--magenta); font-weight: 700;
    margin-bottom: 8px;
  }
  .convite-banner h3 {
    font-family: 'Fraunces', 'Fraunces Fallback', serif;
    font-size: 22px; color: var(--azul); font-weight: 600; line-height: 1.3;
    margin: 0 0 6px;
  }
  .convite-banner h3 .destaque { color: var(--magenta); font-style: italic; }
  .convite-banner p {
    font-size: 14px; color: var(--azul-suave); margin: 0;
  }
  .convite-banner .cupom {
    display: inline-block; background: #fff; border: 1.5px dashed var(--magenta);
    border-radius: 100px; padding: 6px 16px; margin-top: 10px;
    font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 13px;
    color: var(--magenta); letter-spacing: 0.14em;
  }
  .ingresso-preco-orig {
    font-family: 'DM Sans', sans-serif; font-size: 16px; color: #A0A6C0;
    text-decoration: line-through; margin-bottom: 2px; letter-spacing: 0.02em;
  }
  .ingresso-preco-orig::before { content: "de R$ "; }
  .ingresso-preco-badge {
    display: inline-block; background: var(--verde); color: #fff;
    font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
    padding: 3px 10px; border-radius: 100px; margin-left: 6px;
    text-transform: uppercase; vertical-align: middle;
  }
  @media (max-width: 900px) {
    .convite-banner { margin: 0 16px 24px; padding: 18px 20px; }
    .convite-banner h3 { font-size: 18px; }
  }
"""

def build(slug, cupom, nome, quem):
    src = SRC.read_text(encoding="utf-8")

    # 1) Meta tags: noindex + canonical + title
    src = src.replace(
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
        '<meta name="robots" content="noindex, follow" />'
    )
    novo_title = f"Baby Talks · convidado especial de {nome} · 20% de desconto"
    src = re.sub(r'<title>[^<]*</title>', f'<title>{novo_title}</title>', src, count=1)
    src = src.replace(
        '<link rel="canonical" href="https://babytalks.com.br/" />',
        f'<link rel="canonical" href="https://babytalks.com.br/{slug}/" />'
    )

    # 2) Injetar CSS extra antes de </style> (o 1º style — dos design tokens)
    src = src.replace('</style>', EXTRA_CSS + '\n</style>', 1)

    # 3) Trocar o subtítulo da seção Ingressos pelo banner "convidado especial"
    frase = f"Você é <span class=\"destaque\">convidado especial</span> de <span class=\"destaque\">{nome}</span>"
    if quem:
        subcopy = f"Cortesia de {quem}. Ganhe <strong>20% de desconto</strong> nos ingressos do Baby Talks."
    else:
        subcopy = f"Cortesia da {nome}. Ganhe <strong>20% de desconto</strong> nos ingressos do Baby Talks."

    banner = f"""<div class="convite-banner">
      <span class="convite-banner-eyebrow">🎁 Convite especial</span>
      <h3>{frase}</h3>
      <p>{subcopy}</p>
      <div class="cupom">Cupom: {cupom}</div>
    </div>"""

    # Substitui o subtítulo antigo + o badge de lote pelo banner
    src = src.replace(
        '<span class="ingresso-lote-badge">🔥 1º Lote · Promocional</span>\n'
        '    <h2 class="section-title-big">Garanta sua <span class="magenta">participação.</span></h2>\n'
        '    <p class="section-sub">Valor especial para o primeiro lote, ingressos limitados.</p>',
        f'<h2 class="section-title-big">Garanta sua <span class="magenta">participação.</span></h2>\n'
        f'    {banner}'
    )

    # 4) Preços com riscado
    ind_new = preco(IND_ORIG)
    dup_new = preco(DUP_ORIG)

    # Card individual
    src = src.replace(
        '<div class="ingresso-preco-wrap">\n'
        '          <span class="ingresso-cifrao">R$</span>\n'
        f'          <span class="ingresso-valor">{IND_ORIG}</span>\n'
        '        </div>\n'
        '        <div class="ingresso-condicao">1 ingresso · 1º lote</div>',
        f'<div class="ingresso-preco-orig">{IND_ORIG}</div>\n'
        f'        <div class="ingresso-preco-wrap">\n'
        f'          <span class="ingresso-cifrao">R$</span>\n'
        f'          <span class="ingresso-valor">{ind_new}</span>\n'
        f'          <span class="ingresso-preco-badge">-20%</span>\n'
        f'        </div>\n'
        f'        <div class="ingresso-condicao">1 ingresso · com cupom {cupom}</div>'
    )
    # Card duplo
    src = src.replace(
        '<div class="ingresso-preco-wrap">\n'
        '          <span class="ingresso-cifrao">R$</span>\n'
        f'          <span class="ingresso-valor">{DUP_ORIG}</span>\n'
        '        </div>\n'
        '        <div class="ingresso-condicao">2 ingressos · 1º lote</div>',
        f'<div class="ingresso-preco-orig">{DUP_ORIG}</div>\n'
        f'        <div class="ingresso-preco-wrap">\n'
        f'          <span class="ingresso-cifrao">R$</span>\n'
        f'          <span class="ingresso-valor">{dup_new}</span>\n'
        f'          <span class="ingresso-preco-badge">-20%</span>\n'
        f'        </div>\n'
        f'        <div class="ingresso-condicao">2 ingressos · com cupom {cupom}</div>'
    )

    # 5) Trocar os 2 CTAs de compra + o CTA final pra levar cupom na URL
    checkout_url = f"{CHECKOUT_BASE}#{cupom}"
    # Só substituir os que estão nos botões (não o card de parceiro do rodapé)
    src = src.replace(
        '<a href="https://www.diskingressos.com.br/event/3351" target="_blank" rel="noopener" class="ingresso-btn">Comprar individual</a>',
        f'<a href="{checkout_url}" target="_blank" rel="noopener" class="ingresso-btn">Comprar individual · {cupom}</a>'
    )
    src = src.replace(
        '<a href="https://www.diskingressos.com.br/event/3351" target="_blank" rel="noopener" class="ingresso-btn">Comprar duplo</a>',
        f'<a href="{checkout_url}" target="_blank" rel="noopener" class="ingresso-btn">Comprar duplo · {cupom}</a>'
    )
    src = src.replace(
        '<a href="https://www.diskingressos.com.br/event/3351" target="_blank" rel="noopener" class="btn-magenta">Quero viver o Baby Talks</a>',
        f'<a href="{checkout_url}" target="_blank" rel="noopener" class="btn-magenta">Quero viver o Baby Talks · {cupom}</a>'
    )

    # Salvar
    out_dir = ROOT / slug
    out_dir.mkdir(exist_ok=True)
    (out_dir / "index.html").write_text(src, encoding="utf-8")
    print(f"  ✓ /{slug}/index.html — {nome} ({cupom}) — R${IND_ORIG}→R${ind_new} / R${DUP_ORIG}→R${dup_new}")

if __name__ == "__main__":
    filter_slug = sys.argv[1] if len(sys.argv) > 1 else None
    for slug, cupom, nome, quem in CONVITES:
        if filter_slug and slug != filter_slug: continue
        build(slug, cupom, nome, quem)
    print(f"\nOK — {'1 página' if filter_slug else str(len(CONVITES)) + ' páginas'} gerada(s).")
