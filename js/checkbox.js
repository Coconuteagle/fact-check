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

// Attach event listeners to checkboxes
$("input[type='checkbox']").on("click", is_checked);
$("input[type='checkbox']").on("click", checkbox_function);
$("input[type='checkbox']").on("click", searcher);
// Commented out since moveToSearchbar is undefined
// $("input[type='checkbox']").on("click", moveToSearchbar);
$("input[type='checkbox']").on("click", hideTopbar);

const search = document.getElementById("search");

function searcher() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  let content_box = document.getElementsByClassName("content_box");

  for (let i = 0; i < content_box.length; i++) {
    if (!content_box[i].classList.contains("hide")) {
      let question = content_box[i].getElementsByClassName("question");
      if (question[0].innerHTML.toLowerCase().indexOf(searchValue) != -1) {
        content_box[i].style.display = "block";
      } else {
        content_box[i].style.display = "none";
      }
    }
  }

  if (searchValue === "") {
    $(".content_box").removeAttr("style");
  }
}

function hideTopbar() {
  $("#search-box").css({ height: "0" });
  $(".search_box").css({ bottom: "-150px" });
  $("#container").css({ "margin-top": "170px" });
  $("#question_mark__container").hide(300);
}

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  const searchBoxHeight = $("#search-box").prop("style").height;
  if (searchBoxHeight) {
    if (scrollTop > 0) {
      $("#search").css({ position: "fixed", top: "10px", bottom: "auto" });
      $(".menu_list").css({ position: "fixed", top: "80px" });
      $("#empty_box").show();
    } else {
      $("#search").removeAttr("style");
      $(".menu_list").removeAttr("style");
      $("#empty_box").hide();
    }
  } else {
    if (scrollTop > 400) {
      $("#search").css({ position: "fixed", top: "10px", bottom: "auto" });
      $(".menu_list").css({ position: "fixed", top: "80px" });
      $("#empty_box").show();
    } else {
      $("#search").removeAttr("style");
      $(".menu_list").removeAttr("style");
      $("#empty_box").hide();
    }
  }
});

// Commented out since moveToSearchbar is undefined
// search.addEventListener("click", moveToSearchbar);
search.addEventListener("click", hideTopbar);

// Ensure updateCheckboxesBasedOnSearch is defined before this event listener
function updateCheckboxesBasedOnSearch() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  let checkboxes = $("input[type='checkbox']");

  if (searchValue !== "") {
    // Check all checkboxes and update UI
    checkboxes.each(function() {
      if (!$(this).prop('checked')) {
        $(this).prop('checked', true);
        is_checked.call(this);
        checkbox_function.call(this);
      }
    });
  } else {
    // Uncheck all checkboxes and revert UI
    checkboxes.each(function() {
      if ($(this).prop('checked')) {
        $(this).prop('checked', false);
        is_checked.call(this);
        checkbox_function.call(this);
      }
    });
  }
}

// Now add the event listener for keyup
search.addEventListener("keyup", function() {
  searcher();
  updateCheckboxesBasedOnSearch();
});
