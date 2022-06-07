let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
function filterRange(arr, a, b) {
  return arr.filter(element => a <= element && element <= b);
}
console.log(filtered);
console.log(arr);