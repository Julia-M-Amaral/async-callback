function waitTwoSeconds(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('Done waiting!');
        }, 2000)
    })
}


async function asyncFunction(){
    console.log('Waiting for 2 seconds...');
    const result = await waitTwoSeconds();
    console.log(result);
}

asyncFunction();