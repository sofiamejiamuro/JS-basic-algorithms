// 1
let driver1 = 'Sofia';
let navigator1 = 'Ana';
console.log(`The name of the driver is ${driver1}`);
console.log(`The name of the navigator is ${navigator1}`);

// 2
console.log(driver1.length)
if(driver1.length > navigator1.length ) {
  console.log(`The driver has the longest name, it has  ${driver1.length} characters`);
} else if (driver1.length < navigator1.length ) {
console.log(`It seems that the navigator has the longest name, it has ${navigator1.length} charactes.`)
} else {
  console.log(`Wow, you both have equally long names,  ${driver1.length} characters!`)
}

// 3
const exOne = driver1.toUpperCase().split('').join(' '); 
const exTwo = driver1.split('').reverse().join('') ;
console.log(exOne);
console.log(exTwo);
console.log(driver1.charCodeAt(0));
console.log(navigator1.charCodeAt(0));

if (driver1.charCodeAt(0) < navigator1.charCodeAt(0)){
  console.log('The driver"s name goes first.')
} else if (driver1.charCodeAt(0) > navigator1.charCodeAt(0)){
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
}

// 4