const fs = require('fs');

const {foodList} = require('./shopList');

const data = JSON.stringify(foodList);

fs.writeFile('foodList.json', data, err => console.log(err));
