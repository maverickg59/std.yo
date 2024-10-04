export const javascriptFlashcard: FlashcardData[] = [
  {
    flashcard_pack_name: "JavaScript Array Methods",
    flashcard_pack_id: 20001,
    flashcard_category: "javascript",
    flashcard_pack: [
      {
        term: "Array.from()",
        definition:
          "Creates a new array from an array-like or iterable object. Use case: converting a string to an array.",
      },
      {
        term: "Array.fromAsync()",
        definition:
          "Creates an array from an async iterable or promise. Use case: converting an async iterable to an array.",
      },
      {
        term: "Array.isArray()",
        definition:
          "Checks if the given value is an array. Use case: validating if a variable is an array before performing array operations.",
      },
      {
        term: "Array.of()",
        definition:
          "Creates a new array with the specified elements. Use case: creating an array from individual values.",
      },
      {
        term: "Array.at()",
        definition:
          "Returns the element at a given index. Use case: accessing the last element of an array.",
      },
      {
        term: "Array.concat()",
        definition:
          "Merges two or more arrays into a new array. Use case: combining multiple arrays into one.",
      },
      {
        term: "Array.copyWithin()",
        definition:
          "Copies a sequence of array elements within the array. Use case: copying elements within the array.",
      },
      {
        term: "Array.entries()",
        definition:
          "Returns a new array iterator object that contains key/value pairs for each index in the array. Use case: iterating over key-value pairs.",
      },
      {
        term: "Array.every()",
        definition:
          "Checks if every element in the array passes a test. Use case: checking if all numbers in an array are greater than 10.",
      },
      {
        term: "Array.fill()",
        definition:
          "Fills all elements in an array with a static value. Use case: initializing an array with the same value.",
      },
      {
        term: "Array.filter()",
        definition:
          "Creates a new array with all elements that pass the test. Use case: filtering out even numbers from an array.",
      },
      {
        term: "Array.find()",
        definition:
          "Returns the first element that matches the condition in the callback. Use case: finding an element greater than a specified value in an array.",
      },
      {
        term: "Array.findIndex()",
        definition:
          "Returns the index of the first element that matches the condition. Use case: finding the index of the first number greater than 10.",
      },
      {
        term: "Array.findLast()",
        definition:
          "Returns the last element that matches a condition. Use case: finding the last number greater than 10.",
      },
      {
        term: "Array.findLastIndex()",
        definition:
          "Returns the index of the last element that matches a condition. Use case: finding the last index of a number greater than 10.",
      },
      {
        term: "Array.flat()",
        definition:
          "Flattens an array up to a specified depth. Use case: flattening a nested array.",
      },
      {
        term: "Array.flatMap()",
        definition:
          "Maps each element using a function and flattens the result into a new array. Use case: doubling each number and flattening the result.",
      },
      {
        term: "Array.forEach()",
        definition:
          "Executes a provided function once for each array element. Use case: logging each element in an array.",
      },
      {
        term: "Array.includes()",
        definition:
          "Checks if an array contains a specific element. Use case: checking if an array contains a value.",
      },
      {
        term: "Array.indexOf()",
        definition:
          "Returns the first index at which a given element is found. Use case: finding the index of the number 3 in an array.",
      },
      {
        term: "Array.join()",
        definition:
          "Joins all elements of an array into a string. Use case: joining an array of words into a sentence.",
      },
      {
        term: "Array.keys()",
        definition:
          "Returns a new array iterator that contains the keys for each index. Use case: iterating over the keys of an array.",
      },
      {
        term: "Array.lastIndexOf()",
        definition:
          "Returns the last index at which a given element is found. Use case: finding the last occurrence of an element.",
      },
      {
        term: "Array.map()",
        definition:
          "Creates a new array with the results of calling a function on every element. Use case: multiplying each element by 2.",
      },
      {
        term: "Array.pop()",
        definition:
          "Removes the last element from an array and returns it. Use case: removing the last element of an array.",
      },
      {
        term: "Array.push()",
        definition:
          "Adds one or more elements to the end of an array and returns the new length. Use case: adding elements to an array.",
      },
      {
        term: "Array.reduce()",
        definition:
          "Applies a function against an accumulator and each element, reducing it to a single value. Use case: summing all values in an array.",
      },
      {
        term: "Array.reduceRight()",
        definition:
          "Applies a function against an accumulator and each element (from right to left), reducing it to a single value. Use case: reducing an array from right to left.",
      },
      {
        term: "Array.reverse()",
        definition:
          "Reverses the order of elements in an array. Use case: reversing the order of an array.",
      },
      {
        term: "Array.shift()",
        definition:
          "Removes the first element from an array and returns it. Use case: removing the first element of an array.",
      },
      {
        term: "Array.slice()",
        definition:
          "Returns a shallow copy of a portion of an array. Use case: extracting a portion of an array.",
      },
      {
        term: "Array.some()",
        definition:
          "Checks if at least one element passes the test implemented by the callback function. Use case: checking if any value is greater than 10.",
      },
      {
        term: "Array.sort()",
        definition:
          "Sorts the elements of an array in place and returns the array. Use case: sorting numbers in ascending order.",
      },
      {
        term: "Array.splice()",
        definition:
          "Changes the contents of an array by removing or replacing existing elements and/or adding new ones. Use case: removing 1 element at index 1.",
      },
      {
        term: "Array.toLocaleString()",
        definition:
          "Returns a string representing the array, with locale-specific formatting. Use case: converting an array of dates to a localized string.",
      },
      {
        term: "Array.toReversed()",
        definition:
          "Creates a new array with the elements in reverse order. Use case: reversing an array without modifying the original.",
      },
      {
        term: "Array.toSorted()",
        definition:
          "Creates a new array with the elements sorted. Use case: sorting an array without modifying the original.",
      },
      {
        term: "Array.toSpliced()",
        definition:
          "Creates a new array with elements added or removed at a specific position. Use case: splicing an array without modifying the original.",
      },
      {
        term: "Array.toString()",
        definition:
          "Returns a string representing the array. Use case: converting an array to a string.",
      },
      {
        term: "Array.unshift()",
        definition:
          "Adds one or more elements to the beginning of an array and returns the new length. Use case: adding elements to the start of an array.",
      },
      {
        term: "Array.values()",
        definition:
          "Returns a new array iterator object that contains the values for each index in the array. Use case: iterating over the values of an array.",
      },
      {
        term: "Array.with()",
        definition:
          "Creates a new array with a specified element replaced at a given index. Use case: replacing an element at a specific index.",
      },
      {
        term: "Array.length()",
        definition:
          "Returns the number of elements in the array. Use case: checking the length of an array.",
      },
    ],
  },
];
