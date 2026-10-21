# LeetCode — Estudos

Minhas soluções diárias do [LeetCode](https://leetcode.com/) em TypeScript.

## Estrutura

```
problems/
  0001-two-sum/
    README.md          # enunciado resumido, abordagem e complexidade
    solution.ts        # a solução
    solution.test.ts   # exemplos do problema como testes
scripts/
  new.ts               # cria a pasta de um novo problema
```

## Como usar

Requer Node.js 23.6+ (roda TypeScript direto, sem build).

```bash
npm install                                    # só para o typecheck
npm run new -- 20 valid-parentheses easy       # cria problems/0020-valid-parentheses
npm test                                       # roda todos os testes
node --test problems/0001-two-sum              # roda os testes de um problema
npm run typecheck                              # checa os tipos
```

O `slug` é o final da URL do problema: `leetcode.com/problems/`**`valid-parentheses`**`/`.

## Progresso

✅ resolvido · 🚧 em andamento · 🔁 revisar

| # | Problema | Dificuldade | Solução | Status | Data |
| --: | --- | --- | --- | :-: | --- |
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | [solução](problems/0001-two-sum/solution.ts) | ✅ | 2026-10-20 |
| 9 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | Easy | [solução](problems/0009-palindrome-number/solution.ts) | 🚧 | 2026-10-21 |
| 2089 | [Find Target Indices After Sorting Array](https://leetcode.com/problems/find-target-indices-after-sorting-array/) | Easy | [solução](problems/2089-find-target-indices-after-sorting-array/solution.ts) | 🚧 | 2026-10-19 |
