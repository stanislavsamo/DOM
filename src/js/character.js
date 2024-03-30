// export default class Character {
//     constructor(container) {
//         this.container = container;
//         this.character = document.createElement('div');
//         this.character.classList.add('character');
//         this.container.appendChild(this.character);
//       }
  
//     moveCharacter() {
//       const cells = this.container.getElementsByClassName('cell');
//       const randomIndex = Math.floor(Math.random() * cells.length);
//       const randomCell = cells[randomIndex];
//       const rect = randomCell.getBoundingClientRect();
//       this.character.style.left = `${rect.left}px`;
//       this.character.style.top = `${rect.top}px`;
//     }
//   }

export default class Character {
    constructor(container) {
        this.container = container;
        this.character = document.createElement('div');
        this.character.classList.add('character');
        this.container.appendChild(this.character);
        
        this.positionChangeCount = 1;
        this.randomPosition();
    }

    moveCharacter() {
        this.randomPosition();
    }

    randomPosition() {
        const cells = this.container.getElementsByClassName('cell');
        const numCells = cells.length;
    
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * numCells);
        } while (randomIndex === this.previousIndex);

        console.log('JUMP - ',this.positionChangeCount);
        console.log('Random Index: ',randomIndex);
        console.log('Previous Index',this.previousIndex);

        const randomCell = cells[randomIndex];
        
        // Получаем размеры клетки
        const cellRect = randomCell.getBoundingClientRect();
        const cellWidth = cellRect.width;
        const cellHeight = cellRect.height;
    
        // Получаем размеры персонажа
        const characterWidth = this.character.offsetWidth;
        const characterHeight = this.character.offsetHeight;

        console.log('Cell width:', cellWidth);
        console.log('Cell height:', cellHeight);
        console.log('Character width:', characterWidth);
        console.log('Character height:', characterHeight);
    
        // Вычисляем координаты центра клетки
        const cellCenterX = cellRect.left + cellWidth / 2;
        const cellCenterY = cellRect.top + cellHeight / 2;

        console.log('Cell center:', cellCenterX, '/', cellCenterY);
    
        // Устанавливаем координаты для персонажа так, чтобы его центр совпадал с центром клетки
        this.character.style.left = cellCenterX - characterWidth / 1.5 + 'px';
        this.character.style.top = cellCenterY - characterHeight / 1.5 + 'px';
        console.log('Character cordinates: ', this.character.style.top, '/', this.character.style.left)
        this.previousIndex = randomIndex; // Сохраняем текущий индекс как предыдущий

        this.positionChangeCount++;
    }
    
}
