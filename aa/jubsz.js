function orderFood(data, callback1, callback2) {
  console.log("Ordering some food...");
  setTimeout(() => {
    callback2(data);
  }, 5000);
  setTimeout(() => {
    console.log("Calling Soul ❤️");
  }, 1000);

  setTimeout(() => {
    callback1(data);
  }, 2000);

}

function foodPreparing(food) {
  console.log(`IFOOD: Preparing ${food}...`);
}

function foodReady(food) {
  console.log(`Eat the ${food}`);
}

const food = "🍪";

console.log('Hmmm i want candy');

orderFood(food, foodPreparing, foodReady);



