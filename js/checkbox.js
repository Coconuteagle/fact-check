// 클릭 이벤트 트리거
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

// 검색어가 입력되면 모든 체크박스를 클릭한 것처럼 동작하게 함
function searcher() {
  let searchValue = document.getElementById("search").value.toLowerCase(); // 검색어를 소문자로 가져옴

  // 검색어가 있으면 모든 체크박스 클릭 이벤트를 강제로 트리거
  if (searchValue) {
    $("input[type='checkbox']").each(function () {
      $(this).trigger("click"); // 모든 체크박스를 클릭한 것처럼 동작
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
