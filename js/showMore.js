var second = document.getElementById('second__column');
var third = document.getElementById('third__column');
var firstColumnBtn = document.getElementById('first__column_btn');
var secondColumnBtn = document.getElementById('second__column_btn');

function showSecond(){
  second.style.display = "block";
  firstColumnBtn.style.display = "none"
}
function showThird(){
  third.style.display = "block";
  secondColumnBtn.style.display = "none"
}
