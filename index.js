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
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus ligula ac ullamcorper consequat. Maecenas congue tortor ipsum, vitae efficitur mi imperdiet sit amet. Nunc a elit blandit, vehicula sem eu, tempor elit. Nam leo elit, faucibus eget rutrum sit amet, blandit a risus. Aenean convallis risus quis ullamcorper congue. Integer sed lobortis velit, eu suscipit sapien. Ut ut aliquet tortor, vitae egestas sem. In sollicitudin blandit porta. Nulla at dictum mauris, tempor feugiat elit. Etiam eu imperdiet lacus. Quisque porttitor, sem quis malesuada posuere, quam libero porttitor nisi, ut porta libero nisi vel nunc. Cras ultrices mattis justo, et aliquet enim porta non. Cras libero est, semper congue felis at, faucibus auctor metus. Fusce lobortis eros quis dui facilisis, quis viverra mi faucibus. Donec eget elit bibendum, tincidunt elit in, imperdiet dolor. Morbi posuere quam ut sapien maximus, eu mollis metus pulvinar. Nullam tincidunt felis sed aliquet ultrices. Aenean et bibendum lacus. Quisque convallis, turpis id aliquet pharetra, metus metus laoreet tortor, eu posuere massa elit malesuada lorem. Quisque porta accumsan condimentum. Cras rutrum velit felis, vitae condimentum elit tincidunt eu. Quisque nec diam erat. Ut augue nisl, maximus nec velit id, facilisis molestie nibh. Aliquam ullamcorper sed tortor quis scelerisque. Aliquam egestas nunc nec suscipit pretium. Cras tristique enim metus, in dapibus urna consequat sit amet. Nullam viverra, leo a commodo tristique, magna metus commodo lectus, vel posuere lectus massa vel nulla. Donec et tortor aliquet, maximus felis id, malesuada nisi. Suspendisse varius lectus nec vestibulum pellentesque. Donec non sapien porttitor, porta mauris id, consequat risus. Nullam gravida vel lorem et lacinia. Sed sagittis, orci nec imperdiet vulputate, ex leo hendrerit justo, fermentum commodo neque enim nec lectus. Suspendisse mi velit, consequat a erat quis, luctus scelerisque enim. Maecenas eu mauris non justo suscipit ornare. Praesent risus risus, posuere et auctor ac, maximus eu odio. Vivamus molestie odio porttitor pellentesque tincidunt. '

const textSplitted = text.split(' ')
console.log(textSplitted.length);

const et = 'et'
console.log(text.search(et));

const driverArr = driver1.split('');
console.log(driverArr)
for(let i=0; i<driverArr.length; i++){
  console.log(driverArr[i])
} 


 // Step 1. Create an empty string that will host the new created string
let reverseName = ''
// Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the last character of the string As long as i is reater than or equals 0, the loop will go on We decrement i after each iteration */
for (let i = driverArr.length - 1; i >= 0; i--) { 
  reverseName += driverArr[i];
  //console.log(reverseName)
  /* Exaample for 'hello', length equals 5
  For each iteration: i = str.length - 1 and newString = newString + str[i]
  First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
  Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
  Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
  Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
  Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
  End of the FOR Loop*/
 
}

console.log(reverseName)

// Palindrome word

const wordToCheck = 'Sofia';

const wordArr = wordToCheck.toLowerCase().split('');
console.log(wordArr) 

let reversedWord = ''
for ( let i = 0; i < wordArr.length; i ++){
  reversedWord += wordArr[i];
}

console.log(reversedWord)

if(wordToCheck == reversedWord){
  console.log('Sí es un palíndromo')
} else {
  console.log('no es un palíndromo')
}

// Palindrome text
// 
const textToCheck = "A man, a plan, a canal, Panama!";
const textToCheckNoSpaces = textToCheck.toLowerCase().split(' ').join('')
const textArr = textToCheck.toLowerCase().split('');
let reversedText='';
for (let i = 0; i < textArr.length; i ++){
  if(textArr[i] !== ' '){
    reversedText += textArr[i]
  }
}
if(textToCheckNoSpaces == reversedText){
  console.log('Sí es un texto palíndromo ') 
  
}else{
  console.log('No es un texto paalíndromo')
}
// console.log(textArr)
console.log(textToCheckNoSpaces)
console.log(reversedText)