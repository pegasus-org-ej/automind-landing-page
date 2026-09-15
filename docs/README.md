# Documentação da Automind Landing Page

Esta pasta centraliza a documentação técnica, visual e estrutural da landing page da Automind, um projeto fictício de apresentação e conversão para agentes de IA personalizados.

O objetivo deste arquivo é servir como ponto de entrada da documentação: ele indica onde encontrar cada informação e qual documento consultar durante o desenvolvimento, a manutenção e o onboarding do projeto.

## Estrutura da documentação

```text
docs/
├── README.me
│
├── branding/
│   ├── icones.md
│   ├── paleta-cores.md
│   └── tipografia.md
│
├── design/
│   ├── componentes.md
│   └── design-tokens.md
│
└── landing_page/
	└── estrutura.md
```

### `branding/`

Reúne as definições da identidade visual da Automind: cores, tipografia e biblioteca de ícones.

### `design/`

Documenta os componentes reutilizáveis da interface e os valores visuais compartilhados, como espaçamentos, bordas e raios de borda.

### `landing_page/`

Descreve a estrutura planejada da página, o conteúdo de cada seção e o fluxo esperado da experiência do visitante.

## Guia de navegação

| Preciso...                                       | Consulte                                                        |
| ------------------------------------------------ | --------------------------------------------------------------- |
| Entender a proposta e o fluxo da landing page    | [`landing_page/estrutura.md`](landing_page/estrutura.md)        |
| Consultar as cores oficiais e seus usos          | [`branding/paleta-cores.md`](branding/paleta-cores.md)          |
| Consultar as fontes e a hierarquia tipográfica   | [`branding/tipografia.md`](branding/tipografia.md)              |
| Identificar os ícones usados ou previstos        | [`branding/icones.md`](branding/icones.md)                      |
| Entender os componentes visuais                  | [`design/componentes.md`](design/componentes.md)                |
| Consultar variáveis de espaçamento, borda e raio | [`design/design-tokens.md`](design/design-tokens.md)            |
| Entender a implementação da página               | [`../index.html`](../index.html) e [`../src/css/`](../src/css/) |
| Executar o projeto                               | [`../README.md`](../README.md)                                  |

## Ordem recomendada de leitura

### Primeiro contato

1. [`../README.md`](../README.md) para conhecer o objetivo, as tecnologias e o status do projeto.
2. [`landing_page/estrutura.md`](landing_page/estrutura.md) para entender a proposta, as seções e o fluxo da experiência.
3. [`../index.html`](../index.html) para relacionar o planejamento à estrutura atual da página.

### Construção da interface

4. [`branding/paleta-cores.md`](branding/paleta-cores.md) para as cores e gradientes.
5. [`branding/tipografia.md`](branding/tipografia.md) para as fontes e a hierarquia textual.
6. [`design/design-tokens.md`](design/design-tokens.md) para os valores reutilizáveis.
7. [`design/componentes.md`](design/componentes.md) para os padrões de componentes.
8. [`branding/icones.md`](branding/icones.md) para a biblioteca de ícones.

### Manutenção

9. Conferir [`./continuidade.md`](./continuidade.md) para entender sobre decisões e status do projeto.

## Boas práticas de manutenção da documentação

- Use este arquivo como índice, mantendo as descrições curtas e orientadas à tarefa.
- Atualize os links quando arquivos forem renomeados ou movidos.
- Mantenha a documentação alinhada ao código, especialmente os tokens, componentes e seções da página.
