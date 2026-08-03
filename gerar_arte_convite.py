"""
Gera a arte de convite (feed IG 1080x1350) para cada parceiro/palestrante.
Uso: python gerar_arte_convite.py dosanjos   (só um)
     python gerar_arte_convite.py            (todos)
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).parent
OUT = ROOT / "artes-convite"
OUT.mkdir(exist_ok=True)
FONTS = ROOT / "fonts"

# Paleta do site
AZUL       = (31, 42, 86)
AZUL_SOFT  = (31, 42, 86, 178)   # 70% alpha
MAGENTA    = (201, 95, 163)
MAGENTA_SUAVE = (216, 159, 196)
LILAS      = (142, 155, 209)
LAVANDA    = (228, 230, 242)
ROSA_BEBE  = (244, 220, 232)
CREME      = (248, 247, 244)
VERDE      = (46, 166, 108)
BRANCO     = (255, 255, 255)

# Convites (mesmo do build_convites)
CONVITES = [
    ("dayane",     "DAYANE20",    "Manual do Recém-Nascido",  "Dayane dos Anjos",    "do",  "manual-do-recem-nascido.png",   "organizadores"),
    ("juliana",    "JULIANA20",   "Dra. Juliana Chalupe",     "Juliana Chalupe",     "da",  None,                            None),
    ("patricia",   "PATRICIA20",  "Patrícia Moreira",         "Patrícia Moreira",    "de",  "boa-gravidez.png",              "parceiros"),
    ("alline",     "ALLINE20",    "Alline Vieira",            "Alline Vieira",       "de",  None,                            None),
    ("vittalice",  "VITA20",      "Vittalice Saúde",          "Paula Grip",          "da",  "vittalice.png",                 "parceiros"),
    ("dosanjos",   "DOSANJOS20",  "Dos Anjos Fotografia",     "Priscilla Oliveira",  "da",  "dos-anjos-fotografia.png",      "parceiros"),
    ("karen",      "KAREN20",     "Vacinemais",               "Karen Bazilio",       "da",  "vacine-mais.png",               "parceiros"),
    ("rafaelbruns","RAFAEL20",    "Dr. Rafael Bruns",         "Rafael Bruns",        "do",  "dr-rafael-bruns.png",           "parceiros"),
    ("vacinemais", "VACINE20",    "Vacinemais",               "",                    "da",  "vacine-mais.png",               "parceiros"),
    ("vilacarlota","CARLOTA20",   "Vila Carlota",             "",                    "da",  "vila-carlota.png",              "parceiros"),
    ("muitafesta", "FESTA20",     "Muita Festa",              "Fabi Youssef",        "da",  "muita-festa.png",               "parceiros"),
    ("santoanjo",  "SANTO20",     "Colégio Santo Anjo",       "",                    "do",  "santo-anjo.png",                "organizadores"),
]

# Fontes
def f_serif(size, italic=False):
    file = "fraunces-6NU58FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChjeveQ.woff2" if italic \
           else "fraunces-6NU78FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0KxC9TeA.woff2"
    return ImageFont.truetype(str(FONTS / file), size)

def f_sans(size):
    return ImageFont.truetype(str(FONTS / "dmsans-rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2"), size)

def f_display(size):  # Anton
    return ImageFont.truetype(str(FONTS / "anton-1Ptgg87LROyAm3Kz-C8.woff2"), size)

W, H = 1080, 1350

def bg_gradient():
    """Fundo com gradiente vertical creme → rosa suave, com blob orgânico lilás."""
    img = Image.new("RGB", (W, H), CREME)
    px = img.load()
    for y in range(H):
        t = y / H
        # creme (248,247,244) → rosa (244,220,232) → lavanda (228,230,242) no final
        if t < 0.5:
            tt = t / 0.5
            r = int(CREME[0] * (1-tt) + ROSA_BEBE[0] * tt)
            g = int(CREME[1] * (1-tt) + ROSA_BEBE[1] * tt)
            b = int(CREME[2] * (1-tt) + ROSA_BEBE[2] * tt)
        else:
            tt = (t - 0.5) / 0.5
            r = int(ROSA_BEBE[0] * (1-tt) + LAVANDA[0] * tt)
            g = int(ROSA_BEBE[1] * (1-tt) + LAVANDA[1] * tt)
            b = int(ROSA_BEBE[2] * (1-tt) + LAVANDA[2] * tt)
        for x in range(W):
            px[x, y] = (r, g, b)
    # Blobs orgânicos suaves
    blob = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    bd = ImageDraw.Draw(blob)
    bd.ellipse([-200, -200, 500, 500], fill=(*LILAS, 55))
    bd.ellipse([700, 900, 1300, 1500], fill=(*MAGENTA_SUAVE, 60))
    blob = blob.filter(ImageFilter.GaussianBlur(120))
    img = Image.alpha_composite(img.convert("RGBA"), blob).convert("RGB")
    return img

def circular(img, size):
    """Recorta imagem em círculo tamanho size."""
    img = img.convert("RGBA")
    src = img.resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size, size), fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(src, (0, 0), mask)
    return out

def text_w(draw, text, font):
    bb = draw.textbbox((0, 0), text, font=font)
    return bb[2] - bb[0]

def draw_centered(draw, y, text, font, fill):
    w = text_w(draw, text, font)
    draw.text(((W - w) // 2, y), text, font=font, fill=fill)

def build(slug, cupom, nome, quem, prep, logo_file, logo_folder):
    img = bg_gradient()
    d = ImageDraw.Draw(img, "RGBA")

    # ===== Faixa superior fina magenta com data =====
    d.rectangle([0, 0, W, 46], fill=MAGENTA)
    top_text = "22 · AGOSTO · SÁBADO · TEATRO SANTO ANJO · CURITIBA"
    tf = f_display(20)
    tw = text_w(d, top_text, tf)
    d.text(((W - tw) // 2, 12), top_text, font=tf, fill=BRANCO)

    y = 100

    # ===== Logo Baby Talks =====
    logo = Image.open(ROOT / "images" / "logo-baby-talks.png").convert("RGBA")
    logo_h = 150
    logo_w = int(logo.width * logo_h / logo.height)
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)
    img.paste(logo, ((W - logo_w) // 2, y), logo)
    y += logo_h + 30

    # ===== Eyebrow "Convite especial" =====
    eyebrow = "🎁 CONVITE ESPECIAL"
    ef = f_sans(20)
    ew = text_w(d, eyebrow, ef)
    # pill
    px1, py1 = (W - ew) // 2 - 22, y - 6
    px2, py2 = px1 + ew + 44, y + 32
    d.rounded_rectangle([px1, py1, px2, py2], radius=30, fill=(*ROSA_BEBE, 220), outline=MAGENTA, width=2)
    d.text(((W - ew) // 2, y), eyebrow, font=ef, fill=MAGENTA)
    y += 70

    # ===== Logo do parceiro (círculo) =====
    logo_size = 200
    if logo_file:
        parc = Image.open(ROOT / "images" / logo_folder / logo_file).convert("RGBA")
        parc_circ = circular(parc, logo_size)
        # borda branca
        border = Image.new("RGBA", (logo_size + 20, logo_size + 20), (0, 0, 0, 0))
        bd = ImageDraw.Draw(border)
        bd.ellipse((0, 0, logo_size + 20, logo_size + 20), fill=BRANCO)
        img.paste(border, ((W - (logo_size + 20)) // 2, y - 10), border)
        img.paste(parc_circ, ((W - logo_size) // 2, y), parc_circ)
    y += logo_size + 30

    # ===== "Cortesia de/da/do ..." =====
    if quem:
        cortesia = f"Cortesia de {quem}"
    else:
        cortesia = f"Cortesia {prep} {nome}"
    cf = f_sans(24)
    draw_centered(d, y, cortesia, cf, AZUL)
    y += 55

    # ===== Headline serif =====
    line1 = "Você é convidada"
    line2 = "especial."
    hf1 = f_serif(72)
    hf2 = f_serif(72, italic=True)
    draw_centered(d, y, line1, hf1, AZUL)
    y += 80
    # "especial." em italic magenta
    ew = text_w(d, line2, hf2)
    d.text(((W - ew) // 2, y), line2, font=hf2, fill=MAGENTA)
    y += 100

    # ===== Preços =====
    # Duas colunas: Individual | Duplo
    col_w = 380
    gap = 60
    total_w = col_w * 2 + gap
    start_x = (W - total_w) // 2

    def price_card(x, tipo, orig, novo):
        # card com fundo branco suave
        d.rounded_rectangle([x, y, x + col_w, y + 200], radius=24, fill=(*BRANCO, 220), outline=(*LILAS, 160), width=2)
        tf = f_sans(18)
        tw2 = text_w(d, tipo, tf)
        d.text((x + (col_w - tw2) // 2, y + 22), tipo, font=tf, fill=AZUL)
        # de RXXX (riscado)
        orig_f = f_sans(20)
        orig_txt = f"de R$ {orig}"
        ow = text_w(d, orig_txt, orig_f)
        ox = x + (col_w - ow) // 2
        oy = y + 60
        d.text((ox, oy), orig_txt, font=orig_f, fill=(150, 155, 175))
        # linha do risco
        bb = d.textbbox((ox, oy), orig_txt, font=orig_f)
        d.line([bb[0], (bb[1] + bb[3]) // 2, bb[2], (bb[1] + bb[3]) // 2], fill=(150, 155, 175), width=2)
        # R$ NOVO (grande)
        nf = f_serif(66)
        cifrao_f = f_serif(28)
        cifrao_w = text_w(d, "R$", cifrao_f)
        num_w = text_w(d, str(novo), nf)
        block_w = cifrao_w + 8 + num_w
        bx = x + (col_w - block_w) // 2
        d.text((bx, y + 105), "R$", font=cifrao_f, fill=MAGENTA)
        d.text((bx + cifrao_w + 8, y + 92), str(novo), font=nf, fill=AZUL)

    price_card(start_x, "INDIVIDUAL", 180, 144)
    price_card(start_x + col_w + gap, "DUPLO", 260, 208)
    y += 230

    # ===== Selo -20% grande no meio? Não, ficou implícito. Vou colocar linha texto forte =====
    off = "20% DE DESCONTO EXCLUSIVO"
    off_f = f_sans(24)
    ow = text_w(d, off, off_f)
    # box magenta
    pad_x, pad_y = 26, 12
    bx1 = (W - ow) // 2 - pad_x
    bx2 = bx1 + ow + 2 * pad_x
    by1 = y - 4
    by2 = y + 34
    d.rounded_rectangle([bx1, by1, bx2, by2], radius=24, fill=MAGENTA)
    d.text(((W - ow) // 2, y), off, font=off_f, fill=BRANCO)
    y += 62

    # ===== CTA principal =====
    cta = "GARANTA SEU INGRESSO"
    cta_f = f_sans(26)
    cw = text_w(d, cta, cta_f)
    cta_w = cw + 90
    cta_h = 74
    cx1 = (W - cta_w) // 2
    cy1 = y
    d.rounded_rectangle([cx1, cy1, cx1 + cta_w, cy1 + cta_h], radius=40, fill=VERDE)
    # seta →
    arrow_f = f_sans(30)
    d.text((cx1 + (cta_w - cw) // 2, cy1 + 20), cta, font=cta_f, fill=BRANCO)
    y += cta_h + 22

    # ===== Link babytalks.com.br/slug =====
    link = f"babytalks.com.br/{slug}"
    lf = f_sans(24)
    draw_centered(d, y, link, lf, AZUL)
    y += 44

    # ===== Rodapé: validade =====
    val = "⏳ CUPOM VÁLIDO ATÉ 07/08 · APENAS 20 PRIMEIRAS"
    vf = f_sans(16)
    vw = text_w(d, val, vf)
    d.text(((W - vw) // 2, y), val, font=vf, fill=MAGENTA)

    out_path = OUT / f"{slug}.png"
    img.save(out_path, "PNG", optimize=True)
    print(f"  ✓ {out_path.name}  ({nome})")
    return out_path

if __name__ == "__main__":
    filter_slug = sys.argv[1] if len(sys.argv) > 1 else None
    for row in CONVITES:
        if filter_slug and row[0] != filter_slug: continue
        build(*row)
    print("OK")
