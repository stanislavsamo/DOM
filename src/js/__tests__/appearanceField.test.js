import Field from '../field';

describe('Field', () => {
  test('Field instance is created without errors', () => {
    const container = document.createElement('div');
    expect(() => {
      new Field(container);
    }).not.toThrow();
  });
});
