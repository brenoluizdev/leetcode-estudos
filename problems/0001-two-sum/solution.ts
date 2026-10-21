export function twoSum(nums: number[], target: number): number[] {
    const vistos = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i];

        if (vistos.has(complemento)) {
            return [vistos.get(complemento)!, i];
        }

        vistos.set(nums[i], i);
    }

    return [];
}
