  function processData(inputArray) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Filter out odd numbers
          const filteredArray = inputArray.filter(num => num % 2 === 0);
          resolve(filteredArray);
        }, 1000); // Resolve after 1 second
      })
      .then((filteredArray) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // Multiply even numbers by 2
            const multipliedArray = filteredArray.map(num => num * 2);
            resolve(multipliedArray);
          }, 2000); // Resolve after 2 seconds
        });
      });
    }

    const outputElement = document.getElementById('output');

    processData([1, 2, 3, 4])
      .then((result) => {
        // Update the text of the HTML element with the final result
        outputElement.textContent = result.join(', ');
      });