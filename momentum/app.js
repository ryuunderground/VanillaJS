const age = prompt("How old r u?");
// prompt 단점, 일부 브라우저 지원 안 함, CSS 적용 X //

/* parseInt(age);
  string --> number 
  글자는 무시하고 해당 지점 까지의 정수값 리턴
  213asd = 213
  sad567 = NaN(Not a number) */
console.log(parseInt(age));
// prompt 캔슬 시 값: null //
