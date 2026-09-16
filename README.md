# VileTech Informática — Landing Page

Landing page de conversão para a **Viletech Informática**, assistência técnica de informática em Lavras/MG.
Objetivo único da página: provar competência técnica e levar o visitante ao WhatsApp.

🔗 **Loja:** R. Barão do Rio Branco, 211 — Centro, Lavras/MG · (35) 3409-3030

---

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | A Home — hero, produtos em destaque, serviços, avaliações, loja, contato |
| `catalogo.html` | Catálogo completo: todos os produtos reais, com busca e filtro por categoria |
| `sobre/index.html` | Página institucional "Sobre" (`/sobre/`) — endereço, horário, diferencial e avaliações |
| `estilo.css` | CSS compartilhado entre todas as páginas (tokens, componentes, cards) |
| `dados-produtos.js` | Fonte única dos produtos (nome/categoria/marca reais) e do número do WhatsApp |
| `vitrine/` | As fotos dos produtos (`vitrine/<n>.jpg`), usadas pelas páginas |
| `sitemap.xml` / `robots.txt` | SEO técnico básico — URLs reais do site e liberação de indexação |
| `design-system-viletech.html` | Design system de origem (tokens, componentes, regras de uso) |
| `Info maps.txt` | Dados e avaliações do perfil da loja no Google |
| `bio insta.txt` | Bio do Instagram (lista de serviços) |
| `fotos/` | Fotos reais da loja (ver abaixo) |
| `Logo/` | Arquivos de logo da marca |

Todas as páginas usam `https://viletechinformatica.com.br/` como domínio canônico (tag `<link rel="canonical">`). Se o domínio final for outro, atualize o `href` desse link e as URLs em `sitemap.xml`/`robots.txt` antes de publicar.

Basta abrir `index.html` no navegador. Não há build, bundler nem instalação — só HTML, CSS e JS puros, em arquivos separados por responsabilidade em vez de tudo num único arquivo.

### Produtos e categorias

`dados-produtos.js` é a única fonte de verdade dos produtos: cada item tem `n` (número da foto em `vitrine/`), `nome`, `categoria` e `marca`, tirados do que está escrito na própria embalagem fotografada — nada é inventado. Quando uma foto mostra uma prateleira com vários produtos misturados, ou é um reflexo de vitrine sem um produto único e legível, o `nome` fica `null` e a categoria vira `"Diversos"`.

Para adicionar, remover ou corrigir um produto: edite o array `TODOS_PRODUTOS` nesse arquivo — a Home (seleção `PRODUTOS_DESTAQUE`, dentro de `index.html`) e o Catálogo (`catalogo.html`) se ajustam sozinhos. A navegação por categoria do Catálogo agrupa as categorias específicas em grupos mais amplos via `GRUPOS_CATEGORIA` — para uma categoria nova, adicione uma linha lá também (cai em "Diversos" automaticamente se você esquecer).

---

## Antes de publicar

### 1. Número do WhatsApp

Hoje a página usa o telefone fixo da loja. Troque a constante no topo de `dados-produtos.js`:

```js
var NUMERO_WHATSAPP = '553534093030';
```

Essa é a única linha: tanto a Home quanto o Catálogo completo reescrevem todos os seus links de WhatsApp a partir dela, cada um com sua mensagem de contexto já pronta (incluindo o nome do produto real, quando a pergunta parte de um card).

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

- HTML + CSS + JS puros, sem framework nem biblioteca, sem build
- CSS compartilhado num único `estilo.css` (cacheado uma vez, usado nas duas páginas)
- Todas as ilustrações e gráficos são SVG inline
- Fontes carregadas com `display=swap` e stack de fallback do sistema
- Imagens com `loading="lazy"` e `decoding="async"`; o Catálogo carrega os produtos em lotes de 24 ("Carregar mais") para não renderizar as 145 fotos de uma vez
- Degrada com JavaScript desativado: todo o conteúdo da Home continua visível (o Catálogo depende de JS para busca/filtro, por ser uma grade gerada em tempo real)

## Interações

Scroll suave, hover em botões e links, animações de entrada por `IntersectionObserver`,
medidor de nota e gráfico de barras que preenchem ao entrar na tela, contadores animados,
botão flutuante do WhatsApp após 25% de rolagem com balão que some em 6 segundos,
e formulário que valida e abre a conversa com o assunto já preenchido.
