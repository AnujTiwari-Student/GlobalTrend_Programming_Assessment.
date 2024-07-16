function removeDuplicates(arr) {
  return [...new Set(arr)];
}


const arrayWithDuplicates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
const arrayWithNoDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithNoDuplicates);
