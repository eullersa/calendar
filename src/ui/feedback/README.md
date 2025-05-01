# Feedback Components – Guia de Contribuição

> **Diretório:** `src/ui/feedback/`
>
> Contém **overlays e componentes de retorno visual** que informam estado ou solicitam ação do usuário sem alterar a rota: **Modal**, **Tooltip**, **Toast**, **Spinner**, **Alert**, etc.
>
> São parte do **design‑system (ui)** – não conhecem regra de negócio, apenas recebem props.

---

## 📦 Estrutura recomendada

```txt
feedback/
├─ Modal/
│   ├─ Modal.tsx        # JSX + foco / portal logic
│   ├─ styles.ts        # styled-components
│   ├─ index.ts         # barrel
│   └─ Modal.stories.tsx
├─ Tooltip/
├─ Spinner/
└─ …
```

_Um componente = uma pasta_ → agrupa código, testes e stories lado a lado.

---

## ✅ Regras para novo componente

1. **Stateless** – receba props (`open`, `onClose`) em vez de guardar estado interno complexo.
2. **Sem domínio** – não chame API, não leia cookies. Para isso crie wrapper em `components/` ou `features/`.
3. **Acessibilidade**
   - Modal deve gerenciar **foco** e usar `aria-modal="true"`.
   - Tooltip deve ter `role="tooltip"` e delay configurável.
4. **Portals** – use `createPortal` para renderizar no `<body>` quando necessário.
5. **Theming** – cores/vários visual tokens vêm do `ThemeProvider`. Nada de hex literals.
6. **Exports** – exponha componente + tipos via `index.ts`.
7. **Testes** – obrigatórios para foco, escape‑key e render condicional.
8. **Storybook** – inclua pelo menos 2 histórias: _Default_ e _Edge Case_.

---

## 🌟 Exemplo mínimo – Modal

```tsx
// feedback/Modal/Modal.tsx
import { createPortal } from "react-dom";
import { Wrapper, Backdrop } from "./styles";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  return createPortal(
    <Backdrop onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>{children}</Wrapper>
    </Backdrop>,
    document.body
  );
};
```

---

## 🗂️ Checklist antes de merge

- [ ] Nome da pasta = Nome do componente (PascalCase).
- [ ] `index.ts` reexporta `Component` e `ComponentProps`.
- [ ] Styled‑components isolados em `styles.ts`.
- [ ] Testes cobrem visibilidade, ESC, click fora.
- [ ] Storybook atualizado.

Seguindo essas diretrizes, garantimos consistência e acessibilidade para todos os componentes de feedback do projeto.
