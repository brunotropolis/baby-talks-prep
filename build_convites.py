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

# (slug, cupom, nome exibido, quem apresenta, prep)
# prep = preposição usada com `nome` no texto (de / da / do)
# se `quem` preenchido, cortesia usa "de {quem}" (pessoa); senão usa "{prep} {nome}"
CONVITES = [
    ("dayane",    "DAYANE20",    "Manual do Recém-Nascido",  "Dayane dos Anjos",    "do"),
    ("juliana",   "JULIANA20",   "Dra. Juliana Chalupe",      "Juliana Chalupe",     "da"),
    ("patricia",  "PATRICIA20",  "Patrícia Moreira",           "Patrícia Moreira",    "de"),
    ("alline",    "ALLINE20",    "Alline Vieira",              "Alline Vieira",       "de"),
    ("vittalice", "VITA20",      "Vittalice Saúde",            "Paula Grip",          "da"),
    ("dosanjos",  "DOSANJOS20",  "Dos Anjos Fotografia",       "Priscilla Oliveira",  "da"),
    ("karen",     "KAREN20",     "Vacinemais",                 "Karen Bazilio",       "da"),
    ("rafaelbruns","RAFAEL20",   "Dr. Rafael Bruns",           "Rafael Bruns",        "do"),
    ("vacinemais","VACINE20",    "Vacinemais",                 "",                    "da"),
    ("vilacarlota","CARLOTA20",  "Vila Carlota",               "",                    "da"),
    ("muitafesta","FESTA20",     "Muita Festa",                "Fabi Youssef",        "da"),
    ("santoanjo", "SANTO20",     "Colégio Santo Anjo",         "",                    "do"),
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
  .ingresso-validade {
    font-family: 'DM Sans', sans-serif; font-size: 13px;
    color: var(--magenta); font-weight: 800;
    margin-top: -18px; margin-bottom: 24px;
    letter-spacing: 0.02em;
  }
  .ingresso-validade::before { content: "⏳ "; }
  @media (max-width: 900px) {
    .convite-banner { margin: 0 16px 24px; padding: 18px 20px; }
    .convite-banner h3 { font-size: 18px; }
  }
"""

def build(slug, cupom, nome, quem, prep):
    # FASE: evento com alteração de data — páginas de convite estão em modo AVISO.
    # Só ajusta noindex + canonical + title. Cupom/preço/checkout ficam desativados
    # (o próprio index.html principal já mostra o aviso, sem botão de compra).
    src = SRC.read_text(encoding="utf-8")

    src = src.replace(
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
        '<meta name="robots" content="noindex, follow" />'
    )
    novo_title = f"Baby Talks · aguarde novidades ({nome})"
    src = re.sub(r'<title>[^<]*</title>', f'<title>{novo_title}</title>', src, count=1)
    src = src.replace(
        '<link rel="canonical" href="https://babytalks.com.br/" />',
        f'<link rel="canonical" href="https://babytalks.com.br/{slug}/" />'
    )

    out_dir = ROOT / slug
    out_dir.mkdir(exist_ok=True)
    (out_dir / "index.html").write_text(src, encoding="utf-8")
    print(f"  ✓ /{slug}/index.html — {nome} (modo AVISO)")

if __name__ == "__main__":
    filter_slug = sys.argv[1] if len(sys.argv) > 1 else None
    for slug, cupom, nome, quem, prep in CONVITES:
        if filter_slug and slug != filter_slug: continue
        build(slug, cupom, nome, quem, prep)
    print(f"\nOK — {'1 página' if filter_slug else str(len(CONVITES)) + ' páginas'} gerada(s).")
