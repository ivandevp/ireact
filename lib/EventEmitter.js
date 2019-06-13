export default class EventEmitter {
  constructor() {
    this.listeners = [];
  }

  emit(event, value) {
    this.listeners.forEach(listener => {
      const action = listener[event];

      if (action) {
        action(value);
      }
    });
  }

  on(event, callback) {
    this.listeners = this.listeners.concat([
      {
        [event]: callback
      }
    ]);
  }
}
