# Organisms – Guia de Contribuição

> **Diretório:** `src/components/organisms/`
>
> Contém **blocos autônomos de interface** formados por múltiplas _molecules_ (e possivelmente alguns _atoms_) que representam seções coesas de página (ex.: Header, Footer, Sidebar, FormSection).
>
> Organisms **não carregam responsabilidade de domínio** — essa pertence às _features_. Eles se limitam a layoutar e orquestrar componentes menores, recebendo dados via props ou contextos globais.

---

## 📐 Quando criar um _organism_

| ✅ Coloque aqui                                                              | 🚫 Não coloque aqui                                                        |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Agrupamentos que **ocupam área significativa** da UI (menus, seções, modais) | Lógica de API/fetch; gravação em store global (vai para features)          |
| Combina **≥ 2 molecules** ou várias atoms + layout complexo                  | Simples composição de 1‐2 atoms (fica em molecules)                        |
| Precisa ser reutilizado por várias páginas/layouts                           | Componente exclusivo de uma única rota (coloque direto na rota ou feature) |

---

## 📁 Estrutura de pasta sugerida

```
organisms/
└─ Header/
   ├─ Header.tsx      # JSX + hooks locais
   ├─ styles.ts       # styled-components layout
   ├─ Logo.tsx        # sub‑atom interno, se não existir no design‑system
   ├─ index.ts
   ├─ Header.test.tsx
   └─ Header.stories.tsx
```

### Regras rápidas

1. **Props primero** – receba dados já prontos; não faça _fetch_ aqui.
2. **Use design-system** – monte UI com _atoms_ e _molecules_ existentes sempre que possível.
3. **Sem dependência circular** – organisms podem importar de `ui/` e `components/`, **nunca** de `features/`.
4. **Responsável pelo layout** – defina grid/flex interno, mas deixe estilo de cores para tokens do tema.
5. **Teste de integração** – organisms normalmente exigem RTL tests (interação de sub‑componentes).
6. **Storybook obrigatório** – documente variações principais (ex.: Header autenticado vs não autenticado).

---

## ✅ Checklist para PR

- [ ] Nome da pasta é PascalCase (e.g., `UserProfileCard`).
- [ ] Arquivo `index.ts` exporta o componente e tipos.
- [ ] Sem chamadas diretas a serviços ou stores globais.
- [ ] Usa somente tokens de tema (`theme.colors.*`).
- [ ] Storybook cobre todos os estados visuais.
- [ ] Testes validam interação principal (cliques, callbacks).

> Seguindo este guia, mantemos nossos organisms coesos, reutilizáveis e livres de acoplamento com regras de negócio, facilitando tanto a evolução da UI quanto a colaboração entre times.
