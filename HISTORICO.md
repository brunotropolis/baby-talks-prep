# Baby Talks — Histórico do Site

Registro de tudo que foi feito no site do evento **Baby Talks Santo Anjo**.

> **Site no ar:** [babytalks.com.br](https://babytalks.com.br)
> **Evento:** 22 de agosto de 2026 · Teatro Santo Anjo · Barigui · Curitiba
> **Repositório:** [brunotropolis/baby-talks-prep](https://github.com/brunotropolis/baby-talks-prep)

---

## 🎯 O que o site tem hoje

- **Versão light** (oficial, no ar em `babytalks.com.br`) — fundo off-white, tons lilás/rosa/magenta, layout limpo e elegante
- **Versão dark** (interna, pra apresentação com a equipe em `nested-nestling.lovable.app`) — fundo azul-noite, mesmos elementos com tema escuro
- Todas as fotos de evento, palestrantes e ambientação
- CTA de compra ligado ao [checkout Diskingressos](https://www.diskingressos.com.br/event/3351)
- Email profissional `contato@babytalks.com.br` funcional
- Assinatura de email pronta com logo e ícones

---

## 📅 Cronograma das mudanças

### 20 de maio de 2026 — Primeira grande rodada

**Estrutura visual e conteúdo:**
- Paleta de cores refinada seguindo o guia oficial (lilás Baby, magenta Talk, azul Anjo)
- Foto do hero trocada: casal grávido em ambiente elegante
- Foto na seção "Dores": gestante em vestido off-white com fundo rosa vibrante
- Container da foto alongado (aspect ratio vertical mais impactante)
- Logo Baby Talks aplicada no header e footer com destaque
- Frase de abertura ajustada, textos suavizados
- Google Maps integrado na seção "Local"

**Estrutura do site:**
- Removida faixa antiga de "stats/números do evento"
- Removida menção a "demonstração ao vivo" e "coffee break"
- Removida seção "antes/depois" (não fazia mais sentido)
- Dados do evento (data, horário, local, endereço) na seção de preços
- FAQ ajustado: "ações especiais dentro do evento"
- Botões de compra verdes com pulsação suave

**Palestrantes:**
- Adicionada **Dayane Dos Anjos** como palestrante confirmada
- Novo card "a anunciar" pra 5º palestrante

**Versão dark (apresentação equipe):**
- Duplicação completa do site com paleta escura elegante (não preto puro — azul-noite suave)
- Domínio `v2.babytalks.com.br` configurado
- Favicon coração rosa aplicado nos dois sites

### 1 de julho de 2026 — Segunda grande rodada

**Ordem dos palestrantes reordenada:**
1. **Dayane Dos Anjos** — Consultora de Sono e Amamentação (@manualdorecemnascido)
2. **Patricia Moreira** — Educadora em Saúde (@boagravidez)
3. **Alline Vieira** — Fisioterapeuta pélvica, acupunturista e doula
4. **Dra. Juliana Chalupe** — Ginecologista e Obstetra

**Bios atualizadas:**
- **Juliana**: nova foto (crop 900×900 quadrado), role "Ginecologista e Obstetra", bio: *"Ginecologista e obstetra, integrante do Grupo Nascer. Acompanha gestantes rumo a um parto seguro, informado e respeitoso. Mãe de três crianças."*
- **Alline**: bio literal enviada por ela — *"Fisioterapeuta pélvica, acupunturista e doula. Há mais de 10 anos atendo a área de obstetrícia, visando acolhimento, conforto e melhor dos sintomas, proporcionando melhor qualidade de vida as famílias e preparo para o dia mais especial das suas vidas. Mãe da Ana carolina de 7 anos."*

**Preços ajustados:**
- Ingresso Individual: R$150
- Ingresso Acompanhante (casal): R$250
- **Ingresso Duplo (dupla de gestantes): R$260** (era R$250)

**Compra integrada:**
- Todos os botões de "Comprar" e "Garantir ingresso" agora apontam pro checkout do Diskingressos: `https://www.diskingressos.com.br/event/3351`
- Abrem em nova aba com `target="_blank"` pra não perder a página do evento

**Instagram do evento:**
- Adicionado `@babytalks.evento` no rodapé com ícone SVG e link direto

**Email profissional (`contato@babytalks.com.br`):**
- ✅ Recebe emails (Cloudflare Email Routing → forward pra `babytalks.evento@gmail.com`)
- ✅ Envia como remetente autenticado (Brevo SMTP + DKIM + SPF + DMARC)
- ✅ Configurado no Gmail via "Enviar e-mail como" — Bruno responde direto do Gmail e aparece como `contato@babytalks.com.br`
- 💰 Custo zero (Brevo Free tier: 300 emails/dia — suficiente pro evento)

**Assinatura de email:**
- Logo Baby Talks à esquerda
- Nome "Equipe Baby Talks" em azul-navy negrito
- Tagline italic: *"O encontro que toda gestante gostaria de viver antes da chegada do bebê."*
- Faixa magenta: **22 DE AGOSTO · TEATRO SANTO ANJO · CURITIBA**
- 3 linhas de contato com ícones: 🌐 site · ✉️ email · 📷 Instagram
- Todos os elementos são links clicáveis
- Arquivo hospedado em [babytalks.com.br/signature.html](https://babytalks.com.br/signature.html) pra fácil cópia

---

## 🧱 O que existe no site (estrutura das seções)

1. **Nav fixo** — logo + botão "Garantir ingresso" (com pulsação suave)
2. **Hero** — foto do casal + headline "A sua preparação pra ser pais" + pills com data/local/horário
3. **Dor** — as dores que o evento resolve + foto da gestante
4. **Aprende** — 5 palestras numeradas na ordem da jornada (gestação → parto → amamentação → sono → puerpério)
5. **Palestrantes** — os 4 nomes confirmados com foto, especialidade, bio e Instagram
6. **Inclusos** — o que o ingresso oferece
7. **Ingressos** — 3 opções (Individual R$150, Acompanhante R$250, Dupla R$260)
8. **Dados do evento** — faixa com data, horário, local, endereço
9. **Local** — mapa embed do Teatro Santo Anjo
10. **FAQ** — accordion com dúvidas frequentes
11. **Footer** — logo, email de contato, Instagram, créditos

---

## 🎨 Identidade visual

**Cores da marca:**
- 💜 **Lilás Baby** `#8E9BD1` — cor principal, headers, blocos
- 💗 **Magenta Talk** `#C95FA3` — destaques, botões de destaque
- 💙 **Azul Anjo** `#1F2A56` — texto e estrutura
- 🍦 **Branco Suave** `#F8F7F4` — fundo principal
- 🌸 **Rosa Bebê** `#F4DCE8` — destaques suaves
- 💚 **Verde** `#2EA66C` — botões de CTA (compra)

**Fontes:**
- **Fraunces** (serif italic) — headlines e destaques emocionais
- **DM Sans** — corpo de texto e labels
- **Anton** — display forte em CAPS (data do evento)

---

## 📧 Sistema de email profissional

**Como funciona:**
```
Alguém manda email pra contato@babytalks.com.br
    ↓
Cloudflare recebe (grátis) e reencaminha pro Gmail babytalks.evento@gmail.com
    ↓
Você lê e responde no Gmail
    ↓
Ao responder, o Gmail escolhe "De: Baby Talks <contato@babytalks.com.br>"
    ↓
Envia via Brevo (grátis) com autenticação DKIM/SPF/DMARC
    ↓
Destinatário recebe como se fosse email direto do domínio
```

**Vantagens:**
- ✅ Nenhum custo mensal
- ✅ Você usa o Gmail que já está acostumado
- ✅ Emails não caem em spam (DKIM/SPF/DMARC autenticados)
- ✅ Recebe TUDO que chegar em qualquer coisa @babytalks.com.br (rule específica pro `contato@`)

**Limite:** 300 emails/dia (Brevo Free) — muito mais que suficiente pro evento

---

## 🌐 Domínios

| Domínio | Uso | Status |
|---|---|---|
| **babytalks.com.br** | Site principal (produção) | ✅ No ar |
| **v2.babytalks.com.br** | Versão dark (interna, apresentação equipe) | ⏳ Aguardando propagação DNS |
| **contato@babytalks.com.br** | Email profissional | ✅ Funcionando |

---

## 📁 Arquivos importantes no repo

```
baby-talks-prep/
├── index.html                    ← O site inteiro (fonte de verdade)
├── signature.html                ← Assinatura de email pronta pra Gmail
├── CLAUDE.md                     ← Documentação técnica (pros próximos Claudes)
├── HISTORICO.md                  ← Este arquivo
├── CNAME                         ← Aponta o GitHub Pages pro babytalks.com.br
├── favicon.ico + variações       ← Coração rosa como ícone da aba
└── images/
    ├── logo-baby-talks.png       ← Logo principal
    ├── logo-baby-talks-dark.png  ← Versão pra fundos escuros
    ├── hero-casal-v2.jpg         ← Foto do hero
    ├── local-portrait-v2.jpg     ← Foto da seção Dores
    ├── dayane-v2.jpg             ← Dayane Dos Anjos
    ├── palestrante-patricia.jpg  ← Patricia Moreira
    ├── palestrante-alline.jpg    ← Alline Vieira
    ├── palestrante-juliana.jpg   ← Dra. Juliana Chalupe
    └── icons/
        ├── globe.png             ← Ícone site (assinatura)
        ├── envelope.png          ← Ícone email (assinatura)
        └── instagram.png         ← Ícone Instagram (assinatura)
```

---

## 🚀 Como o deploy funciona

Simples: **push no repo = site atualizado em 30-60 segundos.**

1. Alteração feita no `index.html` (ou em qualquer arquivo)
2. Commit + push pro GitHub
3. GitHub Pages processa e publica
4. Cloudflare serve pra quem acessa

Sem build, sem servidor, sem plataforma paga — GitHub Pages + Cloudflare gratuitos.

---

## 📝 Próximos passos possíveis

- [ ] Ativar totalmente `v2.babytalks.com.br` (falta trocar nameservers no Registro.br)
- [ ] Criar OG image customizada pra WhatsApp/Facebook mostrarem prévia bonita
- [ ] Adicionar schema.org Event pra aparecer no Google Events
- [ ] Instalar Meta Pixel se for fazer ads
- [ ] Testar deliverability do email no [mail-tester.com](https://www.mail-tester.com) depois de 1 semana usando

---

*Última atualização: 1 de julho de 2026*
