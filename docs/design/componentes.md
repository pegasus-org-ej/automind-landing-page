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

> **Verificar:** confirmar se `.container-card` é realmente uma variante de `.container` e se deve obrigatoriamente utilizar essa classe em conjunto.

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

> **Verificar:** registrar o objetivo do componente, caso exista uma definição específica para sua utilização.

## Componentes

| Componente          | Finalidade         |
| ------------------- | ------------------ |
| `.btn`              | Botão verde        |
| `.btn-transparente` | Botão transparente |

## Estados

- Hover

> **Verificar:** confirmar se existem outros estados relevantes, como `focus`, `active` ou `disabled`.

## Observações

- Todas as variantes devem herdar da classe `.btn`.
- Pode possuir um ícone.

> **Verificar:** confirmar a estrutura HTML recomendada para utilização do botão, caso exista alguma estrutura ou elemento obrigatório.

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

> **Verificar:** caso existam classes, variações ou estados específicos do card na implementação, documentá-los aqui.

---
