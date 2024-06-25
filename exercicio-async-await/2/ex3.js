function loadResource(id){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (`Resource [${id}] loaded.`);
        }, 2000);
    });
}

async function loadAllResources(){
    for(let i = 1; i <=3; i++){
        console.log(await loadResource(i));
    }
}

loadAllResources();