# Design Tokens

## Visão Geral

Este documento reúne todos os **Design Tokens** utilizados na Landing Page da Automind.

Os tokens representam valores reutilizáveis da interface, garantindo consistência visual durante o desenvolvimento e facilitando futuras manutenções.

Sempre que possível, utilize estes valores em vez de números arbitrários.

---

# Espaçamentos

| Variável          |  Valor |
| ----------------- | -----: |
| `--espacamento-1` |  `8px` |
| `--espacamento-2` | `16px` |
| `--espacamento-3` | `24px` |
| `--espacamento-4` | `32px` |
| `--espacamento-5` | `48px` |
| `--espacamento-6` | `64px` |

---

# Border Radius

| Variável            |  Valor |
| ------------------- | -----: |
| `--borda-radius-sm` | `12px` |
| `--borda-radius-md` | `20px` |

---

# Bordas

| Variável  |                 Valor |
| --------- | --------------------: |
| `--borda` | `0.8px solid #334155` |

---

# Diretrizes

- Todos os novos componentes devem utilizar estes tokens sempre que possível.
- Evite utilizar valores "hardcoded" quando já existir um token equivalente.
- Caso seja necessário criar um novo token, ele deve ser documentado neste arquivo antes de ser utilizado no projeto.
- Os nomes das variáveis seguem a convenção CSS Custom Properties (`--nome-da-variavel`) para facilitar sua utilização em HTML, CSS e futuros frameworks como Tailwind CSS ou React.

> **Verificar:** confirmar se todos os tokens documentados correspondem às variáveis atualmente existentes no `variables.css` e se os valores registrados estão atualizados.

> **Verificar:** confirmar se existem outros tokens relevantes no projeto que devam ser documentados, como sombras, transições, larguras, alturas ou breakpoints. O guia recomenda documentá-los apenas quando forem valores reutilizáveis e relevantes para manutenção.
