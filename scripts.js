$('#first').on('click', () => {
    console.log("Yeah, you clicked me")
  });

  //Log 'Yeah, you clicked me' to the console when the user clicks on the button

$("#second").on("click", () => {
  $("#first").text("Button 2");
})
//When the user clicks on the second button change the first button's text

$("#third").on("click", () => {
  $("button").css("background-color", "red");
})
//When the user clicks on the last button, change the background-color of each button


$("#newColBtn").click(() => {
  let backGroundColor = $("#color").val();
  $("button").css("background-color", backGroundColor)
});

// $("#myInput").on("click", () =>{
//   $("button").css("background-color", "InputVal")
// }