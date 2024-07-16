function toTitleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const sentence = "hello world! this is a test.";
const titleCasedSentence = toTitleCase(sentence);

console.log(titleCasedSentence);
