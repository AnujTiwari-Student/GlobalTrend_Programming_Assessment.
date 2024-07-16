function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const sentence = "hello world! this is a test.";
const capitalizedSentence = capitalizeFirstLetter(sentence);

console.log(capitalizedSentence);
