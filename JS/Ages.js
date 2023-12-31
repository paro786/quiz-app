const ages = document.querySelector(".ages");
let next3 = document.querySelector("#next3");

// on click ages section this function will be executed
ages.onclick = () => {
  const val = document.querySelector(".input-val").value;

  if (val == "") {
    alert("Please Enter Name Before Choosing Category");
    return;
  }
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "Ages";
  showQuestionages(0);
  queCounterage(1);
  printname();
  showMynum();
};


// This button will work only for changing questins of ages
next3.onclick = () => {
  if (qu_count < Ages.length - 1) {
    qu_count++;
    qu_numb++;
    count++;     // counting questons for attemped
    score.innerHTML = "score: " + userscore;
    showQuestionages(qu_count); // jumping on next question
    queCounterage(qu_numb);
    next_button.classList.remove("show");
    next2.classList.remove("show");
    next3.classList.remove("show");
  } else {
    count++;
    console.log("questons are completed");
    showResultBox();
  }
};

// This section is for displaying questions related Ages.
showQuestionages = (index) => {
  const question_text = document.querySelector(".Question");

  let qu_tag =
    "<span>" + Ages[index].numb + ". " + Ages[index].question + "</span>";
  let option_tag =
    '<span class="option">' +
    Ages[index].option[0] +
    "</span>" +
    '<span class="option">' +
    Ages[index].option[1] + //add loops here
    "</span>" +
    '<span class="option">' +
    Ages[index].option[2] +
    "</span>" +
    '<span class="option">' +
    Ages[index].option[3] +
    "</span>";

  question_text.innerHTML = qu_tag;
  answer_options.innerHTML = option_tag;
  const option = answer_options.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelectedages(this)"); //adding onclick event on options
  }
};


// This section compares answer of user selected with correct answer
function optionSelectedages(answer) {
  let userAns = answer.textContent;
  let correctAns = Ages[qu_count].answer;
  let alloptions = answer_options.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correctAns"); //if answer is correct background color of answer will be green
    userscore += 1;
    console.log("Answer is correct");
  } else {
    answer.classList.add("incorrectAns"); // if answer is wrong background color will be red.
    console.log("Answer is wrong");

    for (let i = 0; i < alloptions; i++) {
      if (answer_options.children[i].textContent == correctAns) {
        answer_options.children[i].classList.add("correctAns");
        console.log("working");
      }
    }
  }

  // once user click one option disable all other options
  for (let i = 0; i < alloptions; i++) {
    answer_options.children[i].classList.add("disabled");
  }

  next3.classList.add("show");
}


// This section changes question count on the top of question
function queCounterage(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount = "<span>" + index + "/" + PIPES.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}
