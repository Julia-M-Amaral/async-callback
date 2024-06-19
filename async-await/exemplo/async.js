function delay(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function asyncOperation(){
    console.log('Starting async operation...');
    await delay(2000);
    console.log('Async operation finished.')
}

function syncOperation(){
    console.log('Starting sync operation');
    for(let i = 1; i <= 3; i++){
        console.log(`Sync operation ${i}.`);
    }
    console.log('Sync operation finished.');
}

asyncOperation();


console.log('____________________________________________________');

syncOperation();