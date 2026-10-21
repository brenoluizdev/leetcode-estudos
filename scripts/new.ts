// Cria a pasta de um novo problema e adiciona uma linha na tabela do README.
// Uso: npm run new -- <numero> <slug> <easy|medium|hard>
// Ex.: npm run new -- 20 valid-parentheses easy

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [numero, slug, dificuldade] = process.argv.slice(2);
const dificuldades: Record<string, string> = { easy: "Easy", medium: "Medium", hard: "Hard" };

if (!numero || !slug || !dificuldades[dificuldade?.toLowerCase()]) {
    console.error("Uso: npm run new -- <numero> <slug> <easy|medium|hard>");
    process.exit(1);
}

const nivel = dificuldades[dificuldade.toLowerCase()];
const pasta = `${numero.padStart(4, "0")}-${slug}`;
const dir = join("problems", pasta);

if (existsSync(dir)) {
    console.error(`Já existe: ${dir}`);
    process.exit(1);
}

const titulo = slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
const nomeFuncao = slug.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());
const link = `https://leetcode.com/problems/${slug}/`;

mkdirSync(dir, { recursive: true });

writeFileSync(
    join(dir, "solution.ts"),
    `export function ${nomeFuncao}(): void {\n    \n}\n`,
);

writeFileSync(
    join(dir, "solution.test.ts"),
    `import { test } from "node:test";
import assert from "node:assert/strict";
import { ${nomeFuncao} } from "./solution.ts";

test("exemplo 1", { todo: true }, () => {
    assert.deepEqual(${nomeFuncao}(), undefined);
});
`,
);

writeFileSync(
    join(dir, "README.md"),
    `# ${numero}. ${titulo}

- **Dificuldade:** ${nivel}
- **Link:** ${link}
- **Tópicos:**
- **Status:** 🚧 Em andamento

## Abordagem

_Descreva aqui a ideia da solução._

## Complexidade

- **Tempo:** _?_
- **Espaço:** _?_
`,
);

// Insere a linha na tabela mantendo a ordem por número.
const readme = readFileSync("README.md", "utf8");
const linhas = readme.split("\n");
const hoje = new Date().toLocaleDateString("sv-SE"); // AAAA-MM-DD no fuso local
const novaLinha = `| ${numero} | [${titulo}](${link}) | ${nivel} | [solução](problems/${pasta}/solution.ts) | 🚧 | ${hoje} |`;

const inicio = linhas.findIndex((l) => l.startsWith("| --"));
let fim = inicio + 1;
while (fim < linhas.length && linhas[fim].startsWith("|")) fim++;

const tabela = [...linhas.slice(inicio + 1, fim), novaLinha].sort(
    (a, b) => Number(a.split("|")[1]) - Number(b.split("|")[1]),
);
linhas.splice(inicio + 1, fim - inicio - 1, ...tabela);
writeFileSync("README.md", linhas.join("\n"));

console.log(`Criado ${dir}`);
