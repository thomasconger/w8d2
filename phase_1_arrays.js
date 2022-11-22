// Iterate through each of the elements
    // check if the element is repeated
        // if repeated, do nothing
        // if not repeated, shove into new array
// console.log the return array

// output = []
// this.forEach(ele => {
//   if output.indexOf(ele) === -1
//     output.push(ele);
// })
// console.log(output);

Array.prototype.uniq = function () {
  const output = []
  this.forEach(ele => {
    if (output.indexOf(ele) === -1) {
      output.push(ele);
    }
  })
 return output
}

let arr = ["1", "test", "1", "a", "test", "a"]

console.log(arr.uniq())


// we want to return the indices of any elements that sum to zero
// within the array, which we will then pass to our output array
Array.prototype.twoSum = function () {
  const output = [];
    // this.forEach (num)
    for (let step = 0; step < this.length; step++) {
      let secondStep = this.indexOf(this[step] * -1);
      if ( secondStep !== -1) {
        output.push([step, secondStep]);
      }
    }
  return output
}

let arr2 = [-1, 0, 5, 3, 7, 89, 1, -88, -89, 0, -5]

console.log(arr2.twoSum())

