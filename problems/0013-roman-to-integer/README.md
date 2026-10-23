# 13. Roman To Integer

- **Dificuldade:** Easy
- **Link:** https://leetcode.com/problems/roman-to-integer/
- **Tópicos:** Hash Table, Math, String
- **Status:** Finalizado
- **Tempo gasto:** 45 minutos

## Problema

Dado um número romano em forma de string, convertê-lo para inteiro.

| Símbolo | I | V | X | L | C | D | M |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Valor** | 1 | 5 | 10 | 50 | 100 | 500 | 1000 |

Normalmente os símbolos vêm do maior para o menor e são somados (`VIII` = 5 + 1 + 1 + 1 = 8).
A exceção é quando um símbolo menor vem **antes** de um maior: nesse caso ele é subtraído.
Isso só acontece em seis combinações:

| Par | Valor |
| --- | --- |
| `IV` / `IX` | 4 / 9 |
| `XL` / `XC` | 40 / 90 |
| `CD` / `CM` | 400 / 900 |

| Entrada | Saída | Por quê |
| --- | --- | --- |
| `III` | `3` | 1 + 1 + 1 |
| `LVIII` | `58` | 50 + 5 + 1 + 1 + 1 |
| `MCMXCIV` | `1994` | 1000 + (1000 − 100) + (100 − 10) + (5 − 1) |

## Abordagem

### 1ª tentativa: tabela de valores + somar só para frente

Comecei criando um objeto que mapeia cada símbolo romano para o seu valor. Percorrendo a
string símbolo por símbolo e somando os valores, os dois primeiros exemplos já davam certo.

No terceiro exemplo (`MCMXCIV`) percebi que, em alguns casos, era preciso **subtrair** em vez
de somar. Então adicionei uma verificação olhando o próximo símbolo:

1. Deixar a string em minúsculas e separar em caracteres.
2. Para cada posição `i`, pegar o valor do símbolo atual e o do próximo.
3. Se o próximo for **maior** que o atual, é um par de subtração (como `CM`): somar
   `próximo − atual` e pular o próximo símbolo (`i++`), porque ele já foi usado.
4. Caso contrário, somar só o valor atual.

Passo a passo com `MCMXCIV`:

| Posição | Par analisado | Ação | Total |
| --- | --- | --- | --- |
| 0 | `M`, `C` | 1000 | 1000 |
| 1–2 | `C`, `M` | 1000 − 100 | 1900 |
| 3–4 | `X`, `C` | 100 − 10 | 1990 |
| 5–6 | `I`, `V` | 5 − 1 | 1994 |

## Complexidade

Sendo `n` o tamanho da string:

- **Tempo:** O(n), porque cada símbolo é visitado uma vez.
- **Espaço:** O(n), por causa do array criado pelo `split("")`. A tabela de símbolos tem
  tamanho fixo (7 itens), então não conta.

## Próximos passos

- [ ] Acessar os caracteres direto pela string (`romanNumber[i]`) em vez de usar `split`,
      deixando o espaço em O(1).
- [ ] Testar a versão alternativa: percorrer de trás para frente, subtraindo quando o
      símbolo atual for menor que o anterior.
