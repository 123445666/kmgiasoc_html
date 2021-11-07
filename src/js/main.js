import "../styles/main.css";

$(function () {
  $("#ViewModel_FreeShipping").change(function () {
    if (this.checked) {
      $("#ViewModel_PriceShipping").val(0);
      $("#ViewModel_PriceShipping").prop("disabled", true);
      return;
    }
    $("#ViewModel_PriceShipping").prop("disabled", false);
  });

  $("#DealUploadFileDto_File").on("change", function () {
    const file = this.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        $("#dealImgUpload").hide();
        $("#dealImgUploaded").show();
        $("#dealImgPreview").attr("src", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  $("#removeDealImgFile").on("click", function (e) {
    e.preventDefault();
    $("#dealImgUpload").show();
    $("#dealImgUploaded").hide();
    $("#dealImgPreview").attr("src", "");
    $("#DealUploadFileDto_File").val("");
  });

  $("#collapse-navbar").on("click", function (e) {
    e.preventDefault();
    document
      .getElementById("example-collapse-navbar")
      .classList.toggle("hidden");
    document
      .getElementById("example-collapse-navbar")
      .classList.toggle("block");
  });

  var allEditors = document.querySelectorAll(".ckeditor");
  allEditors.forEach(function (el) {
    ClassicEditor.create(el, {
      toolbar: {
        items: [
          "bold",
          "italic",
          "strikethrough",
          "underline",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "imageUpload",
          "mediaEmbed",
        ],
      },
      image: {
        toolbar: ["imageTextAlternative"],
      },
    }).catch((error) => {
      console.error(error);
    });
  });
});
