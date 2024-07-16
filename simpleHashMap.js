class SimpleHashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    delete this.map[key];
  }
}

// Example usage:
const myMap = new SimpleHashMap();
myMap.put('key1', 'value1');
myMap.put('key2', 'value2');

console.log(myMap.get('key1')); 
console.log(myMap.get('key2')); 

myMap.remove('key1');
console.log(myMap.get('key1'));
