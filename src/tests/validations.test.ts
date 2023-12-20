import * as validations from './validations';

describe('Validate Email tests', () => {
   it('should pass', () => {
     // Arrange (Variables etc)
      const input = 'jonatan@gmail.com';
  
      // Act (Here we will call the function)
      const isValid = validations.validateEmail(input);
  
      // Assert (Here we check if it passed correctly according to expectations)
      expect(isValid).toBe(true);
    });

  it('should fail', () => {
    // Arrange
    const input = 'jonatan@gmail';

    // Act
    const isValid = validations.validateEmail(input);

    // Assert
    expect(isValid).toBe(false);
  });

  it('should fail', () => {
    // Arrange
    const input = 'jonatan.com';

    // Act
    const isValid = validations.validateEmail(input);

    // Assert
    expect(isValid).toBe(false);
  });

  // it.each([
  //   // should fail
  //   {
  //     email: 'jack.nyberg&gmail.com',
  //     expectation: false
  //   },

  //   // should pass
  //   {
  //     email: 'jack.nyberg@gmail.com',
  //     expectation: true
  //   }
  // ])('should return expected boolean [case %#]', (data) => {
  //   const isValid = validations.validateEmail(data.email);

  //   expect(isValid).toBe(data.expectation);
  // });
});

describe('Validate ZIP tests', () => {
  it('should pass', () => {
    // Arrange
    const input = '12345';

    // Act
    const isValid = validations.validateZip(input);

    // Assert
    expect(isValid).toBe(true);
  });
  it('should fail', () => {
    // Arrange
    const input = '1234';

    // Act
    const isValid = validations.validateZip(input);

    // Assert
    expect(isValid).toBe(false);
  });
  it('should fail', () => {
    // Arrange
    const input = '123456';

    // Act
    const isValid = validations.validateZip(input);

    // Assert
    expect(isValid).toBe(false);
  });
  it('should fail', () => {
    // Arrange
    const input = 'abcde';

    // Act
    const isValid = validations.validateZip(input);

    // Assert
    expect(isValid).toBe(false);
  });
});
