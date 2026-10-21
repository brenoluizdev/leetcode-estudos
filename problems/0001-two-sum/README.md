# 1. Two Sum

- **Dificuldade:** Easy
- **Link:** https://leetcode.com/problems/two-sum/
- **Tópicos:** Array, Hash Table
- **Status:** ✅ Resolvido

## Abordagem

Percorre o array uma vez guardando em um `Map` cada número já visto e seu índice.
Para cada `nums[i]`, calcula o complemento `target - nums[i]`; se ele já estiver no
`Map`, a resposta é `[índice do complemento, i]`.

## Complexidade

- **Tempo:** O(n)
- **Espaço:** O(n)
