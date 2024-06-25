const fruits = {
    red: ['Cherry', 'Apple', 'Raspberry', 'WaterMelon'],
    yellow: ['Banana', 'Mango', 'Pineapple', 'Passion Fruit'],
    purple: ['Fig', 'Plum', 'Grape', 'Blueberry']
}

const numbers = {
    negative: [-1,-2,-3],
    neutral: [0],
    positive: [1,2,3,4]
}

function fetchRedFruits(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (`Red fruits: ${fruits.red.join(", ")}`);
        }, 1000);
    });
}

function fetchYellowFruits(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (`Yellow fruits: ${fruits.yellow.join(", ")}`);
        }, 2000);
    });
}

function fetchPurpleFruits(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (`Purple fruits: ${fruits.purple.join(", ")}`);
        }, 3000);
    });
}

/*async function loadAllData(){
    const data2 = await fetchYellowFruits();
    console.log(data2);

    const data3 = await fetchPurpleFruits();
    console.log(data3);

    const data1 = await fetchRedFruits();   
    console.log(data1);
}*/

//loadAllData();


function fetchPositiveNumbers(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numbers.positive)
        }, 5000);
    });
}

function fetchNeutralNumbers(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numbers.neutral);
        }, 5200);
    });
}

function fetchNegativeNumbers(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numbers.negative);
        }, 5300);
    });
}

async function loadAllNumbers(){
    const results = await Promise.all([fetchPositiveNumbers(), fetchNeutralNumbers(), fetchNegativeNumbers()]);
    console.log(results);
}



async function loadAllFruits(){
    const results = await Promise.all([fetchYellowFruits(), fetchRedFruits(), fetchPurpleFruits()]);
    console.log(results);
}

loadAllFruits();
loadAllNumbers();
