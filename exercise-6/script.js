let numberParameter = 2;

function processData(num){
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = num * 2;
      resolve(result);
    }, 1500);
  });
}

async function loadProcessedData(){
  const result = await processData(numberParameter);
  console.log(result);
}

//loadProcessedData();

async function processMultipleData(numbers){
  for (const num of numbers){ //const num -> pega o elemento do indice atual do "of numbers" (array)
    const result = await processData(num);
    console.log(`Processed: ${result}`);
  }
}

processMultipleData([1,2,3,4,5]);