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

  $(".description").each(function(index, currenttextarea){
    console.log(index, currenttextarea);

    var divId = $(this).parent()[0].id
    var textValue = localStorage.getItem(divId)
    console.log(textValue);

  $(this)[0].value = textValue
  
  })

  displayTime();

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });