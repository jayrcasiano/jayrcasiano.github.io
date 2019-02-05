      $(".portfolio-item").click(function (event) {
          event.preventDefault();
          //   console.log($(".modal img").attr("src", $(this).attr("href")));
          $('.modal h4').text($(this).attr("data-modal-title"));
          $(".modal img").attr("src", $(this).attr("href"));
          $(".modal").modal("show");
      });