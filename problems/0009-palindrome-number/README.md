# 9. Palindrome Number

- **Dificuldade:** Easy
- **Link:** https://leetcode.com/problems/palindrome-number/
- **Tópicos:** Math
- **Status:** Concluído
- **Tempo gasto:** 8–10 minutos

## Problema

Dado um inteiro `x`, retornar `true` se ele for um palíndromo, ou seja, se for lido
igual da esquerda para a direita e da direita para a esquerda.

| Entrada | Saída | Por quê |
| --- | --- | --- |
| `121` | `true` | Ao contrário também é `121` |
| `-121` | `false` | Ao contrário fica `121-` |
| `10` | `false` | Ao contrário fica `01` |

## Abordagem

### 1ª tentativa: inverter como string

A ideia é transformar o número em texto, inverter o texto e comparar com o original.

1. Converter o número em string: `121` → `"121"`.
2. Separar a string em um array de caracteres com `split("")`: `["1", "2", "1"]`.
3. Inverter a ordem do array com `reverse()`: `["1", "2", "1"]`.
4. Juntar de novo em string com `join("")`: `"121"`.
5. Comparar o resultado com a string original. Se forem iguais, é palíndromo.

Com um número que não é palíndromo, como `123`, o resultado invertido seria `"321"`,
diferente de `"123"`.

Os números negativos já dão `false` sem tratamento especial, porque o `-` vai parar no
final da string invertida.

```ts
export function isPalindrome(x: number): boolean {
    const test = x.toString();
    const reverse = test.split("").reverse().join("");

    return reverse === test;
}
```

> **Aprendizado:** a primeira versão tinha um `if (reverse === test) return true; return false;`.
> Como a comparação já é um `boolean`, dá para retornar ela direto.

## Complexidade

Sendo `d` a quantidade de dígitos de `x`:

- **Tempo:** O(d), porque `split`, `reverse`, `join` e a comparação percorrem a string.
- **Espaço:** O(d), porque são criados uma string e um array do tamanho do número.

## Próximos passos

- [ ] Resolver o *follow up* do LeetCode: verificar o palíndromo **sem converter para string**,
      usando só operações matemáticas (`%` e `Math.floor`).
