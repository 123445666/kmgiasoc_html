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
});
