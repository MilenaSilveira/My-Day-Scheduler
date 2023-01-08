// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    //Current date.
    var date = dayjs();
  $("#currentDay").text(date.format("MMM D, YYYY"));

  function displayTime() {
    var actualTime = dayjs().hour();
    //console.log(currentTime);

    $(".time-block").each(function (index, timeSection) {
      //console.log(index, timeDiv);
      var id = timeSection.id;
      //console.log(id);

      var stopTime = parseInt(id.split("-")[1]);
      //console.log(blockTime);
      //== value
      //=== value, data type

      if (actualTime === stopTime) {
        $(this).addClass("present");
      } else if (actualTime > stopTime) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  }

    //Save button.
$(".saveBtn").on("click", function (params) {
    console.log($(this).prev());
    var id = $(this).attr("id");

    var divId = $(this).parent()[0].id
    console.log(divId)

    //get user input from textarea.

    const userEntry = $(this).prev()[0].value;
    console.log(userEntry)

    //Gets input information or make a new array.
   
    localStorage.setItem(divId, JSON.stringify(userEntry));
  });


  //Select class "description" and save each slot's input to schedule.
  $(".description").each(function(index, currenttextarea){
    console.log(index, currenttextarea);

    var divText = $(this).parent()[0].id
    var textValue = localStorage.getItem(divText)
    console.log(textValue);

  $(this)[0].value = textValue

  })

  displayTime();

  });