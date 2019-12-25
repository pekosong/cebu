const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const dict = {};
data.forEach(e => (dict.hasOwnProperty(e) ? dict[e]++ : (dict[e] = 1)));

console.log(dict);
