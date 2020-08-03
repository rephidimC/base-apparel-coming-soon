// function validateEmail(email) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
//
// function validate() {
//   var result = document.querySelector(".result");
//   var email = document.querySelector(".input").innerHTML;
//   document.querySelector(".result").innerHTML=("");
//
//   if (validateEmail(email)) {
//     result.innerHTML=(email + " is valid");
//     result.style.color="green";
//     return true;
//   }
//
//     result.innerHTML=(email + " is not valid, please try again using the format 'xyz@example.com'");
//     result.style.color="red";
//     return false;
//
// }
//
// document.querySelector(".arrow").addEventListener("click", validate);


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $(".result");
  var email = $(".input").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text("please provide a valid email");
    $result.css("color", "red");
    document.querySelector(".icon-error").style.display="block";
    // iconerror.css("display", "block");
  }
  return false;
}

$(".arrow").on("click", validate);
