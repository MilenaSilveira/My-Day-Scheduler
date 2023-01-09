
$(function () {

    //Current date.
    var date = dayjs();
  $("#currentDay").text(date.format("MMM D, YYYY"));

  function displayTime() {
    var currentTime = dayjs().hour();
    

    $(".time-block").each(function (index, timeSection) {
    
      var id = timeSection.id;
      var clearTime = parseInt(id.split("-")[1]);

     //Adds class that will change colors according to status of the event.
      if (currentTime === clearTime) {
        $(this).addClass("present");
      } else if (currentTime > clearTime) {
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

    const userEntry = $(this).prev()[0].value.trim()
    console.log(userEntry)

    //Gets input information or make a new array.
   
    localStorage.setItem(divId, userEntry);
  });


  //Select class "description" and save each slot's content to schedule.
  $(".description").each(function(index, currenttextarea){
    console.log(index, currenttextarea);

    var divText = $(this).parent()[0].id
    var textValue = localStorage.getItem(divText);

    $(this)[0].value = textValue
    
    console.log(textValue);


  })

  displayTime();

  });