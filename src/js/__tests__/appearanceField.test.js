import Field from '../field';

describe('Field', () => {
  let container;
  let field;

  beforeEach(() => {
    container = document.createElement('div');
    field = new Field(container);
  });

  test('Field instance is created without errors', () => {
    expect(field).toBeDefined();
  });
});

