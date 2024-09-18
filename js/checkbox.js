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

  // Function to perform search
  function searcher() {
    console.log('searcher 함수가 호출되었습니다.');
    let searchValue = $search.val().toLowerCase();
    let $contentBoxes = $(".content_box");

    // Perform search filtering
    $contentBoxes.each(function() {
      let questionText = $(this).find(".question").text().toLowerCase();
      if (questionText.indexOf(searchValue) !== -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    // Reset styles if search input is empty
    if (searchValue === "") {
      $contentBoxes.removeAttr("style");
    }
  }

  // Function to update checkboxes based on search input
  function updateCheckboxesBasedOnSearch() {
    console.log('updateCheckboxesBasedOnSearch 함수가 호출되었습니다.');
    let searchValue = $search.val().toLowerCase();
    let $checkboxes = $("input[type='checkbox']");

    if (searchValue !== "") {
      // Check all checkboxes and update UI
      $checkboxes.each(function() {
        if (!$(this).prop('checked')) {
          $(this).prop('checked', true);
          is_checked.call(this);
          checkbox_function.call(this);
        }
      });
    } else {
      // Uncheck all checkboxes and revert UI
      $checkboxes.each(function() {
        if ($(this).prop('checked')) {
          $(this).prop('checked', false);
          is_checked.call(this);
          checkbox_function.call(this);
        }
      });
    }
  }

  // Function to hide top bar
  function hideTopbar() {
    $("#search-box").css({ height: "0" });
    $(".search_box").css({ bottom: "-150px" });
    $("#container").css({ "margin-top": "170px" });
    $("#question_mark__container").hide(300);
  }

  // Search input element
  const $search = $("#search");

  // Event listeners for search input
  $search.on("click", hideTopbar);
  $search.on("keyup", function() {
    searcher();
    updateCheckboxesBasedOnSearch();
  });

  // Event listeners for checkboxes
  $("input[type='checkbox']").on("click", is_checked);
  $("input[type='checkbox']").on("click", checkbox_function);
  $("input[type='checkbox']").on("click", searcher);
  $("input[type='checkbox']").on("click", hideTopbar);

  // Window scroll event
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    const searchBoxHeight = $("#search-box").prop("style").height;
    if (searchBoxHeight) {
      if (scrollTop > 0) {
        $search.css({ position: "fixed", top: "10px", bottom: "auto" });
        $(".menu_list").css({ position: "fixed", top: "80px" });
        $("#empty_box").show();
      } else {
        $search.removeAttr("style");
        $(".menu_list").removeAttr("style");
        $("#empty_box").hide();
      }
    } else {
      if (scrollTop > 400) {
        $search.css({ position: "fixed", top: "10px", bottom: "auto" });
        $(".menu_list").css({ position: "fixed", top: "80px" });
        $("#empty_box").show();
      } else {
        $search.removeAttr("style");
        $(".menu_list").removeAttr("style");
        $("#empty_box").hide();
      }
    }
  });
});
