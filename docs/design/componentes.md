# Componentes

# Container

## Objetivo

Engloba um grupo de elementos, não permitindo crescer mais do que 1500px e sempre centralizado.

## Componentes

| Componente        | Finalidade                           |
| ----------------- | ------------------------------------ |
| `.container`      | Centralizado e tamanho máximo 1500px |
| `.container-card` | Grid de cards                        |

## Observações

- Todo elemento grande que não cresce mais que 1500px utiliza a classe `.container`.
- Todas as variantes devem herdar da classe `.container`.
- O `.container-card` é um grid que fica dentro de um `.container`, e os dois nunca aparecem na mesma tag.


---

# Cabeçalho de Seção

## Objetivo

Agrupar os textos da seção, espaçando-os.

## Componentes

| Componente         | Finalidade                   |
| ------------------ | ---------------------------- |
| `.secao-cabecalho` | Agrupar o cabeçalho da seção |

## Observações

- Todo cabeçalho de seção deve possuir esta classe.

---

# Logo

## Objetivo

Classe própria para a estilização da logo.

## Componentes

| Componente    | Finalidade         |
| ------------- | ------------------ |
| `.logo`       | Container pai      |
| `.logo-icone` | Container do ícone |
| `.logo-texto` | Parágrafo          |

## Estrutura HTML

```html
<div class="logo">
  <div class="logo-icone">
    <i>Ícone</i>
  </div>
  <p class="logo-texto">Texto</p>
</div>
```

## Observações

- Toda logo deve seguir a mesma estrutura HTML e possuir estas classes.

---

# Botão

- Chamadas para ação (CTA). `.btn` (verde) é o CTA principal, “Agendar demonstração”. `.btn-transparente` é o secundário, “Ver como funciona”.

## Componentes

| Componente          | Finalidade         |
| ------------------- | ------------------ |
| `.btn`              | Botão verde        |
| `.btn-transparente` | Botão transparente |

## Estados

- Hover: só o `.btn` muda (fundo vai para `--cor-destaque-hover`, com transição de 0,3s). O `.btn-transparente` não tem mudança visível.
- Focus, active e disabled: não implementados. Nenhum CSS tem `:focus`, `:focus-visible`, `:active` ou `:disabled`. Disabled nem se aplica, porque os botões são links.

## Observações

- Todas as variantes devem herdar da classe `.btn`.
- Pode possuir um ícone.
- Os botões são links `<a>`, só com texto, sem elemento obrigatório.

---

# Card

> **Verificar:** registrar o objetivo do componente.

## Estrutura HTML

```html
<div class="card">
  <div class="container-icone">
    <i>I</i>
  </div>
  <h4>Titulo</h4>
  <p>Texto</p>
</div>
```

## Observações

- A estrutura HTML do card pode mudar, não é necessário seguir à risca esta estrutura.
- Estrutura real: `<article class="card">`, com um `<h3>`.
- Variações: não existem classes modificadoras. A única variação é o container do ícone, que muda por seção:
  - .container-icone
  - .interesse-card-icone
  - .diferenciais-card-icone
- Estados: só hover, que troca a borda para `--cor-principal`, sem transição. Foco e ativo não se aplicam, porque o card não é clicável.

---
