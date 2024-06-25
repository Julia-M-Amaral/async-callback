const fruits = {
    red: ['Cherry', 'Apple', 'Raspberry', 'WaterMelon'],
    yellow: ['Banana', 'Mango', 'Pineapple', 'Passion Fruit'],
    purple: ['Fig', 'Plum', 'Grape', 'Blueberry']
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

async function loadAllData(){
    const data2 = await fetchYellowFruits();
    console.log(data2);

    const data3 = await fetchPurpleFruits();
    console.log(data3);

    const data1 = await fetchRedFruits();   
    console.log(data1);
}

loadAllData();