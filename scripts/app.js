const submitBtn = document.getElementById("submitBtn");

function submitBtnHandler() {
  let mrkList = document.querySelectorAll('input[type="checkbox"]:checked');
  const checklist = document.getElementById("checkboxes");
  checklist.style.visibility = "hidden";
  let correctCount = 0;
  for (i = 0; i < mrkList.length; i++) {
    if (mrkList[i].className == "correct") {
      correctCount++;
    }
  }

  calculateScore(correctCount);
}

function calculateScore(correctCount) {
  let resultText, resultGrade;
  const resultPrint = document.getElementById("result");
  if (correctCount >= 90) {
    resultText = "You are a certified Weeb!!";
    resultGrade = "SS";
  } else if (correctCount >= 80) {
    resultText = "You are pretty good";
    resultGrade = "A";
  } else if (correctCount >= 60) {
    resultText = "You are intermediate";
    resultGrade = "B";
  } else if (correctCount >= 40) {
    resultText = "You are satisfactory";
    resultGrade = "A";
  } else {
    resultText = "You are scum";
    resultGrade = "F";
  }
  resultPrint.style.visibility = "visible";
  resultPrint.innerHTML = `<h2>${correctCount * 10}</h2>
  <p>Your Grade: ${resultGrade}</p>
  <p>${resultText}</p>
  `;
}

submitBtn.addEventListener("click", submitBtnHandler);
