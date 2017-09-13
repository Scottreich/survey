
var nameInput = $("input#name").val();
  var allTogether = "Your name is " + nameInput;


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").text(allTogether);
});
});
