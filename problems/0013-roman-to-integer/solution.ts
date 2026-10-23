export function romanToInt(romanNumber: String): number {
    const romanNumbers: Record<string, number> = {
        'i': 1,
        'v': 5,
        'x': 10,
        'l': 50,
        'c': 100,
        'd': 500,
        'm': 1000
    }

    let lowerRoman = romanNumber.toLowerCase();
    let splitRoman = lowerRoman.split("");
    var value: number = 0;

    for (let i = 0; i < lowerRoman.length; i++) {
       const valor = splitRoman[i];
       const proximoValor = splitRoman[i + 1];
       const valorObjeto = romanNumbers[valor];
       const nextNumber = romanNumbers[proximoValor];
       
       if (nextNumber && nextNumber > valorObjeto) {
        i++;
        value += nextNumber - valorObjeto;
       } else {
        value += valorObjeto
       }
    }

    return value;
}
