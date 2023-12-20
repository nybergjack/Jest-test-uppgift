export function makeHeading(text: string, headerType: number): string {
  return `<h${headerType}>${text}</h${headerType}>`
}

export function roundPrice(number: number, valuta: string): string {
  const roundedNumber = Math.ceil(number * 100) / 100;
  const formattedNumber = roundedNumber.toFixed(2);

  return valuta.replace('%PRICE%', formattedNumber);
}

export function isLowerCase(input: string): boolean {
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 'a' || input[i] > 'z') {
      return false;
    }
  }
  return true;
}

export function isPrime(number: number): boolean {
  //Om talet är mindre än 2 så finns det inga primtal
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export function getGenitive(name: string): string {
  return name.toLowerCase().endsWith('s') ? name : name.concat('s');
}