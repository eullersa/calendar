# Templates – Guia de Contribuição

> **Diretório:** `src/components/templates/`
>
> Hospeda **esqueletos de página**: composições de _organisms_ que definem a estrutura genérica (layout) de uma categoria de página, deixando espaços (slots) para conteúdo específico.
>
> Exemplos comuns: `AuthLayout`, `DashboardLayout`, `MarketingPageTemplate`.

---

## 📐 Quando criar um _template_

| ✅ Coloque aqui                                       | 🚫 Não coloque aqui               |
| ----------------------------------------------------- | --------------------------------- |
| Estrutura reutilizável em 2+ páginas                  | Lógica de negócio, fetch de dados |
| Layout genérico (barra lateral, header, footer, main) | Páginas completas com dados       |

### Regras rápidas

1. **Sem dependência de rota** – Template não deve chamar `useRouter()` ou definir `metadata`.
2. **Apenas layout** – nenhuma chamada de API; receba dados via props ou children.
3. **Slots declarativos** – Use `children` ou props nominais (`sidebar`, `actions`) para áreas variáveis.
4. **Estilos co‑locados** – Utilize Styled‑Components em `styles.ts`.
5. **Testes de render** – Verifique se a marcação básica permanece.

---

## 📁 Estrutura por template

```txt
DashboardLayout/
 ├─ DashboardLayout.tsx   # componente principal
 ├─ styles.ts             # styled-components
 ├─ index.ts              # re-export
 └─ DashboardLayout.test.tsx
```

---

## Checklist de Pull Request

- [ ] Nome do template segue PascalCase.
- [ ] Slots documentados no JSDoc.
- [ ] Não há lógica de domínio.
- [ ] Storybook adicionado se aplicável.
- [ ] Teste de render incluído.
