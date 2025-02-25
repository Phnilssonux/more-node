export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function countCharacters(str: string): number {
    return str.length;
}

export function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}