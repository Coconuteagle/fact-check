$(document).ready(function() {
  // Toggle next question visibility on content box click
  $(".content_box").click(function () {
    $(this).children(".next_quest").toggle(300);
  });

  // Function to toggle visibility based on checkbox
  function checkbox_function() {
    const checkboxId = $(this).attr("id").split("--")[0];
    if ($(this).attr("id") === `${checkboxId}--checkbox`) {
      const toggling = $(`.${checkboxId}`);
      toggling.each(function () {
        $(this).toggleClass("hide");
        $(this).toggle();
      });
    }
  }

  // Function to toggle checked menu item
  function is_checked() {
    const iCheck = $(this).parent().children("i");
    iCheck.toggle(500);
    const menu = $(this).parent()[0];
    menu.classList.toggle("menu__checked");
  }

  // Event listeners for checkboxes
  $("input[type='checkbox']").on("click", is_checked);
  $("input[type='checkbox']").on("click", checkbox_function);
  $("input[type='checkbox']").on("click", searcher);
  // $("input[type='checkbox']").on("click", moveToSearchbar); // Commented out
  $("input[type='checkbox']").on("click", hideTopbar);

  // Search input element
  const search = document.getElementById("search");
  console.log('Search element:', search);

  // Function to perform search
  function searcher() {
    let searchValue = search.value.toLowerCase();
    let contentBoxes = document.getElementsByClassName("content_box");

    // Temporarily override display to show all content boxes
    for (let i = 0; i < contentBoxes.length; i++) {
      contentBoxes[i].style.display = "block";
    }

    // Perform search filtering
    for (let i = 0; i < contentBoxes.length; i++) {
      let question = contentBoxes[i].getElementsByClassName("question")[0];
      if (question.innerHTML.toLowerCase().indexOf(searchValue) !== -1) {
        contentBoxes[i].style.display = "block";
      } else {
        contentBoxes[i].style.display = "none";
      }
    }

    // Reset styles if search input is empty
    if (searchValue === "") {
      $(".content_box").removeAttr("style");
    }
  }

  // Function to hide top bar
  function hideTopbar() {
    $("#search-box").css({ height: "0" });
    $(".search_box").css({ bottom: "-150px" });
    $("#container").css({ "margin-top": "170px" });
    $("#question_mark__container").hide(300);
  }

  // Event listeners for search input
  // search.addEventListener("click", moveToSearchbar); // Commented out
  search.addEventListener("click", hideTopbar);
  search.addEventListener("keyup", searcher);

  // Window scroll event
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
});
