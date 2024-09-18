const search = document.getElementById("search");

// 검색 입력할 시 다른 페이지 넘어가도 기존 검색어 유지
function searcher() {
  let search = document.getElementById("search").value.toLowerCase();
  let content_box = document.getElementsByClassName("content_box");

  // 검색 시작 시 모든 content_box에서 hide 제거
  for (let i = 0; i < content_box.length; i++) {
    content_box[i].classList.remove("hide");
  }

  // 검색어에 맞지 않는 항목을 숨기고, 맞는 항목은 보이게 처리
  for (let i = 0; i < content_box.length; i++) {
    let question = content_box[i].getElementsByClassName("question");
    if (question[0].innerHTML.toLowerCase().indexOf(search) !== -1) {
      content_box[i].style.display = "block";
    } else {
      content_box[i].style.display = "none";
    }
  }

  // 검색어가 없을 경우 모든 content_box를 보이게 설정
  if (search === "") {
    for (let i = 0; i < content_box.length; i++) {
      content_box[i].style.display = "block";
    }
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
  const searchBoxHieght = $("#search-box").prop("style").height;
  if (searchBoxHieght) {
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

search.addEventListener("click", moveToSearchbar);
search.addEventListener("click", hideTopbar);
search.addEventListener("keyup", searcher);
