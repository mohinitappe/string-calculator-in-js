function stringCalculator(input) {
  if (input === '') {
    return 0;
  }
  let delimiter = /[\n,]/;
  if (input.startsWith('//')) {
    const parts = input.split('\n');
    delimiter = new RegExp(parts[0].slice(2));
    input = parts[1];
  }
  const numbers = input.split(delimiter).map(Number);

  const negativeNumbers = numbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers are not allowed:, ${negativeNumbers.join(', ')}`
    );
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(stringCalculator(''));
console.log(stringCalculator('1'));
console.log(stringCalculator('1,5'));
console.log(stringCalculator('1\n2,3'));
console.log(stringCalculator('//;\n1;2'));
console.log(stringCalculator('-1,-2'));
