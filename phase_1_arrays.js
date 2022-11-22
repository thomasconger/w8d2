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
