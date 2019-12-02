const state = (() => ({
  current: { keys: [] },
  init() {
    if (localStorage.length) {
      this.getAllKeys().forEach(key => {
        this.current[key] = this.get(key);
      });
    }
  },
  set(key, value) {
    if (this.current.keys.indexOf(key) === -1) {
      this.current.keys.push(key);
      localStorage.setItem('keys', JSON.stringify(this.current.keys));
    }
    localStorage.setItem(key, JSON.stringify(value));
    this.current[key] = this.get(key);
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  getAllKeys() {
    this.current.keys = this.get('keys');
    return this.current.keys;
  },
  reset() {
    localStorage.clear();
  },
}))();

export default state;
