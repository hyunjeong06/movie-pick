javascript
function joinCheck() {

  const name = document.getElementById("joinName").value;
  const id = document.getElementById("joinId").value;
  const pw = document.getElementById("joinPw").value;
  const pw2 = document.getElementById("joinPw2").value;
  const email = document.getElementById("joinEmail").value;

  const msg = document.getElementById("joinMsg");

  if(name === "" || id === "" || pw === "" || pw2 === "" || email === "") {

    msg.innerHTML = "모든 항목을 입력하세요.";
    msg.style.color = "red";

    return;
  }

  if(id.length < 4) {

    msg.innerHTML = "아이디는 4글자 이상이어야 합니다.";
    msg.style.color = "red";

    return;
  }

  if(pw.length < 6) {

    msg.innerHTML = "비밀번호는 6글자 이상이어야 합니다.";
    msg.style.color = "red";

    return;
  }

  if(pw !== pw2) {

    msg.innerHTML = "비밀번호가 일치하지 않습니다.";
    msg.style.color = "red";

    return;
  }

  if(!email.includes("@")) {

    msg.innerHTML = "올바른 이메일 형식을 입력하세요.";
    msg.style.color = "red";

    return;
  }

  msg.innerHTML = "회원가입 완료!";
  msg.style.color = "green";
}