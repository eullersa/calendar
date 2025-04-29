## 📦 `components/`

| Nível          | Regra de ouro                                                 | Exemplo de pasta            |
| -------------- | ------------------------------------------------------------- | --------------------------- |
| **atoms/**     | 1 única responsabilidade, sem dependência de outro componente | `atoms/Button/`             |
| **molecules/** | comb. de ≥ 2 átomos, pequena lógica                           | `molecules/InputWithLabel/` |
| **organisms/** | seção independente da UI                                      | `organisms/Header/`         |
| **templates/** | layout genérico de página                                     | `templates/AuthLayout/`     |

> **Styled‑Components**: mantenha `styles.ts` ao lado do `.tsx` principal.

```txt
atoms/Button/
 ├─ Button.tsx
 ├─ styles.ts
 ├─ Button.test.tsx
 └─ Button.stories.tsx
```
