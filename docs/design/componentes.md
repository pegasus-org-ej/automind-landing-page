# Container

## Objetivo

Engloba um grupo de elementos não permitindo crescer mais do que 1500px e sempre centralizado

## Componentes

| Componente        | Finalidade                           |
| ----------------- | ------------------------------------ |
| `.container`      | Centralizado e tamanho maximo 1500px |
| `.container-card` | Grid de cards                        |

## Observações

- Todo elemento grande que não cresce mais que 1500px utiliza a classe `.container`
- Todas as variantes devem herdar da classe `.container`.

---

# Cabeçalho de Seção

## Objetivo

Agrupar os textos da seção, espaçando-os.

## Componentes

| Componente         | Finalidade                   |
| ------------------ | ---------------------------- |
| `.secao-cabecalho` | Agrupar o cabeçalho da seção |

## Observações

- Todo cabeçalho de seção deve possuir esta classe

---

# Logo

## Objetivo

Classe própria para a estilização da logo

## Componentes

| Componente    | Finalidade         |
| ------------- | ------------------ |
| `.logo`       | Container pai      |
| `.logo-icone` | Container do icone |
| `.logo-texto` | Parágrafo          |

## Estrutura HTML
````HTML
<div class="logo">
    <div class="logo-icone">
        <i>Icone</i>
    </div>
    <p class="logo-texto">Texto</p>
</div>
````

## Observações

- Toda logo deve seguir a mesma estrutura HTML e possuir estas classes

---

# Botão

## Componentes

| Componente          | Finalidade         |
| ------------------- | ------------------ |
| `.btn`              | Botão verde        |
| `.btn-transparente` | Botão transparente |

## Estdados

- Hover

## Observações

- Todas as variantes devem herdar da classe `.btn`.
- Pode possuir um icone

---

# Card

## Estrutura HTML
````HTML
<div class="card">
    <div class="container-icone">
        <i>I</i>
    </div>

    <h4>Titulo</h4>

    <p>Texto</p>
</div>
````

## Observações

- A estrutura HTML do card pode mudar, não é necessário seguir à risca esta estrutura.