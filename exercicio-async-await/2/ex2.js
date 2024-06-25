function step1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Step one complete.`);
        }, 5000);
    });
}

function step2(previusResult){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${previusResult}. Step two complete.`);
        }, 10000);
    });
}

function step3(previusResult){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${previusResult}. Step three complete.`);
        }, 15000);
    });
}

async function loadSteps(){
    const resultStep1 = await step1();
    console.log(resultStep1);

    const resultStep2 = await step2(resultStep1);
    console.log(resultStep2);

    const resultStep3 = await step3(resultStep2);
    console.log(resultStep3);

}

loadSteps();