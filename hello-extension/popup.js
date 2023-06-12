document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the "Hello" heading
    var heading = document.querySelector("h1");
    heading.addEventListener("click", function () {
        alert("Hello");
    });
});
  