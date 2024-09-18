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

// 체크박스 클릭 시 각 기능 연결
$("input[type='checkbox']").on("click", is_checked);
$("input[type='checkbox']").on("click", checkbox_function);
$("input[type='checkbox']").on("click", searcher);
$("input[type='checkbox']").on("click", moveToSearchbar);
$("input[type='checkbox']").on("click", hideTopbar);
