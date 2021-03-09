const submitBtn = document.getElementById("submitBtn");

function submitBtnHandler() {
  let mrkList = document.querySelectorAll('input[type="checkbox"]:checked');
  let correctCount = 0;
  for (i = 0; i < mrkList.length; i++) {
    if (mrkList[i].className == "correct") {
      correctCount++;
    }
  }
  calculateScore(correctCount);
}

function calculateScore(correctCount) {
  console.log("Your Score is " + correctCount);
}

submitBtn.addEventListener("click", submitBtnHandler);
