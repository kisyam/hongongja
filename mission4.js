const a = Number(prompt("월을 입력해주세요.", ""));

if (a == 0 || a > 12) {
  alert("1월부터 12월까지 입력해주세요");
} else if (a == 1 || a == 2 || a > 10) {
  alert("겨울입니다.");
} else if (a > 8) {
  alert("가을입니다.");
} else if (a > 6) {
  alert("여름입니다.");
} else if (a > 2) {
  alert("봄입니다.");
}
