
function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

      if (arr[j] > arr[j + 1]) {

        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        console.log(arr.join(","));

      }

    }

    // Iterate through the array

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        // console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  }

  return;
}

module.exports = bubbleSort;
