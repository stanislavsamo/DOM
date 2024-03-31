import Field from './field';
import Character from './character';

document.addEventListener('DOMContentLoaded', () => {
  const fieldElem = document.querySelector('.field');
  const field = new Field(fieldElem);
  const character = new Character(fieldElem);
  setInterval(() => character.moveCharacter(), 2000);
});
