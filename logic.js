  // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    const statement = document.getElementById("statement");
    // optionButtons should be all the elements within the "options" div
    const optionButtons = document.getElementById("options").children;
    // explanation should be the "explanation" div
    const explanation = document.getElementById("explanation");
    const nextButton = document.querySelector(".next");
    const score = document.querySelector(".score");
    let scr = 0;
    let i = 0;
    const data = [
      {
        statement: "JavaScript was invented in 1995",
        answer: "true",
        explanation:
          "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.",
      },
      {
        statement: "Strings in JS are editable values",
        answer: "false",
        explanation:
          "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings.",
      },
      {
        statement: "1 + 1 === 2",
        answer: "true",
        explanation: "The plus operator gives the sum of two numbers",
      },
      {
        statement: "'1' + '1' === '2'",
        answer: "false",
        explanation:
          "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'.",
      },
      {
        statement: "typeof ['J', 'S'] === 'array'",
        answer: "false",
        explanation:
          "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.",
      },
    ];

    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation

    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = data[i].statement;

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    function disable(button) {
      button.setAttribute("disabled", "");
    }
    // enable(button) should remove the attribute "disabled" from the button element
    function enable(button) {
      button.removeAttribute("disabled");
    }

    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    function isCorrect(guess) {
      return guess === data[i].answer;
    }

    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    function Loop() {
      for (let option of optionButtons) {
        option.addEventListener("click", (event) => {
          // TODO 6B: Within the event listener function, display the fact's explanation by setting the text of the explanation element
          explanation.textContent = data[i].explanation;

          // TODO 7: Within the event listener function,
          // Use a for loop to disable all the option buttons
          for (let button of optionButtons) {
            disable(button);
          }

          // TODO 8: Within the event listener function,
          // Get the guessed value from the clicked button
          let guess = event.target.value;

          // Use a conditional to compare the guess to the fact's answer
          // and add the "correct"/"incorrect" class as appropriate
          if (isCorrect(guess)) {
            // correct answer!
            event.target.classList.add("correct");
            console.log("loop before" + scr);
            scr = scr + 1;
            console.log("loop after" + scr);
            score.textContent = `score: ${scr}/5`;
          } else {
            // wrong answer!
            event.target.classList.add("incorrect");
          }
          nextButton.removeAttribute("disabled");
        });
      }
    }
   

    function nextData() {
      i++;
      disable(nextButton);
      if (!(i === data.length)) {
        statement.textContent = data[i].statement;
        explanation.textContent = "";
        for (const iterator of optionButtons) {
          enable(iterator);
          iterator.removeAttribute("class");
        }
        
      } else {
        nextButton.textContent = "No more questions!";
      }
    }
    Loop();
    nextButton.addEventListener("click", () => {
      nextData();
    });