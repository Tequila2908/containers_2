import { errorList } from './ErrorRepository';

export default class Character {
  constructor(name) {
    if (!name) {
      throw new Error(errorList.translate(1));
    } else if (String(name).length < 2 || String(name).length > 10) {
      throw new Error(errorList.translate(2));
    } else {
      this.name = String(name);
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) throw new Error(errorList.translate(3));
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.protection += this.protection * 0.2;
    this.health = 100;
  }

  damage(count) {
    this.health -= count;
  }
}
