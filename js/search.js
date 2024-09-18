const search = document.getElementById("search");

// 검색 입력 시 모든 content_box에서 hide 제거하고, 검색어에 따라 필터링
function searcher() {
  let searchValue = search.value.toLowerCase(); // 검색어를 소문자로 가져옴
  let contentBoxes = document.getElementsByClassName("content_box"); // 모든 content_box 가져오기

  // 모든 content_box에서 hide 제거하고 보이도록 설정
  for (let i = 0; i < contentBoxes.length; i++) {
    contentBoxes[i].classList.remove("hide"); // hide 클래스 제거
    contentBoxes[i].style.display = "block"; // 모든 content_box를 보이게 설정
  }

  // 검색어가 입력된 경우, 검색어에 맞지 않는 항목을 숨기기
  if (searchValue) {
    for (let i = 0; i < contentBoxes.length; i++) {
      let question = contentBoxes[i].getElementsByClassName("question")[0].innerText.toLowerCase();

      // 검색어가 질문에 포함되지 않으면 해당 항목 숨기기
      if (question.indexOf(searchValue) === -1) {
        contentBoxes[i].style.display = "none";  // 검색어에 맞지 않는 항목 숨기기
      }
    }
  }
  
  // 검색어가 없을 경우 모든 content_box 다시 보이게 설정
  if (searchValue === "") {
    for (let i = 0; i < contentBoxes.length; i++) {
      contentBoxes[i].style.display = "block"; // 모든 content_box 보이기
    }
  }
}

// 검색창에서 입력이 일어날 때마다 searcher 함수 실행
search.addEventListener("keyup", searcher);
