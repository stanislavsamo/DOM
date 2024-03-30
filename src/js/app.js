  import Field from './field.js';
  import Character from './character.js';
  
  document.addEventListener('DOMContentLoaded', function() {
      const fieldElem = document.querySelector('.field');
      const field = new Field(fieldElem);
      const character = new Character(fieldElem);
      setInterval(() => character.moveCharacter(), 2000);
  });
  