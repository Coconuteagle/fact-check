$(".content_box").click(function () {
  $(this).children(".next_quest").toggle(300);
});
function checkbox_function() {
  const checkboxId = $(this).attr("id").split("--")[0];
  if ($(this).attr("id") === `${checkboxId}--checkbox`) {
    const toggling = $(`.${checkboxId}`);
    for (i = 0; i < toggling.length; i++) {
      if (toggling[i].classList.contains("hide")) {
        toggling[i].classList.remove("hide");
        toggling[i].style.display = "block";
      } else {
        toggling[i].classList.add("hide");
        toggling[i].style.display = "none";
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

$("input[type='checkbox']").on("click", is_checked);
$("input[type='checkbox']").on("click", checkbox_function);
$("input[type='checkbox']").on("click", searcher);
$("input[type='checkbox']").on("click", moveToSearchbar);
$("input[type='checkbox']").on("click", hideTopbar);
