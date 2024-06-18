function orderFood(data, callback1, callback2) {
  console.log("Ordering some food...");

  setTimeout(() => {
    console.log("Calling Soul ❤️");
  }, 1000);

  setTimeout(() => {
    callback1(data);
  }, 2000);

  setTimeout(() => {
    callback2(data);
  }, 5000);
}

function foodPreparing(food) {
  console.log(`IFOOD: Preparing ${food}...`);
}

function foodReady(food) {
  console.log(`Eat the ${food}`);
}

const food = "🍪";

orderFood(food, foodPreparing, foodReady);
