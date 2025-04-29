# Features – Guia de Organização e Contribuição

> **Diretório:** `src/features/`
>
> Cada subpasta representa **um domínio/coletivo de regras de negócio** (ex.: `auth`, `cart`, `i18n`, `profile`).
> A ideia segue o _Feature‑Sliced Architecture_: agrupar **UI + lógica + side‑effects** que pertencem ao **mesmo caso de uso** em um único lugar.

---

## 📦 Estrutura padrão de uma feature

```txt
features/
└─ <feature-name>/
   ├─ components/   # UI específica da feature (átomos/moléculas/organisms)
   ├─ hooks/        # hooks React que encapsulam lógica de domínio
   ├─ actions/      # Server Actions ou funções que possuem side‑effect
   ├─ api/          # chamadas REST/GraphQL (fetchers da própria feature)
   ├─ model/        # stores, zod schemas, utils de domínio
   ├─ __tests__/    # testes unitários e integração da feature
   ├─ README.md     # visão do domínio, fluxograma, owner
   └─ index.ts      # ponto de exportação pública
```

_Subpastas são opcionais – crie apenas as que fazem sentido._

---

## ✅ Quando colocar algo em **features/**

| Critério                                                  | Deve ir para features?      |
| --------------------------------------------------------- | --------------------------- |
| Faz **side‑effect** (API, cookies, localStorage)          | **Sim**                     |
| Contém **regra de negócio** (validações, cálculos)        | **Sim**                     |
| Mantém **estado global** (Redux, Zustand, Server Actions) | **Sim**                     |
| É só UI pura, sem domínio                                 | **Não** – use `components/` |

---

## 📐 Convenções

1. **Nome singular, kebab‑case ou lowerCamelCase**: `cart`, `auth`, `i18n`.
2. **Barrel obrigatório**: `index.ts` expõe **somente** o que for público (`export { LoginForm } from "./components/LoginForm"`).
3. **Dependências**: pode importar de `ui/`, `components/` e **outras features só pelos seus _barrels_**; nunca importe arquivos internos de outra feature.
4. **Documentação mínima**: cada feature deve ter um `README.md` breve com objetivo, fluxo de dados, donos de manutenção.
5. **Tests próximos**: coloque testes na própria pasta para fácil refatoração.

---

## 🛠️ Exemplo resumido – `cart`

```
cart/
├─ components/
│   └─ CartDrawer/
├─ hooks/
│   └─ useCart.ts
├─ actions/
│   └─ add-item.ts
├─ model/
│   └─ cartSlice.ts
├─ index.ts
└─ README.md
```

```ts
// cart/index.ts
export { CartDrawer } from "./components/CartDrawer";
export { useCart } from "./hooks/useCart";
```

Import em páginas:

```tsx
import { CartDrawer, useCart } from "@/features/cart";
```

---

## 🔄 Checklist antes de _commit_

- [ ] A nova pasta segue a estrutura padrão?
- [ ] `index.ts` expõe só a API pública?
- [ ] README atualizado com objetivo e owners?
- [ ] Testes escritos para hooks/lógica?
- [ ] Nenhum import profundo de outra feature?

Seguindo estas regras, o diretório **features** garante modularidade, isolamento de domínio e escalabilidade para equipes de qualquer tamanho. Boa codificação! 🌱
