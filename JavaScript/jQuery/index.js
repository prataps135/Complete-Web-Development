// $("h1").css("color","red");

// $("h1").addClass("big-title");

// console.log($("a").attr("href","https://www.yahoo.com"));

// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $("input").keypress(function (event) {
//   console.log(event.key);
// });

// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover",function (){
//     $("h1").css("color","purple");
// });

// $("h1").on("mouseleave",function (){
//     $("h1").css("color","blue");
// });

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
