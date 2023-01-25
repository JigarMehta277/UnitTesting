//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TESTS ==========

function test__checkHumberId(valueIn, expected) {
  "use strict";

  let result = checkHumberId(valueIn); //User value is checked here.

  let msg = "Value tested: " + valueIn + " " + "Expected Value: " + expected; //Display message is generated here.

  if (result === expected) { //Result is checked here with boolean value
    msg += "<span style='color: green;'> ==PASSED==</span>" + "<br>"; //If true message is passed string is appended here with green color.
  }
  else {
    msg += "<span style='color: red;'> xxFAILEDxx</span>" + "<br>"; //If false message is passed string is appended here with red color.
  }

  let msgBox = document.getElementById("data"); //Html id is fetched here.

  msgBox.innerHTML += msg; //message is passed to html element
}

//True humber id block
test__checkHumberId("n12345678", true);
test__checkHumberId("n15441311", true);

//False humber id block
test__checkHumberId("n111552", false);
test__checkHumberId("155", false);
test__checkHumberId("155n", false);
test__checkHumberId("n888443338", false);


