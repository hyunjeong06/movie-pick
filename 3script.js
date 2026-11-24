// 로그인 창 열기
function openLogin() {
  window.open(
    "login.html",
    "loginWindow",
    "width=500,height=600"
  );
}

// 회원가입 창 열기
function openJoin() {
  window.open(
    "join.html",
    "joinWindow",
    "width=500,height=700"
  );
}

// 좋아요 버튼 토글
function likeMovie(button) {
  if (button.innerHTML.trim() === "좋아요") {
    button.innerHTML = "좋아요 완료";
  } else {
    button.innerHTML = "좋아요";
  }
}

// 검색 기능 (존재할 때만 실행되도록 예외 처리 추가)
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function() {
    const value = searchInput.value.toLowerCase();
    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
      const text = movie.innerText.toLowerCase();
      if (text.includes(value)) {
        movie.style.display = "flex";
      } else {
        movie.style.display = "none";
      }
    });
  });
}