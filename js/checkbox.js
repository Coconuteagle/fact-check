$(".content_box").click(function () {
  $(this).children(".next_quest").toggle(300);
});

function checkbox_function() {
  const checkboxId = $(this).attr("id").split("--")[0];
  if ($(this).attr("id") === `${checkboxId}--checkbox`) {
    const toggling = $(`.${checkboxId}`);
    for (let i = 0; i < toggling.length; i++) {
      if (toggling[i].classList.contains("hide")) {
        toggling[i].classList.remove("hide");
        toggling[i].style.display = "block"; // 해당 카테고리 보이기
      } else {
        toggling[i].classList.add("hide");
        toggling[i].style.display = "none"; // 해당 카테고리 숨기기
      }
    }
  }
}

function is_checked() {
  const iCheck = $(this).parent().children("i");
  iCheck.toggle(500);
  const menu = $(this).parent()[0];
  if (menu.classList.contains("menu__checked")) {
    menu.classList.remove("menu__checked");
  } else {
    menu.classList.add("menu__checked");
  }
}

// 검색어가 있는지 확인하고, 검색어가 있으면 모든 content_box를 보이게 설정
function searcher() {
  let searchValue = document.getElementById("search").value.toLowerCase(); // 검색어를 소문자로 가져옴
  let contentBoxes = document.getElementsByClassName("content_box"); // 모든 content_box 가져오기

  // 검색어가 있는 경우 모든 항목 보이게 설정
  if (searchValue) {
    for (let i = 0; i < contentBoxes.length; i++) {
      contentBoxes[i].classList.remove("hide");
      contentBoxes[i].style.display = "block"; // 모든 content_box를 보이게 설정
    }
  }

  // 검색어에 맞지 않는 항목은 숨기기
  if (searchValue) {
    for (let i = 0; i < contentBoxes.length; i++) {
      let question = contentBoxes[i].getElementsByClassName("question")[0].innerText.toLowerCase();

      // 검색어가 질문에 포함되지 않으면 해당 항목 숨기기
      if (question.indexOf(searchValue) === -1) {
        contentBoxes[i].style.display = "none";  // 검색어에 맞지 않는 항목 숨기기
      }
    }
  }
  
  // 검색어가 없으면 기존 체크박스 필터가 작동하도록 함
  if (!searchValue) {
    $("input[type='checkbox']").each(function () {
      checkbox_function.call(this);
    });
  }
}

// 체크박스 클릭 시 각 기능 연결
$("input[type='checkbox']").on("click", is_checked);
$("input[type='checkbox']").on("click", checkbox_function);
$("input[type='checkbox']").on("click", searcher);
$("input[type='checkbox']").on("click", moveToSearchbar);
$("input[type='checkbox']").on("click", hideTopbar);

// 검색창에서 입력이 일어날 때마다 searcher 함수 실행
document.getElementById("search").addEventListener("keyup", searcher);
