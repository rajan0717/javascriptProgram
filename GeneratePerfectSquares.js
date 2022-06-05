// Write a program to generate the perfect squares upto a given natural number.

// Algorithm
// 1. Design the layout of the UI that will allow the user to search for the perfect squares.
// 2. Gain the access of the elements.
// 3. Add an addEventListener() method to the searchButton that will be fired whent the user click on it.
//    Inside the addEventListener() method
//    a. Take the number for the input field
//    b. Make the text inside the input field empty and put the focus again on the input box.
//    c. Make the textContent of the output to "Output:"
//    d. Run the for loop upto the given number.
//         i) Calcualte the square root of the number( const sqRoot = Math.sqrt(i); ) 
//         ii) Check if it's floor function  value is equal to the sqRoot of not. i.e,. if(Math.floor(sqRoot) !== sqRoot)
//               Yes ----------- continue
//               No ------------ display the number

// Gaining the access of the elements
const input = document.querySelector('input');
const searchButton = document.querySelector('.searchButton');
const output = document.querySelector('.output');

searchButton.addEventListener('click', () => {
  // Making the textContent of the output to "Output: "
  output.textContent = "Output: \n";

  // Taking the number from teh input field
  const num = parseInt(input.value);

  // Making the text inside the input empty and the put the focus again on the input field
  input.value = '';
  input.focus();

  // Running the for loop upto the given number.
  for(let i = 1; i <= num; i++) {
    // Calcualte the square root of the number
    const sqRoot = Math.sqrt(i);

    // Check if the floor function value of the sqRoot is equall  to its value or not.
    if(Math.floor(sqRoot) !== sqRoot) {
      continue;
    } else {
      output.textContent += ` ${i}\n`;
    }
  }
});
