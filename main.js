function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  const sentence = [`sense.`, `make`, `all`, `will`, `This`];
console.log(reverseArray(sentence));
function greetAliens(arr){
    arr.forEach(item =>{
        console.log(`Oh powerful ${item}, we humans offer our unconditional surrender!`)
    })
}
const aliens = [`Blorgous`, `Glamyx`, `Wegord`, `SpaceKing`];

greetAliens(aliens);

  
const coolStuff = [
    `gameboys`,
    `skateboards`,
    `backwards hats`,
    `my room`,
    `temporary tattoos`
  ];
  const myStuff = [
    `sweaters`,
    `skateboards`,
    `family-night`,
    `my room`,
  ];
function justCoolStuff(array1,array2){
    let sameItems = [];
    for (let i=0;i<array1.length;i++){
            if (array2.includes(array1[i])){
            sameItems.push(array1[i]);
        }
}
        return sameItems;
}
console.log(justCoolStuff(myStuff, coolStuff));
const meal = [
    { name: `arugula`, source: `plant` },
    { name: `tomatoes`, source: `plant` },
    { name: `lemon`, source: `plant` },
    { name: `olive oil`, source: `plant` },
  ];
  const dinner = [
    { name: `hamburger`, source: `meat` },
    { name: `cheese`, source: `dairy` },
    { name: `ketchup`, source: `plant` },
    { name: `bun`, source: `plant` }
  ];
  function isTheDinnerVegan(arr){
    let result;
    arr.forEach(item =>{
        if(item.source !== 'plant'){
            result = false;
        }
        else if(result === undefined) {
            result = true;
        }
    });
      return result;
  }

  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  
  