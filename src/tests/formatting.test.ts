import * as formatters from './formatting';

describe('Make header tests', () => {
  it('header format should pass with h1', () => {
    // Arrange
    const inputText = 'Hello';
    const inputNumber = 1;

    // Act
    const header = formatters.makeHeading(inputText, inputNumber);

    // Assert
    expect(header).toBe(`<h${inputNumber}>${inputText}</h${inputNumber}>`);
  });

  it('header format should pass with h2', () => {
    // Arrange
    const inputText = 'Next level';
    const inputNumber = 2;

    // Act
    const header = formatters.makeHeading(inputText, inputNumber);

    // Assert
    expect(header).toBe(`<h${inputNumber}>${inputText}</h${inputNumber}>`);
  });
});

//Nästa test

describe('Round price tests', () => {
  it('should round to two decimals', () => {
    // Arrange
    const input = 232.10642;
    const valuta = '%PRICE% kr'
    // Act
    const price = formatters.roundPrice(input, valuta);
    // Assert
    expect(price).toBe('232.11 kr');
  });

 it('should round to two decimals', () => {
    // Arrange
    const input = 14;
    const valuta = '$%PRICE%'
    // Act
    const price = formatters.roundPrice(input, valuta);

    // Assert
    expect(price).toBe('$14.00');

  });

 it('should round to two decimals', () => {
    // Arrange
    const input = 1024.2008;
    const valuta = 'USD %PRICE%'
    // Act
    const price = formatters.roundPrice(input, valuta);

    // Assert
    expect(price).toBe('USD 1024.21');
  });


describe('Testa om det bara finns lowercase bokstäver', () => {

 it('Should return true', () => {

    // Arrange
    const input = 'hello'
    // Act
    const text = formatters.isLowerCase(input)
    // Assert

    expect(text).toBe(true)
 })


 it('Should return false', () => {

    // Arrange
    const input = 'Hello'
    // Act
    const text = formatters.isLowerCase(input)
    // Assert

    expect(text).toBe(false)
 })
})

describe('Kolla om det är ett primtal', () =>{

  it('Should return true', () =>{
    
    // Arrange
    const input = 2;

    // Act
    const isPrimtal = formatters.isPrime(input)

    // Assert
    expect(isPrimtal).toBe(true)
  })

 
  it('Should return false', () =>{
    
    // Arrange
    const input = 96;

    // Act
    const isPrimtal = formatters.isPrime(input)

    // Assert
    expect(isPrimtal).toBe(false)
  })
  
})

});

describe('test genitive function', () => {
  it.each([
    {
      input: 'Jonatan',
      expected: 'Jonatans'
    },
    {
      input: 'Anna',
      expected: 'Annas'
    },
    {
      input: 'Claes',
      expected: 'Claes'
    },
    {
      input: 'Hampus',
      expected: 'Hampus'
    },
    {
      input: 'Johanna',
      expected: 'Johannas'
    },
  ])('should match expected genitive, [case %#]', (data) => {
    const result = formatters.getGenitive(data.input);

    expect(result).toBe(data.expected);
  })
});