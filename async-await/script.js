/**Crie uma função assíncrona chamada fetchData que faz uma chamada simulada a uma API usando setTimeout para retornar dados após 3 segundos.*/

function database(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('banana, melon, apple, grape');
        }, 2000);
    });
}

async function fetchData(){
    console.log('Searching fruits...');
    const result = await database();
    console.log(`Fruits: ${result}`);
}

fetchData();