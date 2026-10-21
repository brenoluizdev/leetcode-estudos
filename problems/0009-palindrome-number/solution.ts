export function isPalindrome(x: number): boolean {
    const test = x.toString();
    const reverse = test.split("").reverse().join("");
    
    return reverse === test;
}

isPalindrome(121);