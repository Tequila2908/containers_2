export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'name отсутствует');
    this.errors.set(2, 'Поле name должно содержать от 2 до 10 символов');
    this.errors.set(3, 'Перснаж мертв');
  }

  translate(code) {
    if (!this.errors.has(code)) throw new Error('Unknown error');
    return this.errors.get(code);
  }
}

export const errorList = new ErrorRepository();
