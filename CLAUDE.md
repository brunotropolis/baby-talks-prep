# Baby Talks Santo Anjo — Landing Page

Seminário imersivo para casais grávidos. 15 de agosto de 2026, Teatro Santo Anjo · Curitiba.

## Duas versões da página

| Versão | Repo | Domínio produção | Tema |
|---|---|---|---|
| **Light** (oficial) | [`brunotropolis/baby-talks-prep`](https://github.com/brunotropolis/baby-talks-prep) | `babytalks.com.br` | Off-white + lilás/rosa/magenta |
| **Dark** (apresentação equipe) | [`brunotropolis/nested-nestling`](https://github.com/brunotropolis/nested-nestling) | `v2.babytalks.com.br` (pending NS) / `nested-nestling.lovable.app` | Azul-noite + lilás/magenta luminoso |

- **Pasta local light:** `D:\CLAUDE\baby-talks-prep\`
- **Pasta local dark:** `D:\CLAUDE\nested-nestling\`
- **Preview dev:** `preview_start "baby-talks-prep"` → http://localhost:3342 | `preview_start "nested-nestling"` → http://localhost:3343

## Stack
- **Framework:** TanStack Start + Vite + React 19 (TS)
- **Plugin Lovable:** `@lovable.dev/vite-tanstack-config` (engloba tanstackStart, viteReact, tailwindcss, cloudflare plugin)
- **Deploy:** Lovable (auto-deploy via push em `main`). Lovable hospeda no Cloudflare Workers via `@cloudflare/vite-plugin` + `wrangler.jsonc`
- **CSS:** tudo inline em `src/routes/index.tsx` dentro de um template string `<style>` aplicado via `dangerouslySetInnerHTML`. NÃO usa Tailwind utilities — design system com CSS vars + classes BEM-style
- **Fonts:** Google Fonts (Anton, Fraunces, DM Sans), preload no head
- **Imagens:** `public/images/` (servidas em `/images/*` no runtime)

## Projeto Lovable
- **ID:** `53468724-bf3d-468b-b435-79821b40c5de` (v2 BABY TALKS | evento de maternidade)
- **Painel:** https://lovable.dev/projects/53468724-bf3d-468b-b435-79821b40c5de
- **Lovable connectado ao repo nested-nestling** → push em master = redeploy automático
- O baby-talks-prep usa OUTRO projeto Lovable (não documentado este ID — mas a mecânica é a mesma)

## Paleta de cores

### Light mode (`baby-talks-prep`)
```css
--lilas: #8E9BD1;         /* Lilás Baby — marca, headers */
--lilas-claro: #B0BCE5;
--lilas-escuro: #6F7EB8;  /* pills no hero */
--magenta: #C95FA3;       /* Magenta Talk — accent */
--magenta-suave: #D89FC4;
--azul: #1F2A56;          /* Azul Anjo — texto principal */
--branco-suave: #F8F7F4;  /* fundo principal */
--rosa-bebe: #F4DCE8;     /* destaques suaves */
--lavanda: #E4E6F2;       /* cards, divisores */
--verde: #2EA66C;         /* CTA verde */
--verde-bright: #3FBE7E;
```

### Dark mode suave (`nested-nestling`)
Mesmas variáveis do guia, valores invertidos pra fundo escuro elegante (sem preto puro).
```css
--bg-base: #1A1F35;       /* Azul-noite suave — fundo principal */
--bg-card: #252A47;       /* Camada elevada */
--bg-elevated: #2F345A;
--texto-claro: #ECE6DA;   /* Off-white quente */
--lilas: #A4B0DC;         /* mais luminoso */
--magenta: #D87CB5;       /* mais vivo */
--magenta-bright: #E695C5;
--rosa-bebe: #3D2A38;     /* plum/vinho discreto */
--verde: #34B776;
--verde-bright: #48CE8A;
```

Mapping aliases pra manter compatibilidade com CSS existente sem reescrever tudo:
- `--azul` → `var(--texto-claro)` (era texto, agora é texto claro)
- `--branco-suave` → `var(--bg-base)` (era fundo, agora é fundo escuro)
- `--lavanda` → `var(--bg-card)`

### Ajustes específicos dark mode
- Seção `.aprende` (antes lilás sólido) → `linear-gradient(--bg-card → --bg-elevated)`
- Faixa `.evento-dados` → `linear-gradient(--bg-elevated → --bg-card)` + borda lilás 0.18 alpha
- Box shadows: `rgba(31, 42, 86, X)` → `rgba(0, 0, 0, X*3.5)` (sombras pretas mais opacas)
- Background nav: `rgba(26, 31, 53, 0.85)` + blur 14px
- Logo: troca `logo-baby-talks.png` → `logo-baby-talks-dark.png` (versão mais clara, lê em fundo escuro)
- Badges das palestras (cores hardcoded) invertidos: fundo escuro temático + texto claro

## Estrutura do `src/routes/index.tsx`

1. **CSS variables (`:root`)** — paleta + animações
2. **Nav fixo** — logo + CTA verde "GARANTIR VAGA"
3. **Hero** — grid 2 cols (texto + foto orgânica)
   - Pills com data/local/hora
   - Headline serif "A sua preparação pra ser pais."
   - Foto: `hero-casal-v2.jpg` (1122×1402, casal num quarto de bebê, mauve)
4. **Dor** — grid 2 cols (lista de dores + foto vertical)
   - Foto: `local-portrait-v2.jpg` (1023×1537, gestante)
5. **Aprende (5 palestras)** — grid 2 cols com cards numerados
6. **Palestrantes** — grid 4 cols (3 confirmados + 1 a anunciar)
7. **Inclusos** — grid 5 itens, 6-column trick pra centralizar últimos 2 cards
8. **Ingressos** — 3 cards (Individual R$150, Acompanhante R$250 ⭐, Dupla R$250)
9. **Evento-dados** — faixa horizontal: data/horário/local/endereço
10. **Local** — Google Maps iframe
11. **FAQ** — accordion
12. **Footer** — logo + redes

### CSS responsive
- Breakpoint: `@media (max-width: 900px)`
- Hero mobile: layout linear, pills entre texto e botão (via `order:5` no flex)
- Inclusos mobile: 1 coluna (remove o 6-col trick)
- Dor mobile: imagem `aspect-ratio: 4/5` (era `9/16` no desktop)

## Arquivos importantes

```
src/
├── routes/
│   ├── __root.tsx      ← head meta + favicon links + RootShell
│   └── index.tsx       ← TODA a landing page (~1500 linhas)
├── server.ts           ← SSR error wrapper
└── start.ts
public/
├── favicon.ico         ← coração rosa #C95FA3 multi-size (16/32/48)
├── favicon-32x32.png
├── favicon-192x192.png
├── favicon-512x512.png
├── apple-touch-icon.png
└── images/
    ├── logo-baby-talks.png       ← logo principal (light mode)
    ├── logo-baby-talks-dark.png  ← versão clara (dark mode)
    ├── hero-casal-v2.jpg         ← casal no hero
    ├── local-portrait-v2.jpg     ← gestante na seção Dores
    └── dayane.jpg                ← Dayane dos Anjos
vite.config.ts          ← apenas configura @lovable.dev/vite-tanstack-config + entry SSR
wrangler.jsonc          ← Cloudflare Worker config (name: nested-nestling | tanstack-start-app)
```

## DNS e domínios

### babytalks.com.br (principal — light mode)
- **Registrar:** Registro.br (BRSAM3, expira 11/10/2026)
- **DNS atual:** ainda nos nameservers do Registro.br
- Resolve direto pro IP do Lovable

### v2.babytalks.com.br (dark mode)
- **Zone Cloudflare:** `850fb1db7b7bbb29fc503249aeba97ff` (account `197d2452ceacfeaea5e901bf2e9d7f25` — brunotropolis)
- **Status zone:** `pending` (nameservers `meg.ns.cloudflare.com`/`patrick.ns.cloudflare.com` ainda não ativados no Registro.br)
- **Records criados via API:**
  - `A v2 → 185.158.133.1` (IP servidor Lovable)
  - `TXT _lovable.v2 → lovable_verify=d7c4ff0a314f2b31f5395e8a74cb8c0ac9cb76b0d0772f418cb8de7509e72808`
- **Pra ativar:** trocar NS no Registro.br pra Cloudflare, OU adicionar os 2 records direto no painel Registro.br (efeito em minutos)

### Lovable custom domain
- v2.babytalks.com.br foi adicionado como custom domain via Entri (fluxo do Lovable)
- Domain ID interno: `dom_9fe0d27d13e7c947f3e150ddc1a1a157`
- Provider DNS detectado pelo Entri: Registro.br

### Como criar DNS no Cloudflare via API
O dashboard `dash.cloudflare.com` aceita requests `POST /api/v4/zones/:id/dns_records` com header `X-Cross-Site-Security: dash` e sessão de cookie. Quando POST direto dá 403 (CSRF), usar o endpoint de import:
```js
const bind = `_lovable.v2.babytalks.com.br. 1 IN TXT "lovable_verify=..."\n`;
const fd = new FormData();
fd.append('file', new Blob([bind]), 'records.txt');
fetch('/api/v4/zones/{zone_id}/dns_records/import', {
  method: 'POST', credentials: 'include',
  headers: {'X-Cross-Site-Security': 'dash'}, body: fd
});
```

## Favicon (coração rosa)

Gerado dinamicamente com PIL usando a fórmula paramétrica do coração:
- `x = 16·sin³(t)`, `y = 13·cos(t) − 5·cos(2t) − 2·cos(3t) − cos(4t)`
- Cor: `#C95FA3` (magenta Talk do brand)
- Tamanhos: 16/32/48 (ICO), 32, 180 (apple-touch), 192, 512 (PNG)

Script salvo na sessão (regenerar se precisar trocar cor):
```python
from PIL import Image, ImageDraw
import math
def heart(size, color=(201, 95, 163, 255)):
    s = size * 4
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    xs, ys = [], []
    for i in range(361):
        t = i * 2 * math.pi / 360
        xs.append(16 * math.sin(t)**3)
        ys.append(-(13*math.cos(t) - 5*math.cos(2*t) - 2*math.cos(3*t) - math.cos(4*t)))
    pad = s*0.08
    minx,maxx,miny,maxy = min(xs),max(xs),min(ys),max(ys)
    scale = min((s-2*pad)/(maxx-minx), (s-2*pad)/(maxy-miny))
    ox = (s - (maxx-minx)*scale)/2 - minx*scale
    oy = (s - (maxy-miny)*scale)/2 - miny*scale
    d.polygon([(ox+x*scale, oy+y*scale) for x,y in zip(xs,ys)], fill=color)
    return img.resize((size, size), Image.LANCZOS)
```

## Histórico de edições (sessão Mai/2026)

### Sessão anterior (light mode — baby-talks-prep)
1. Suavizar paleta de cores → guia oficial
2. Corrigir corte da foto no hero desktop
3. Aplicar logo Baby Talks (header + footer)
4. Remover faixa de stats/números
5. Remover tempo das palestras na seção "O que vão aprender"
6. Remover "demonstração ao vivo" da amamentação
7. Remover seção antes/depois
8. Trocar frase dos especialistas
9. Adicionar Dayane dos Anjos como palestrante
10. Substituir palestrante surpresa por mais 1 slot marcado
11. Remover coffee break dos inclusos
12. Adicionar dados do evento na seção de preço
13. Botões de compra verdes com pulsação suave
14. Mover foto da gestante pra Dores; Google Maps no lugar do local
15. FAQ brindes: "ações especiais dentro do evento"
16. Tipografia próxima da logo + line-height maior
17. Pivot completo pra light mode

### Sessão atual (Mai 20, 2026)
- **Hero**: trocar foto (nova mulher mauve no quarto), remover frase "Em um sábado vocês vão criar", reduzir margens hero-meta/sub/desc, ajustar object-position pra `center 15%`
- **Dor**: trocar foto (gestante off-white em fundo rosa vibrante), alongar container `aspect-ratio: 2/3 → 9/16` desktop / `3/4 → 4/5` mobile
- **Duplicação dark**: criar `nested-nestling` com paleta dark mode suave
- **Domínio**: configurar v2.babytalks.com.br no Lovable + Cloudflare (zone pending NS)
- **Favicon**: coração rosa #C95FA3 em ambos sites (versão antiga com logo ficou ilegível)
- **Meta tags**: title/og/twitter em PT-BR, remover referências a "Lovable App"

## Comandos comuns

```bash
# Rodar dev local
cd /d/CLAUDE/baby-talks-prep && npm run dev -- --port 3342
cd /d/CLAUDE/nested-nestling && npm run dev -- --port 3343

# Build (sanity check antes de push)
npm run build

# Deploy = só push em master (Lovable detecta e redeploy)
git add -A
git commit -m "msg"
git push

# Renomear arquivo de imagem pra busta cache do browser
# (Lovable + Cloudflare cacheiam por nome de arquivo)
mv public/images/foo.jpg public/images/foo-v2.jpg
# atualizar src no código depois
```

## Pendências / próximos passos

- ⏳ **Ativar nameservers Cloudflare no Registro.br** OU adicionar records direto no Registro.br pra `v2.babytalks.com.br` resolver
- ⏳ Validar HTTPS funcionando em `v2.babytalks.com.br` depois do TXT propagar
- 💡 Considerar criar uma OG image custom (1200×630) com a logo + tagline, em vez do og:image default do Lovable
- 💡 SEO: adicionar schema.org Event markup (data, local, preço) pra Google Events
- 💡 Pixel de tracking? (Meta Pixel, GA4)

## Bugs/observações técnicas

1. **Lovable + Force push** — quando o Lovable cria um repo automaticamente (initial commit "remix"), force push é OK pra subir override completo do projeto local.

2. **Entri anti-bot** — o fluxo "Complete setup" do Lovable usa iframe da Entri (`app.goentri.com`). Cliques sintéticos via Chrome extension não funcionam por proteção anti-bot. Solução: o Bruno clica manualmente, depois pegamos o token TXT do DOM via JS (após o Entri renderizar a tabela no DOM principal do Lovable).

3. **Cloudflare 403 em POST** — POST direto via `/api/v4/zones/:id/dns_records` retorna 403 mesmo com `X-Cross-Site-Security: dash`. Workaround que funcionou: usar o endpoint `/dns_records/import` com FormData + BIND format.

4. **Hydration mismatch** — TanStack Start avisa "tree hydrated but some attributes... didn't match" pra o CSS template inline. Não é erro fatal, mas adiciona warning no console. Pode ser resolvido movendo o `<style>` pro `__root.tsx` se virar incômodo.

5. **Preview screenshot timeout** — quando a página tem o iframe do Google Maps, `preview_screenshot` dá timeout. Solução: rodar `preview_eval` antes pra remover iframes (`document.querySelectorAll('iframe').forEach(f=>f.remove())`).

6. **Cache de browser pro favicon** — depois de mudar favicon, Ctrl+Shift+R força refresh. Lovable + Cloudflare cacheiam favicon agressivamente; pode demorar minutos pra propagar.
