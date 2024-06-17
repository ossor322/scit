// javascript 작성

function calcScore(e, val) {
  let expectedScoreTag =
    e.parentNode.parentNode.querySelector(".expectedScore");

  if (isNaN(val)) {
    alert("숫자를 입력하세요");
    e.value = null;
    expectedScoreTag.innerHTML = "";
    return;
  }

  if (val < 0 || val > 20) {
    alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
    e.value = null;
    expectedScoreTag.innerHTML = "";
    return;
  }

  expectedScoreTag.innerHTML = "<span>[예상점수] " + val * 5 + "점</span>";
}

function showResult() {
  document.querySelector("footer").style.display = "block";
  let list = document.getElementsByTagName("input");

  let failCounter = 0;
  let sum = 0;

  for (item of list) {
    let score = item.value == "" ? 0 : item.value;
    if (score < 40) failCounter++;
    sum += parseInt(score) * 5;
  }

  let avg = sum / 5;

  let passOrFail = "";
  if (failCounter == 0 && avg >= 60) passOrFail = "합격";
  else passOrFail = "불합격";

  let str = `
    <ul>
      <li>평균 : ${avg} </li>
      <li>과락된 과목 수 : ${failCounter} 과목</li>
    </ul>

    <div class='pass-fail'>${passOrFail}</div>
  `;

  document.querySelector(".result-details").innerHTML = str;
}
