const binSearch = (arr, number, start = 0, end = arr.length - 1) => {

  if(end < 1) return arr[0];

  const middle = Math.floor((start + (end - start) / 2));

  if (number == arr[middle]) return arr[middle];

  if (end - 1 == start) return Math.abs(arr[start] - number) > Math.abs(arr[end] - number) ? arr[end] : arr[start]; 

  if (number > arr[middle]) return binSearch(arr, number, middle, end);

  if (number < arr[middle]) return binSearch(arr, number, start, middle);
}


let arr = [1, 2, 3, 5, 8, 13, 21, 21];

console.log(binSearch(arr, 14));