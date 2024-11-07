{

// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


function removeDuplicates(arr: number[]): number[] {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  }

  const numbers = [1, 2, 3, 4, 5, 5, 3, 1];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);


}