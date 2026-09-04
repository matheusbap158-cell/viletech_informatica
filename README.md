# VileTech Informática — Landing Page

Landing page de conversão para a **Viletech Informática**, assistência técnica de informática em Lavras/MG.
Objetivo único da página: provar competência técnica e levar o visitante ao WhatsApp.

🔗 **Loja:** R. Barão do Rio Branco, 211 — Centro, Lavras/MG · (35) 3409-3030

---

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | A landing page completa — HTML, CSS e JS em arquivo único |
| `design-system-viletech.html` | Design system de origem (tokens, componentes, regras de uso) |
| `Info maps.txt` | Dados e avaliações do perfil da loja no Google |
| `bio insta.txt` | Bio do Instagram (lista de serviços) |
| `fotos/` | Fotos reais da loja (ver abaixo) |
| `Logo/` | Arquivos de logo da marca |

Basta abrir `index.html` no navegador. Não há build, bundler nem instalação.

---

## Antes de publicar

### 1. Número do WhatsApp

Hoje a página usa o telefone fixo da loja. Troque a constante no início do `<script>` de `index.html`:

```js
var NUMERO_WHATSAPP = '553534093030';
```

Os 13 links de WhatsApp da página são reescritos a partir dessa única linha, cada um com sua mensagem de contexto já pronta.

### 2. Fotos da loja

Coloque os arquivos abaixo em `fotos/` e a galeria passa a exibi-los automaticamente
(com `loading="lazy"` e `alt` já escritos). Sem eles, aparece uma ilustração de reserva.

- `fotos/bancada.jpg`
- `fotos/fachada.jpg`
- `fotos/loja.jpg`

### 3. Rodapé institucional

Há um comentário HTML no rodapé marcando onde entram **razão social** e **CNPJ**.

### 4. Copy final

Os textos atuais vêm do copy de exemplo do design system e dos materiais públicos da loja
(Google Maps e Instagram). Quando a copy definitiva chegar, é substituição de texto direta —
a estrutura e o CSS não mudam.

---

## Design system aplicado

- **Cores:** navy `#0B2239` · vermelho VileTech `#DE1F26` · azul elétrico `#0F6BD4` · verde WhatsApp `#0E7C41`
- **Proporção:** 60% branco/cinza · 30% navy · 10% vermelho
- **Regra do vermelho:** um único botão vermelho por dobra; verde é exclusivo do WhatsApp
- **Tipografia:** Archivo (títulos) + IBM Plex Sans (corpo), com fallback de sistema
- **Botões:** 52px de altura, raio 10px, peso 600, anel de foco azul de 3px
- **Espaçamento:** seções de 96px no desktop e 56px no mobile, container de 1200px

## Responsivo

Mobile-first, verificado em 1280 / 768 / 375px — sem overflow horizontal em nenhum deles.

- **< 768px:** menu sanduíche, grid de 1 coluna, barra fixa no rodapé (WhatsApp 70% / Ligar 30%)
- **768–1024px:** grid de 2 colunas, hero empilhado
- **> 1024px:** grid de 3 colunas, hero em 2 colunas

## Acessibilidade

- HTML semântico (`header`, `main`, `section`, `article`, `figure`, `footer`), link "pular para o conteúdo"
- Contraste WCAG AA em todos os textos
- Nenhum elemento interativo abaixo de 44px de área de toque
- Navegação completa por teclado com anel de foco visível
- `aria-label`, `aria-expanded` e `role="img"` com `<title>`/`<desc>` nos SVGs
- Respeita `prefers-reduced-motion`

## Performance

- Arquivo único, ~80 KB, sem framework nem biblioteca
- Todas as ilustrações e gráficos são SVG inline
- Fontes carregadas com `display=swap` e stack de fallback do sistema
- Imagens com `loading="lazy"` e `decoding="async"`
- Degrada com JavaScript desativado: todo o conteúdo continua visível

## Interações

Scroll suave, hover em botões e links, animações de entrada por `IntersectionObserver`,
medidor de nota e gráfico de barras que preenchem ao entrar na tela, contadores animados,
botão flutuante do WhatsApp após 25% de rolagem com balão que some em 6 segundos,
e formulário que valida e abre a conversa com o assunto já preenchido.
