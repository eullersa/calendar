# Atoms – Guia de Contribuição

> **Diretório:** `src/components/atoms/`
>
> Abriga **menores unidades reutilizáveis de UI** dentro da camada _components_.
> Cada átomo:
>
> - é **render‑only** (não faz _fetch_, não acessa contexto global);
> - combina no máximo 1 ou 2 _primitives_ de `src/ui/` e lógica _zero_ ou mínima;
> - deve poder ser usado em qualquer _molecule_ ou _feature_ sem criar dependências circulares.

---

## 📐 Quando criar um átomo

| ✅ Coloque aqui                                                    | 🚫 Não coloque aqui                                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Ícones com label, `Badge`, `Divider`, `Skeleton` simples           | Qualquer coisa que contenha hooks ou estado interno significativo (use `molecules/`) |
| Variações de texto (`<Label>` que aplica tipografia)               | Componentes que chamem API ou usem stores                                            |
| Botão que apenas aplica cor/variant porém **não** gerencia loading | Qualquer coisa específica de domínio (carrinho, auth, etc.)                          |

### Heurística rápida

- **Props ≤ 3** → provavelmente átomo.
- **Nenhum `useState`** → candidato a átomo.

---

## 🗂️ Estrutura recomendada

```
atoms/
└─ MyAtom/
   ├─ MyAtom.tsx      # JSX > 90 linhas? Repense ↗
   ├─ styles.ts       # styled-components
   ├─ index.ts        # reexporta MyAtom e tipos
   ├─ MyAtom.test.tsx # unit test (Vitest/RTL)
   └─ MyAtom.stories.tsx # opcional – Storybook
```

- Use **PascalCase** para diretórios e arquivos.
- `styles.ts` só contém styled‑components; sem lógica.
- `index.ts` é opcional se houver **apenas** um export.

---

## ✅ Checklist antes de subir PR

- [ ] Nenhum import de `features/` ou de outro átomo/molécula nível superior.
- [ ] Cobertura mínima de teste para comportamento visual (snapshot ou render).
- [ ] Nome claro e genérico (ex.: `IconButton`, não `DeleteUserButton`).
- [ ] Storybook documentado **se** o átomo tiver múltiplos estados (variant, size).
- [ ] Tipos de props exportados (`export type { … }`) para autocompletar.

---

## 📚 Exemplos reais

### 1. `atoms/Divider/Divider.tsx`

```tsx
import styled from "styled-components";

export interface DividerProps {
  inset?: boolean;
}

const Hr = styled.hr<DividerProps>`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: ${({ inset }) => (inset ? "0.5rem 0" : "1rem 0")};
`;

export const Divider = ({ inset = false }: DividerProps) => (
  <Hr inset={inset} />
);
```

### 2. `atoms/Skeleton/Skeleton.tsx`

```tsx
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%{background-position:-200px 0}
  100%{background-position:calc(200px + 100%) 0}
`;

export const Skeleton = styled.div`
  background: #eee;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;
```

Esses átomos podem ser usados por **molecules** como `Card`, `ListItem` ou em qualquer _feature_, garantindo consistência visual e alto reuso.
