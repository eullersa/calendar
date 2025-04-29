# Molecules – Guia de Contribuição

> **Diretório:** `src/components/molecules/`
>
> Contém componentes **comportamentais e presentational** que **combinam 2 ou mais _primitives_ do design‑system (`src/ui/`)**
> para resolver um micro‑caso de uso, **sem** carregar lógica de domínio (API calls, stores globais, etc.).

---

## 📐 Quando criar um _molecule_

| ✅ Coloque aqui                                                          | 🚫 Não coloque aqui                                                                                               |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Combina mais de um átomo ou layout (`Button + Input`, `Avatar + Text` …) | Átomos puros (`Button`, `Input`, `Spinner`) – estes vão em `src/ui/primitives/`                                   |
| Precisa de **estado local leve** (ex.: _open/close_, _hover selected_)   | Lógica de domínio (carrinho, autenticação, fetch) – isso vai para `src/features/`                                 |
| Reutilizável em várias páginas/funcionalidades                           | Componente exclusivo de uma rota/layout – coloque dentro da própria rota ou em `organisms/` conforme complexidade |

### Exemplos típicos

- `SearchBar` → Input + Button + ícone + estado de texto.
- `TagList` → várias Tag (átomo) + overflow scroll.
- `ModalHeader` → Title + CloseButton.

---

## 📂 Estrutura de pasta do _molecule_

```
<NomeDoComponente>/
├─ <NomeDoComponente>.tsx   # JSX + hooks locais
├─ styles.ts                # styled‑components (opcional)
├─ types.ts                 # interfaces complexas (se necessário)
├─ <NomeDoComponente>.test.tsx   # testes unitários (Vitest + RTL)
├─ <NomeDoComponente>.stories.tsx   # Storybook (opcional)
└─ index.ts                 # barrel público
```

> **Regra dos 100 linhas:** se o arquivo `.tsx` exceder ≈100 linhas, considere extrair partes para arquivos auxiliares na **mesma pasta**.

---

## 📝 Naming conventions

- Pasta e arquivo principal = **PascalCase** (ex.: `SwitchLocaleLanguage/`).
- `index.ts` deve reexportar **apenas** a API pública:
  ```ts
  export * from "./SwitchLocaleLanguage";
  export type { SwitchLocaleLanguageProps } from "./types";
  ```
- Arquivos de estilo sempre `styles.ts` usando `styled-components`.

---

## 🔗 Dependências permitidas

- `ui/` (_primitives_, _layouts_, _feedback_…)
- `hooks/` que **não** acessam stores globais nem fazem chamadas de API.
- Nenhum import de `features/` ou de outras moléculas/organismos para evitar acoplamento circular.

---

## ✔️ Checklist antes de subir PR

- [ ] Nome e pasta seguem padrão PascalCase.
- [ ] Props documentadas via JSDoc ou arquivo `types.ts`.
- [ ] Teste unitário cobre estados principais & aria‑accessibility.
- [ ] Storybook com pelo menos um exemplo _default_.
- [ ] Sem strings de cor/tamanho hard‑coded; use tokens do tema.

---

### Exemplos rápidos

#### `SwitchLocaleLanguage/`

```tsx
import { useUpdateLocale } from "@/hooks/useUpdateLocale";
import { Button } from "@/ui";

export const SwitchLocaleLanguage = () => {
  const { isPending, locale, updateLocale } = useUpdateLocale();

  return (
    <Button
      variant="ghost"
      onClick={() => updateLocale(locale === "en" ? "pt" : "en")}
      disabled={isPending}
    >
      {locale.toUpperCase()}
    </Button>
  );
};
```
