export function targetIndices(nums: number[], target: number): number[] {
    const cresc = nums.sort((a, b) => a - b);

    const targetNumber = cresc[target]

    console.log(`cresc: ${cresc}`)
    console.log(`taget: ${targetNumber}`)

    if (targetNumber) {
        var idx = cresc.indexOf(targetNumber);
        const resultado = idx !== -1 ? cresc.slice(0, idx + 1) : [];
        console.log(resultado)
    }
    return []
}
