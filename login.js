javascript
function loginCheck() {

  const id =
  document.getElementById("loginId").value;

  const pw =
  document.getElementById("loginPw").value;

  const msg =
  document.getElementById("loginMsg");

  if(id === "" || pw === "") {

    msg.innerHTML =
    "모든 항목을 입력하세요.";

    msg.style.color = "salmon";

    return;
  }

  if(id.length < 4) {

    msg.innerHTML =
    "아이디는 4글자 이상이어야 합니다.";

    msg.style.color = "salmon";

    return;
  }

  if(pw.length < 6) {

    msg.innerHTML =
    "비밀번호는 6글자 이상이어야 합니다.";

    msg.style.color = "salmon";

    return;
  }

  msg.innerHTML = "로그인 성공!";

  msg.style.color = "lightgreen";
}

