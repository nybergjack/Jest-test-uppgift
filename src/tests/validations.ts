export function validateEmail(email: string): boolean {
  const emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return emailRegexp.test(email);
}

export function validateZip(zip: string) {
  const isString = typeof zip === 'string';
  const isOnlyNumbers = /[0-9]+/.test(zip);
  const isFiveNumbers = zip.length === 5;

  return isString && isOnlyNumbers && isFiveNumbers;
}