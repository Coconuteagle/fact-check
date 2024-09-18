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

  // Event listeners for checkboxes using 'change' event
  $("input[type='checkbox']").on("change", is_checked);
  $("input[type='checkbox']").on("change", checkbox_function);
  // Removed hideTopbar from checkbox events

  // Search input element
  const $search = $("#search");

  // Function to hide top bar
  function hideTopbar() {
    $("#search-box").css({ height: "0" });
    $(".search_box").css({ bottom: "-150px" });
    $("#container").css({ "margin-top": "170px" });
    $("#question_mark__container").hide(300);
  }

  // Function to update checkboxes based on search input
  function updateCheckboxesBasedOnSearch() {
    let searchValue = $search.val().toLowerCase();
    let $checkboxes = $("input[type='checkbox']");

    console.log("updateCheckboxesBasedOnSearch called with:", searchValue);

    if (searchValue !== "") {
      // Check all checkboxes if not already checked
      $checkboxes.each(function() {
        if (!$(this).prop('checked')) {
          console.log("Checking checkbox:", $(this).attr('id'));
          $(this).prop('checked', true).trigger('change');
        }
      });
    } else {
      // Uncheck all checkboxes if checked
      $checkboxes.each(function() {
        if ($(this).prop('checked')) {
          console.log("Unchecking checkbox:", $(this).attr('id'));
          $(this).prop('checked', false).trigger('change');
        }
      });
    }
  }

  // Event listeners for search input
  $search.on("click", hideTopbar);
  $search.on("keyup", function() {
    updateCheckboxesBasedOnSearch();
  });

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
