const search = document.getElementById("search");

// 검색 입력 시 모든 content_box에서 hide 제거하고, 검색어에 따라 필터링
function searcher() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  let contentBoxes = document.getElementsByClassName("content_box");

  // 검색어 입력 시 모든 content_box에서 hide 제거
  for (let i = 0; i < contentBoxes.length; i++) {
    contentBoxes[i].classList.remove("hide");
    contentBoxes[i].style.display = "block"; // 모든 content_box를 보이게 설정
  }

  // 검색어가 입력된 경우, 검색어에 맞지 않는 항목 숨기기
  if (searchValue) {
    for (let i = 0; i < contentBoxes.length; i++) {
      let question = contentBoxes[i].getElementsByClassName("question")[0].innerText.toLowerCase();

      // 검색어가 질문에 포함되어 있지 않으면 해당 항목 숨기기
      if (question.indexOf(searchValue) === -1) {
        contentBoxes[i].style.display = "none";  // 검색어에 맞지 않는 항목 숨기기
      }
    }
  }

  // 검색어가 없을 경우 모든 content_box 다시 보이게 설정
  if (searchValue === "") {
    for (let i = 0; i < contentBoxes.length; i++) {
      contentBoxes[i].style.display = "block";
    }
  }
}

// 이벤트 리스너 추가
search.addEventListener("keyup", searcher);
