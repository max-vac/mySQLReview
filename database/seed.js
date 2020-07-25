let db = require('./index')

let food = [
  { name: "burgers",
    price: 10,
    rating: 10,
    daveRATE: 0
 },
 {  name: "pizza",
    price: 10,
    rating: 10,
    daveRATE: 0
 },
 {  name: "sushi",
    price: 10,
    rating: 10,
    daveRATE: 0
 },
 {  name: "dave",
    price: 10,
    rating: 10,
    daveRATE: 0
 },
 {  name: "wutang",
    price: 10,
    rating: 10,
    daveRATE: 0
 },
];


const seedMe = (foodList) => {
  foodList.map((food) => {
    db.query(`INSERT INTO food (name, price, rating, daveRATE) VALUES ("${food.name}", ${food.price}, ${food.rating}, ${food.daveRATE});`, (err) => {
      if (err) {
        console.log('seeding failed');
      } else {
        console.log('seeding successful');
      }
    })
  });
}

seedMe(food);

