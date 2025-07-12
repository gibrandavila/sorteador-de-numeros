<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>


  <h3 align="center">Random Numbers- README</h3>

  <p align="center">
  A javascript project from Alura.
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

This project involved building a simple yet effective number randomizer using JavaScript. The HTML and CSS components were already in place, providing a clean interface where users could input parameters for a randomized number selection. My responsibility was to implement the underlying logic and interactivity, enabling the functionality that allows users to generate random numbers within a defined range.

The application allows the user to enter three key inputs: a starting number, an ending number, and the quantity of random numbers to be generated within that interval. Upon clicking the “sortear” (draw) button, the JavaScript code is executed to perform the randomization and present the results.

To achieve this, I first created a function that generates an array containing all the numbers between the starting and ending values. This array serves as the pool of valid numbers from which the random selection is made. I ensured that the logic handles both ascending and descending input values and validated that the range was numerically and logically consistent.

Next, I implemented a mechanism to randomly select a specific number of elements from the array without repetition. This involved using Math.random() in combination with array manipulation methods to extract unique values efficiently. I also included input validation to prevent issues such as requesting more numbers than the interval can provide or submitting non-numeric entries.

Once the random numbers were selected, I used the .join() method to convert the array into a string of comma-separated values for clean and readable output. This result was then dynamically inserted into the HTML, allowing users to immediately see the outcome of their draw on the screen without reloading the page.

This project allowed me to deepen my understanding of key JavaScript concepts such as arrays, loops, conditional logic, event handling. It also offered practical experience in working with user input, data validation, and randomized selection algorithms.

From a user experience perspective, the tool is lightweight, responsive, and intuitive, making it useful for a variety of contexts—from classroom activities to casual applications requiring randomized output. Beyond the functionality, it reflects my growing confidence in writing clean and reliable JavaScript code and demonstrates my ability to turn a basic interface into an interactive and engaging tool.

<!-- CONTACT -->
## Contact

Gibran Miranda Rodrigues D'avila- gibran.davila.dev@gmail.com

